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
  cookies.set(name, object, {path: '/'})
}

function removeCookie(name) {
  cookies.remove(name, { path: '/'})
}

function strip(html){
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export function fetchCollection(collectionId) {
  return new Promise(function(resolve, reject) {

    // Try fetching from cookie first. Otherwise query http:
    const cookieName = `collection_${collectionId}`
    var collection = getCookie(cookieName)
    if (collection) {
      console.log("Collection retrived from cookies!")
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

export function fetchAllCollections() {
  return new Promise(function(resolve, reject) {

    // Try fetching from cookies first, otherwise query http.
    const cookieName = 'collection_labels'
    var collections = getCookie(cookieName)
    if (collections) {
      console.log('All Collections retrieved from cookies!')
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

// Return product snippets from a given collection.
export function fetchProductSnippets(collectionId){
  return new Promise(function(resolve, reject) {

  const cookieName = `collection_products_${collectionId}`
  var products = getCookie(cookieName)
  if (products) {
    console.log('Product Snippets retrieved from cookies!')
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

// Individual products are not stored in cookies.
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


// Don't store cart in cookie. Just retrieve from shopify to avoid mismatches.
export function fetchRecentCart() {
  return new Promise(function(resolve, reject) {
    shopClient.fetchRecentCart().then( cart => {
      return resolve(cart)
    })
  });
}
