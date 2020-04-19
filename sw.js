importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08a7f48e3a3156d30992.js",
    "revision": "c7462399c62088d262050233b8193c20"
  },
  {
    "url": "/_nuxt/17615531cc1d071fd083.js",
    "revision": "e7a1fbec27ec105dc1330a49ac788601"
  },
  {
    "url": "/_nuxt/1989b0fd2dd8f7c6feef.js",
    "revision": "d0433605bcb3b2cbc6f7ffc0f23367f6"
  },
  {
    "url": "/_nuxt/c8025e9f3d5c73b740ea.js",
    "revision": "7d44c90f64b7ae094ab9ea60670f9745"
  },
  {
    "url": "/_nuxt/edd3b3c8d38c5252be29.js",
    "revision": "de3aab1af32672cca873b46ac59bb917"
  },
  {
    "url": "/_nuxt/f067a2b662e93719f5c7.js",
    "revision": "0fff1ff22a801cf1c6f810869bfa266c"
  },
  {
    "url": "/_nuxt/fe41b34096e4fb54538c.js",
    "revision": "c44d3d887c35f72752198a841fb6840d"
  }
], {
  "cacheId": "Portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
