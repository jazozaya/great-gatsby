import ShopifyBuy from 'shopify-buy'

export var shopClient = ShopifyBuy.buildClient({
  accessToken: '349df796683b8ac51137cbe5f43dbcfc',
  domain: 'voltera.myshopify.com',
  appId: '6'
});

export function strip(html){
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}
