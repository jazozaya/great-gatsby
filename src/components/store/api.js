import ShopifyBuy from 'shopify-buy'
import Cookies from 'universal-cookie'

var shopClient = ShopifyBuy.buildClient({
  accessToken: '349df796683b8ac51137cbe5f43dbcfc',
  domain: 'voltera.myshopify.com',
  appId: '6'
});

const cookies = new Cookies()

function getCookie(name) {
  return cookies.get(name)
}

function setCookie(name, object) {
  const cookieLength = JSON.stringify(object).length
  if (cookieLength > 2000){
    console.warn(`Cookie ${name} is longish! ${cookieLength}`)
  }
  if (cookieLength > 4000){
    console.error(`Cookie ${name} is too long! ${cookieLength}`)
  }
  cookies.set(name, object, {path: '/'})
}

function strip(html){
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function getImages(images) {
  let img = []
  images.forEach((image) => {
    img.push(image.src)
  })
  return img
}

// Extract the bare minimum for each product to create a snippet.
function getSkinnyProducts(products) {
  const skinnyProducts = products.map((product ) => {
    return {
      id: product.id.toString(),
      title:  product.title,
      price: product.selectedVariant.formattedPrice,
      description: strip(product.description).substr(0,150)+"...",
      image: product.selectedVariantImage.variants[5].src
    }
  })
  return skinnyProducts
}



export function fetchCollectionDetails(collectionId) {
  return new Promise(function(resolve, reject) {

    // Try fetching from cookie first. Otherwise query http:
    const cookieName = `collection_${collectionId}`
    var collection = getCookie(cookieName)
    if (collection) {
      return resolve(collection)
    }
    shopClient.fetchCollection(collectionId).then(function (collection) {
      const skinnyCollection =  {
        description: strip(collection.attrs.body_html),
        collectionId: collection.attrs.collection_id.toString(),
        handle: collection.attrs.handle,
        title: collection.attrs.title
      }
      setCookie(cookieName, skinnyCollection)
      return resolve(skinnyCollection)
    })
  });
}

// Return product snippets from a given collection.
export function fetchProductSnippets(collectionId){
  return new Promise(function(resolve, reject) {

  const cookieName = `collection_products_${collectionId}`
  var products = getCookie(cookieName)
  if (products) {
    return resolve(products)
  }

  shopClient.fetchQueryProducts({ collection_id: collectionId, sort_by: "best-selling"}).then(function (products) {
    const skinnyProducts = getSkinnyProducts(products)
    setCookie(cookieName, skinnyProducts)
    return resolve(skinnyProducts)
    })
  });
}

// Individual products are not stored in cookies.
export function fetchProduct(product_id) {
  return new Promise(function(resolve, reject) {
    shopClient.fetchProduct(product_id).then(function (product) {
      return resolve(product)
    })
  });
}

// Fetch Recent Cart (or create a new one)
export function fetchRecentCart() {
  return new Promise(function(resolve, reject) {
    shopClient.fetchRecentCart().then( cart => {
      return resolve(cart)
    })
  });
}

// For searching - Check all products and compare title and description.
export function fetchAllProducts(search) {
  return new Promise(function(resolve, reject) {
    shopClient.fetchAllProducts().then(products => {

      // need to compare all lower case.
      const lowerSearch = search.toLowerCase()
      const filteredProducts = products.filter(product => {
        if(product.title.toLowerCase().includes(lowerSearch)) {
          return true
        }
        if(product.description.toLowerCase().includes(lowerSearch)) {
          return true
        }
        return false
      })

      const skinnyProducts = getSkinnyProducts(filteredProducts)
      return resolve(skinnyProducts)
    })
  })
}
