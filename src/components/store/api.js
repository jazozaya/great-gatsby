import Client from 'shopify-buy'
import Cookies from 'universal-cookie'
import 'whatwg-fetch'

var client = Client.buildClient({
  storefrontAccessToken: '349df796683b8ac51137cbe5f43dbcfc',
  domain: 'voltera.myshopify.com',
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
  cookies.set(name, object, {path: '/', expires: new Date(+new Date + 12096e5)}) // Expires 2 weeks from now (including cart)
}

// Extract the bare minimum for each product to create a snippet.
function getSkinnyProducts(products) {
  const skinnyProducts = products.map((product ) => {
    return {
      id: product.id,
      title:  product.title,
      price: product.variants[0].price,
      description: product.description.substr(0,150)+"...",
      image: product.images[0].src
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

    client.collection.fetch(collectionId).then(function (collection) {
      const skinnyCollection =  {
        description: collection.description,
        collectionId: collection.id,
        handle: collection.handle,
        title: collection.title
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

    client.collection.fetchWithProducts(collectionId).then(collection => {
      const skinnyProducts = getSkinnyProducts(collection.products)
      setCookie(cookieName, skinnyProducts)
      return resolve(skinnyProducts)
    })

  });
}

// Individual products are not stored in cookies.
export function fetchProduct(product_id) {
  return new Promise(function(resolve, reject) {
    client.product.fetch(product_id).then(product => {
      return resolve(product)
    })
  });
}

/* 3 Possible scenarios
A - Brand new user, cookie does not exist. Create a new checkout and store cookie.
B - Old checkout, cookie exists - we return the checkout
C - Old checkout, but order was paid for. cookie exists, inspect order for completion and create a new one.
*/
export function fetchRecentCheckout() {
  return new Promise(function(resolve, reject) {
    const cookieName = 'checkout_id'

    var checkoutId = getCookie(cookieName)
    if (checkoutId) {
      client.checkout.fetch(checkoutId).then(checkout => {

        // Inspect it. If completed - create a new one and store cookie.
        if (checkout.completedAt === null) {
          return resolve(checkout)
        } else {
          client.checkout.create().then(checkout => {
            setCookie(cookieName, checkout.id)
            return resolve(checkout)
          })
        }
      })
    } else {

      // Create a brand new order and store cookie.
      client.checkout.create().then(checkout => {
        setCookie(cookieName, checkout.id)
        return resolve(checkout)
      })
    }
  })
}

export function addItemtoCheckout(checkoutId, lineItems) {
  return new Promise(function(resolve, reject) {
    client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
      return resolve(checkout)
    })
  })
}

export function removeLineItems(checkoutId, lineItemId) {
  return new Promise(function(resolve, reject){
    client.checkout.removeLineItems(checkoutId, [lineItemId]).then(checkout => {
      return resolve(checkout)
    })
  })
}

export function updateLineItems(checkoutId, lineItemId, quantity) {
  return new Promise(function(resolve, reject) {
    const lineItems = [
      {
        id: lineItemId,
        quantity: quantity
      }
    ]
    client.checkout.updateLineItems(checkoutId, lineItems).then(checkout => {
      return resolve(checkout)
    })
  })
}

// For searching - Check all products and compare title and description.

export function fetchAllProducts(search) {
  return new Promise(function(resolve, reject) {
    client.product.fetchAll(200).then(products => {
      // need to compare all lower case.
      const lowerSearch = search.toLowerCase()
      const filteredProducts = products.filter(product => {
        if(product.title.toLowerCase().indexOf(lowerSearch) !== -1) {
          return true
        }
        if(product.description.toLowerCase().indexOf(lowerSearch) !== -1) {
          return true
        }
        return false
      })

      const skinnyProducts = getSkinnyProducts(filteredProducts)
      return resolve(skinnyProducts)
    })
  })
}
