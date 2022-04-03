/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eef844783887ecabc41804ea9a81526a"
  },
  {
    "url": "assets/css/0.styles.edd8ef6b.css",
    "revision": "822e4c4399643f31c283002729f03e1a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.ed47a8a2.js",
    "revision": "fcedb551384050c04e75d9b1fc6320d8"
  },
  {
    "url": "assets/js/12.3da2786d.js",
    "revision": "5bdf3e1214729671cfb9f53e561eb919"
  },
  {
    "url": "assets/js/13.27581851.js",
    "revision": "beefa9bae22c8841848308e7945aae1b"
  },
  {
    "url": "assets/js/14.3dd0753e.js",
    "revision": "d24f34924f6683634142e040ffd7ba03"
  },
  {
    "url": "assets/js/15.f7ddbfed.js",
    "revision": "c60a28439983de28294a6a93f69c39b9"
  },
  {
    "url": "assets/js/16.8d02a278.js",
    "revision": "240617063876694f937e516f64c3dedd"
  },
  {
    "url": "assets/js/17.59f652d2.js",
    "revision": "058cfdf4bf709c83d8c4f05b91c47fbc"
  },
  {
    "url": "assets/js/18.56ae5e44.js",
    "revision": "2044a4ad8a4a79984c1bcc7db8fe4915"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.fdfad8be.js",
    "revision": "37ffb1d7d2041a62e84f3c189a5ee478"
  },
  {
    "url": "assets/js/4.169bf8bc.js",
    "revision": "3d812e0d0d9874b1627bbba7ecaf93c8"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.8c1a0e86.js",
    "revision": "7e24d868644552fcf44a3bb0bf1f29fa"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.7b2b5953.js",
    "revision": "3e66e65433193a59187aae0cdab947f9"
  },
  {
    "url": "config/index.html",
    "revision": "fb5b10dd655222709cbd55189bf408ef"
  },
  {
    "url": "guide/index.html",
    "revision": "bbd03f79a95079a32fa3fb30876b4e16"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "76e21b9995223cb6e4349fd60f5e3c2a"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "366e13c69f7f63c4bf1f8ee2699cf9a9"
  },
  {
    "url": "intro.html",
    "revision": "24ac981ec2f187a4147144a940bc3896"
  },
  {
    "url": "javascript/es6.html",
    "revision": "f79f5cce101ea9693866f7e0a7d72e1e"
  },
  {
    "url": "react/jsx.html",
    "revision": "567a53ddec62300d77de5f38efb5fe6a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
