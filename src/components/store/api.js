import ShopifyBuy from 'shopify-buy'
import Cookies from 'universal-cookie'

const collectionWhiteList = [
  298518977, //Swag
  315550913, //Bundles
  343929793, //Solder
  262492865, //Accessories
  343930305, // Conductive-Inks
  302583105, //Standard Substrates
]

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
  cookies.set(name, object)
}

function strip(html){
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}


export function fetchAllCollections() {
  return new Promise(function(resolve, reject) {

    // Try fetching from cookies first, otherwise query http.
    const cookieName = 'collection_labels7'
    var collections = getCookie(cookieName)
    if (collections) {
      console.log('Collections retrieved from cookies!')
      return resolve(collections)
    }

    shopClient.fetchAllCollections().then(function (collections) {
      // Remove unused collections, and extract useful information.
      var filteredCol = collections.filter(collection => collectionWhiteList.includes(collection.attrs.collection_id))
      var skinnyCollections = filteredCol.map(function(collection) {
        return {
          description: strip(collection.attrs.body_html),
          collectionId: collection.attrs.collection_id.toString(),
          handle: collection.attrs.handle,
          title: collection.attrs.title
        }
      })
      setCookie(cookieName, skinnyCollections)
      return resolve(skinnyCollections)
    })
  });
}

export function fetchProductSnippets(collectionId){
  return new Promise(function(resolve, reject) {

  const cookieName = `collection_${collectionId}`
  var products = getCookie(cookieName)
  if (products) {
    console.log('Products retrieved from cookies!')
    return resolve(products)
  }

  shopClient.fetchQueryProducts({ collection_id: collectionId}).then(function (products) {
      // Extract useful information for each product.
      var i, skinnyProducts = []
      for (i = 0; i < products.length; i ++ ){
          skinnyProducts.push({
          id: products[i].id.toString(),
          title: products[i].title,
          price: products[i].selectedVariant.formattedPrice,
          description: strip(products[i].description).substr(0,150)+"...",
          image: products[i].selectedVariantImage.variants[5].src
        })
      }
      setCookie(cookieName, skinnyProducts)
      return resolve(skinnyProducts)
    })
  });
}

export function fetchProduct(product_id) {
  return new Promise(function(resolve, reject) {

    shopClient.fetchProduct(product_id).then(function (product) {
      const skinnyProduct = {
        id: product.id.toString(),
        title: product.title,
        description: product.description,
        image: product.images[0].src,
        selectedVariant: product.selectedVariant
      }
      return resolve(skinnyProduct)
    })
  });
}
