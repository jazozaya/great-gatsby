import feedparser
import json
from unidecode import unidecode
from bs4 import BeautifulSoup

data = feedparser.parse('https://medium.com/feed/@voltera')
previews = []

def extractPreview(title, titleStripped, published, html):
    # Parse the HTML and extract the first chunk and image.
    soup = BeautifulSoup(html, 'html.parser')
    snippet = soup.get_text(separator=" ")[:300] + "..."
    imageSrc  = soup.img['src']

    # Add to our previews
    previews.append({
    "titleStripped": titleStripped,
    "title": title,
    "published": published,
    'snippet': snippet,
    'imageSrc': imageSrc
    })



def extractArticle(index):
    #We need to extract information from feeed.
    title = unidecode(data.entries[index].title)
    author = data.entries[index].author
    published = data.entries[index].published
    src = data.entries[index].links[0].href
    content = unidecode(data.entries[index].summary)

    article = {
        "title": title,
        "author": author,
        "published": published,
        "src": src,
        "content": content
    }
    return article

def writeArticle(index):

    article = extractArticle(index);
    # Tweak the name a little bit.
    titleStripped = article['title'].replace(" ","-").replace('!',"").replace("'","").replace("+","&").lower()
    extractPreview(article['title'], titleStripped, article['published'], article['content'])

    # Save our article information
    location = 'src/components/blog/content/{0}.js'.format(titleStripped)
    with open(location, 'w') as f:
        f.write("// This file was automatically generated \n")
        f.write("export const data =\n")
        f.write(json.dumps(article, indent=4))

    #Now copy over the template (this is the Page file). Fill in the titles.
    source = 'src/components/blog/utils/pageTemplate.jsx'
    with open(source, 'r') as f:
        templateFile = f.read()

    templateFile = templateFile.replace("$titleStripped$", titleStripped)
    templateFile = templateFile.replace("$title$", article['title'])
    location = 'src/pages/blog/{0}.js'.format(titleStripped)
    with open(location, 'w') as f:
        f.write(templateFile);

    print("Finished Writing {0}".format(article['title']))

def writePreviews():
    location = 'src/components/blog/content/index.jsx'

    with open(location, 'w') as f:
        f.write("// This file was automatically generated \n")
        f.write("export const previews =\n")
        f.write(json.dumps(previews, indent=4))


for i in range(len(data.entries)):
    writeArticle(i);

writePreviews()
