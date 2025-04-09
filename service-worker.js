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
    "revision": "542f83785c2d5777ae057672efbfcb08"
  },
  {
    "url": "assets/css/0.styles.e42cd381.css",
    "revision": "66605f12555218a8ee225e3adbd963e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d8652099.js",
    "revision": "24faa228b7abdda90ae13b3327626558"
  },
  {
    "url": "assets/js/11.b5b063a5.js",
    "revision": "e16718921e9f1803d4c48c8204fd5a84"
  },
  {
    "url": "assets/js/12.66a069c0.js",
    "revision": "8cdedae0cf1212e3e0af07b9d2476fe1"
  },
  {
    "url": "assets/js/13.2cfdc3dd.js",
    "revision": "e6f9443454da595053fbf957094c5d96"
  },
  {
    "url": "assets/js/14.ab1c4cea.js",
    "revision": "7a6a8a6a71c643ccca42a3952ea05c62"
  },
  {
    "url": "assets/js/15.205368ce.js",
    "revision": "6f848bc9135badcfc5d661cdeb3eda52"
  },
  {
    "url": "assets/js/16.4fba6b56.js",
    "revision": "3e9cfbff83a350e3689e65dcefd68e35"
  },
  {
    "url": "assets/js/17.d904193e.js",
    "revision": "bc22f3f51a9dac8525e1f1ee6ebbf54d"
  },
  {
    "url": "assets/js/18.14499fe3.js",
    "revision": "2fe9f440cf3eb6bbdd2c991180c43cb7"
  },
  {
    "url": "assets/js/19.0025da81.js",
    "revision": "0d6a13ba513d1d8cd2d94a95e633da09"
  },
  {
    "url": "assets/js/2.fe4a9d0f.js",
    "revision": "bef209ea2b7e23415ecf3957318a1b4a"
  },
  {
    "url": "assets/js/20.68a9feea.js",
    "revision": "b3d42fb1e5a04d86aeec6c7d1519dada"
  },
  {
    "url": "assets/js/21.5e2eba51.js",
    "revision": "dc37ffc4eb503bbedcc66fb561f851ed"
  },
  {
    "url": "assets/js/22.b2b92157.js",
    "revision": "2db3f707e9762b6bbdd4a4c9547f50bf"
  },
  {
    "url": "assets/js/23.cae099a3.js",
    "revision": "c99e130ec2d1eae803fcc5ae2f60149c"
  },
  {
    "url": "assets/js/24.6c7c6e8f.js",
    "revision": "b06f83663ebd1c063b7b32fc2fe69ea8"
  },
  {
    "url": "assets/js/25.eaecaff7.js",
    "revision": "1774eb9a5153dc66d868c7ab9ccc7f41"
  },
  {
    "url": "assets/js/26.acaa031d.js",
    "revision": "725e0c56ef88b15dd5f44f2d5feb62ff"
  },
  {
    "url": "assets/js/27.a4508bcd.js",
    "revision": "8ef4274e8fd72eee429fe4217c77b228"
  },
  {
    "url": "assets/js/28.903475f9.js",
    "revision": "800da43125d4a0fee5f45b8e9a76fb7f"
  },
  {
    "url": "assets/js/29.3b6c21b2.js",
    "revision": "ef7f363ca6d0c88da19be878f6de24e4"
  },
  {
    "url": "assets/js/3.86527ece.js",
    "revision": "0378459d54f7d3f3a4cbcb955e6eba4e"
  },
  {
    "url": "assets/js/30.1981f7e2.js",
    "revision": "383b415b14cfd7566b14461e1e84b693"
  },
  {
    "url": "assets/js/31.4d0bdd70.js",
    "revision": "83bb2cbc501e9f1b8256d177e1186fe6"
  },
  {
    "url": "assets/js/32.6bf07341.js",
    "revision": "c8181462a4a8181356cb81a4b7497b0d"
  },
  {
    "url": "assets/js/33.e40eecb0.js",
    "revision": "aa530d97d54f928055032916ed44475b"
  },
  {
    "url": "assets/js/34.34d277ff.js",
    "revision": "62b978aa346b3476745d55183062541e"
  },
  {
    "url": "assets/js/35.3a4c625b.js",
    "revision": "fd26e30649536cd1c17188f2a295d426"
  },
  {
    "url": "assets/js/36.f9a87501.js",
    "revision": "4d12e96e7bc38272057ca40412f3136b"
  },
  {
    "url": "assets/js/37.94872f15.js",
    "revision": "96c3a880231260cf8e5f5057b0c3f263"
  },
  {
    "url": "assets/js/38.aa0b744b.js",
    "revision": "896548a3a9484ea4436b81e0adefa97f"
  },
  {
    "url": "assets/js/39.045b81fb.js",
    "revision": "503be9d7c3e836a691dd244ab332cadc"
  },
  {
    "url": "assets/js/4.48986d85.js",
    "revision": "47171d43de3a1d030055030cdae95f94"
  },
  {
    "url": "assets/js/40.3cf15cb2.js",
    "revision": "259c860bbe2f805b3ca7b48cc3dd6d30"
  },
  {
    "url": "assets/js/41.40cc84c4.js",
    "revision": "d4fff6a47bc2f3e71666ef2b325d68f2"
  },
  {
    "url": "assets/js/42.0cc80afe.js",
    "revision": "a77eaec22488a01d7f4956eb1a240031"
  },
  {
    "url": "assets/js/43.1fbcbf87.js",
    "revision": "c62e8d0fdbf76d2678c6fc788910bc4f"
  },
  {
    "url": "assets/js/44.94d71f3f.js",
    "revision": "785a81deaf8bd7a15b60c06d195b05ef"
  },
  {
    "url": "assets/js/45.a6b59359.js",
    "revision": "9a1ee66ed088f467ca31f1c3dbc759ab"
  },
  {
    "url": "assets/js/46.50e39da4.js",
    "revision": "a10db2119e226d3583808b2de416258f"
  },
  {
    "url": "assets/js/47.dcb7e438.js",
    "revision": "5f503b2646687db9e1751190ef9153af"
  },
  {
    "url": "assets/js/48.ad3aebe0.js",
    "revision": "c4d7897e5b25e234b8764638dfeb53a4"
  },
  {
    "url": "assets/js/49.be64fc3b.js",
    "revision": "a768c5a8a9910015c50eb02728f6934b"
  },
  {
    "url": "assets/js/5.eda9e818.js",
    "revision": "fabb2964af38f2cd51d738203210406d"
  },
  {
    "url": "assets/js/50.bdb59928.js",
    "revision": "28f33bda92933123be4c700680337cd5"
  },
  {
    "url": "assets/js/6.c11fc16c.js",
    "revision": "00a4310aa050a2c9836832b05d397d62"
  },
  {
    "url": "assets/js/7.387005f0.js",
    "revision": "c4d50b8399eb0be925e1f985b78deb60"
  },
  {
    "url": "assets/js/8.5395f88e.js",
    "revision": "c99dbff4831c56dbdafcb274037a36d0"
  },
  {
    "url": "assets/js/9.3c40eb18.js",
    "revision": "3e1f16b7b9a07762701637dff874c263"
  },
  {
    "url": "assets/js/app.d516a4a9.js",
    "revision": "bac0d4225e16b7c83a1dc6b583926d7f"
  },
  {
    "url": "grax/api.html",
    "revision": "89c6d817110d94271c20e3588c64a6d4"
  },
  {
    "url": "grax/bak/links.bak.html",
    "revision": "d9ff83b47f6fe244243779829a4e5eec"
  },
  {
    "url": "grax/bak/links.html",
    "revision": "6864ebfce7804c8db1642e60f41a6703"
  },
  {
    "url": "grax/bak/schema.bak.html",
    "revision": "2d267ebdaad3e61f80cf2f860d080aa3"
  },
  {
    "url": "grax/ids.html",
    "revision": "c5d7225d3701dd86ec37091e1acbfd83"
  },
  {
    "url": "grax/index.html",
    "revision": "1bb831c265484a4b169008c294f74cbb"
  },
  {
    "url": "grax/installation.html",
    "revision": "f05d80c16e263a0ce50b4957a9a9dfcf"
  },
  {
    "url": "grax/schemas.html",
    "revision": "03f16b5e2ec265cf1c734f7c654db9eb"
  },
  {
    "url": "hero.png",
    "revision": "e6d40cb4de8bd46acaf93421780b02e4"
  },
  {
    "url": "icons/favicon-114-precomposed.png",
    "revision": "0b28ad63392e42e335a2844606dbd483"
  },
  {
    "url": "icons/favicon-120-precomposed.png",
    "revision": "37778f591ab5fecac37b832107765713"
  },
  {
    "url": "icons/favicon-144-precomposed.png",
    "revision": "3468b4fe60f74af6e657ff4ce6f511d2"
  },
  {
    "url": "icons/favicon-152-precomposed.png",
    "revision": "b24ece2db369a2dd5c127bf0e2efe948"
  },
  {
    "url": "icons/favicon-180-precomposed.png",
    "revision": "22e5617d034ae7589b907ac907ccb8e6"
  },
  {
    "url": "icons/favicon-192.png",
    "revision": "f42d1bd9195bf70245060cab9356adc5"
  },
  {
    "url": "icons/favicon-32.png",
    "revision": "0b2d8c1bea1c7c129fc5266b939a47c3"
  },
  {
    "url": "icons/favicon-36.png",
    "revision": "417b07e996b1ae5e871f26a7639f4192"
  },
  {
    "url": "icons/favicon-48.png",
    "revision": "9cb53cb26f9241d1a045499ccd1a6767"
  },
  {
    "url": "icons/favicon-57.png",
    "revision": "d030c1daa05dc053cbe2c83a32d30216"
  },
  {
    "url": "icons/favicon-60.png",
    "revision": "be896a64c9470a3be4dc7c051620bf5a"
  },
  {
    "url": "icons/favicon-72-precomposed.png",
    "revision": "f1d84226665a08108aef297053e4ec2b"
  },
  {
    "url": "icons/favicon-72.png",
    "revision": "f1d84226665a08108aef297053e4ec2b"
  },
  {
    "url": "icons/favicon-76.png",
    "revision": "17b172f92698bc7e99b8268090122a18"
  },
  {
    "url": "icons/favicon-96.png",
    "revision": "88dd1d695a4df741073b0579ba9850cb"
  },
  {
    "url": "index.html",
    "revision": "ebbcfcbf189e5347c6d8075c504e3655"
  },
  {
    "url": "links.html",
    "revision": "3478864214baaf6946998efc0970526b"
  },
  {
    "url": "rdf-ex/blank-nodes.html",
    "revision": "f7f7bbf6505879a37f9acf7425da5b16"
  },
  {
    "url": "rdf-ex/data-structures.html",
    "revision": "152b30b5636d5558f9296978059cc307"
  },
  {
    "url": "rdf-ex/description-and-graph-dsl.html",
    "revision": "e7568c1139078dca8b1d434e2741f1c8"
  },
  {
    "url": "rdf-ex/index.html",
    "revision": "8b3664557e2f48b4118a7ab359b68833"
  },
  {
    "url": "rdf-ex/installation.html",
    "revision": "f6de0ad4e89ca74f853db2b9fe845812"
  },
  {
    "url": "rdf-ex/iris.html",
    "revision": "2d7a01b4d48e623d1a06d42701298339"
  },
  {
    "url": "rdf-ex/lists.html",
    "revision": "a33ff4c34b8ade950f2eb7b9693231d9"
  },
  {
    "url": "rdf-ex/literals.html",
    "revision": "4f84cd39980c87f6d2727f65c7372c79"
  },
  {
    "url": "rdf-ex/mapping-between-rdf-and-elixir.html",
    "revision": "3fffe8b07c293b4efb5e4a0d24c14a48"
  },
  {
    "url": "rdf-ex/namespaces.html",
    "revision": "74b9a8f8bd08d374a819211b27bc16b9"
  },
  {
    "url": "rdf-ex/rdf-star.html",
    "revision": "308fdc4221e1cf8d229299eaf863de86"
  },
  {
    "url": "rdf-ex/resource-generators.html",
    "revision": "ab9bcd558f53a826fcf57246ab7b80ed"
  },
  {
    "url": "rdf-ex/serializations.html",
    "revision": "2ef2521ae62f741edf6ec927213e65d0"
  },
  {
    "url": "rdf-ex/statements.html",
    "revision": "3b9438275f75a3df6ec2e8af8747c74e"
  },
  {
    "url": "rtc-ex/annotations.html",
    "revision": "3734e3797070e37cf828b7a56135ad4f"
  },
  {
    "url": "rtc-ex/basic-graph-api.html",
    "revision": "c7a1486bb492ddc0ca07b11a0429a42c"
  },
  {
    "url": "rtc-ex/compound-hierarchies.html",
    "revision": "a4d5fe6e9476c650b22015009f416e4e"
  },
  {
    "url": "rtc-ex/index.html",
    "revision": "35de1714dd5e36257ab9d68f49d310f8"
  },
  {
    "url": "rtc-ex/installation.html",
    "revision": "f7b6e7f3e548054a2d778acb4276dc7c"
  },
  {
    "url": "shex-ex/index.html",
    "revision": "c32c1401df0c9de9c21c8603ef16871a"
  },
  {
    "url": "shex-ex/installation.html",
    "revision": "5fb9a1a0185b794eb23f8c9ed13b4d28"
  },
  {
    "url": "shex-ex/limitations.html",
    "revision": "47466f576d579f19c73a63af37250d9f"
  },
  {
    "url": "shex-ex/shape-maps.html",
    "revision": "3ec122cbfd93b1a70efc8f348d6e6113"
  },
  {
    "url": "shex-ex/validation.html",
    "revision": "fcfa4d9214556408d205ee495a843dc7"
  },
  {
    "url": "sparql-ex/default-prefixes.html",
    "revision": "519400a7232fa2a89efbfcf507882a7e"
  },
  {
    "url": "sparql-ex/defining-extension-functions.html",
    "revision": "53c596ed564bd2cc5cf2431ebe563f19"
  },
  {
    "url": "sparql-ex/executing-queries.html",
    "revision": "c9c3f8e33b5e1d26b406da68cbf44cf6"
  },
  {
    "url": "sparql-ex/index.html",
    "revision": "c031820d5280841a83d6b2d7de872c08"
  },
  {
    "url": "sparql-ex/installation.html",
    "revision": "29c916cdf9adb79953732c20a79f2d59"
  },
  {
    "url": "sparql-ex/limitations.html",
    "revision": "0beb0cbcce236e0d4becc5a3f73040e9"
  },
  {
    "url": "sparql-ex/sparql-client-configuration.html",
    "revision": "941c2348b6ad49edd0a7f49dc7f0c118"
  },
  {
    "url": "sparql-ex/sparql-client.html",
    "revision": "a01007db756f0ddb6e6393e4dfc5f24f"
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
