import Client from 'shopify-buy'
import fetch from 'node-fetch'

// Simple wrapper
function getItem(itemName) {
  return JSON.parse(sessionStorage.getItem(itemName))
}

// Simple wrapper
function setItem(itemName, value) {
  sessionStorage.setItem(itemName,JSON.stringify(value))
}

var client = Client.buildClient({
  storefrontAccessToken: 'b34b3e722fe10915ea813aae8310d8a0',
  domain: 'voltera.myshopify.com',
}, fetch);

// Extract the bare minimum for each product to create a snippet.
function getSkinnyProducts(products) {
  const skinnyProducts = products.map((product ) => {
    return {
      id: product.id,
      title:  product.title,
      price: product.variants[0].price,
      variantId: product.variants[0].id,
      description: product.description.substr(0,75)+"...",
      image: product.images[0].src
    }
  })
  return skinnyProducts
}

export function fetchCollectionDetails(collectionId) {
  return new Promise(function(resolve, reject) {

    // See if we have it in local storage first.:
    const itemName = `collection_${collectionId}`
    var collection = getItem(itemName)
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
      setItem(itemName, skinnyCollection)
      return resolve(skinnyCollection)
    })
  });
}

// Return product snippets from a given collection.
export function fetchProductSnippets(collectionId){
  return new Promise(function(resolve, reject) {


    const itemName = `collection_products_${collectionId}`
    var products = getItem(itemName)
    if (products) {
      return resolve(products)
    }

    client.collection.fetchWithProducts(collectionId).then(collection => {
      const skinnyProducts = getSkinnyProducts(collection.products)
      setItem(itemName, skinnyProducts)
      return resolve(skinnyProducts)
    })

  });
}

export function fetchProduct(product_id) {
  return new Promise(function(resolve, reject) {

    const itemName = `product_${product_id}`
    var product = getItem(itemName)
    if (product) {
      return resolve(product)
    }

    client.product.fetch(product_id).then(product => {
      setItem(itemName, product)
      return resolve(product)
    })
  });
}

/* 3 Possible scenarios
A - Brand new user, locatl storage does not exist. Create a new checkout and store locally.
B - Old checkout, local storage exists - we return the checkout
C - Old checkout, but order was paid for. cookie exists, inspect order for completion and create a new one.
*/
export function fetchRecentCheckout() {
  return new Promise(function(resolve, reject) {
    const itemName = 'checkout_id'

    var checkoutId =  localStorage.getItem(itemName);
    if (checkoutId) {
      client.checkout.fetch(checkoutId).then(checkout => {

        // Inspect it. If completed - create a new one and store cookie.
        if (checkout.completedAt === null) {
          return resolve(checkout)
        } else {
          client.checkout.create().then(checkout => {
            localStorage.setItem(itemName, checkout.id);
            return resolve(checkout)
          })
        }
      })
    } else {

      // Create a brand new order and store locally.
      client.checkout.create().then(checkout => {
        localStorage.setItem(itemName, checkout.id);
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
    const lineItems = [{id: lineItemId, quantity: quantity}]
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
