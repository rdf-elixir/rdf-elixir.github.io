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
    "revision": "e1ba7643886df8a6498a660071141aaf"
  },
  {
    "url": "assets/css/0.styles.3a89626e.css",
    "revision": "90e6d87f127928ede281bd1f7fbde6ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.baa8526d.js",
    "revision": "fbe342082262c58bc73c1360fa475fea"
  },
  {
    "url": "assets/js/11.b5b063a5.js",
    "revision": "e16718921e9f1803d4c48c8204fd5a84"
  },
  {
    "url": "assets/js/12.ffcafdaf.js",
    "revision": "9bc15831691a34b57dd63b0b014c4048"
  },
  {
    "url": "assets/js/13.14194b1c.js",
    "revision": "5d5491282af4a77dc97691e46b4d056a"
  },
  {
    "url": "assets/js/14.44a29974.js",
    "revision": "feecf4edeefbf96dc47ce0ef1d90f7ba"
  },
  {
    "url": "assets/js/15.205368ce.js",
    "revision": "6f848bc9135badcfc5d661cdeb3eda52"
  },
  {
    "url": "assets/js/16.def0b643.js",
    "revision": "068f3c37bb3907bfbb93b1b6a6aa7717"
  },
  {
    "url": "assets/js/17.775816ce.js",
    "revision": "c32507d16a28de840415c19563f511e7"
  },
  {
    "url": "assets/js/18.15ef8a4a.js",
    "revision": "ece3f88f783540f5c4d654bbcb9f67f5"
  },
  {
    "url": "assets/js/19.a2247b6e.js",
    "revision": "4baf5f8fc0833c4de5ab9edf73af1ca2"
  },
  {
    "url": "assets/js/2.fe4a9d0f.js",
    "revision": "bef209ea2b7e23415ecf3957318a1b4a"
  },
  {
    "url": "assets/js/20.ce8cb202.js",
    "revision": "87bdce05343b278f7aa1610b6f7fa343"
  },
  {
    "url": "assets/js/21.4468cbc0.js",
    "revision": "c2fcea2d852fe0b193cfd0ad68ea3ace"
  },
  {
    "url": "assets/js/22.0a6b16e0.js",
    "revision": "ee533e325e7855d37951e04aa259e070"
  },
  {
    "url": "assets/js/23.34a495b5.js",
    "revision": "25dd52b0f4104d437bc027924ff209f0"
  },
  {
    "url": "assets/js/24.0fd8ffc9.js",
    "revision": "62e50790492b8199ba4075f498db69e5"
  },
  {
    "url": "assets/js/25.c54f8b9a.js",
    "revision": "3cf375223bec6649f5f6682a42168be9"
  },
  {
    "url": "assets/js/26.e1d122f8.js",
    "revision": "afb4841e64c02478efcce7deb00679b7"
  },
  {
    "url": "assets/js/27.3bd588f2.js",
    "revision": "f40cfce64375e98c6a13398c3bcc49f3"
  },
  {
    "url": "assets/js/28.e933a34f.js",
    "revision": "96432b9448485b0bf74071ae038d3040"
  },
  {
    "url": "assets/js/29.712053ad.js",
    "revision": "61d8938eed7fb671e91bc87a75b52d52"
  },
  {
    "url": "assets/js/3.86527ece.js",
    "revision": "0378459d54f7d3f3a4cbcb955e6eba4e"
  },
  {
    "url": "assets/js/30.79a1dc6f.js",
    "revision": "f2a8f3c3478d728af2fee3c3791e755f"
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
    "url": "assets/js/33.67c3d1fa.js",
    "revision": "d53eba7c4b8d81112e67a5eec3fe8385"
  },
  {
    "url": "assets/js/34.3c3d9262.js",
    "revision": "c89dfc3cd4f315a88ef06b6cc6d25800"
  },
  {
    "url": "assets/js/35.40e870ce.js",
    "revision": "449e53b7f5429ba4a7e1db4c839701e8"
  },
  {
    "url": "assets/js/36.5515165f.js",
    "revision": "0e633dbd294213e0cf8a8762b6d1bdcf"
  },
  {
    "url": "assets/js/37.4ea1ddad.js",
    "revision": "38482e7674375b34890a778e769a193b"
  },
  {
    "url": "assets/js/38.ca65c7c7.js",
    "revision": "4faa5e1f84fb3ac347b6fa7ee6a7d67e"
  },
  {
    "url": "assets/js/39.fe31b5b2.js",
    "revision": "d848de1a6df868cee455009abf89b91e"
  },
  {
    "url": "assets/js/4.eb2783cd.js",
    "revision": "be4dee08fd688c4857bae6ec13f44e8d"
  },
  {
    "url": "assets/js/40.716d6968.js",
    "revision": "499d043c584577f29761cce07d930651"
  },
  {
    "url": "assets/js/41.b85c291a.js",
    "revision": "7b2e9923cc443f79c184e30b7b7666cc"
  },
  {
    "url": "assets/js/42.0cc80afe.js",
    "revision": "a77eaec22488a01d7f4956eb1a240031"
  },
  {
    "url": "assets/js/43.2eb906fd.js",
    "revision": "cc878c25b95cb04065846cc7ea4f25f4"
  },
  {
    "url": "assets/js/44.94d71f3f.js",
    "revision": "785a81deaf8bd7a15b60c06d195b05ef"
  },
  {
    "url": "assets/js/45.b59fd69e.js",
    "revision": "c9278a406ad7f688eed94a50344872ad"
  },
  {
    "url": "assets/js/46.9013c021.js",
    "revision": "c2b72d847d4c60576cfcec753124c43f"
  },
  {
    "url": "assets/js/47.fdb4cf9d.js",
    "revision": "64fd809d5cf582c2c706608501a39005"
  },
  {
    "url": "assets/js/48.5b08ded3.js",
    "revision": "396c454d0941a697cdb7281b00d3b285"
  },
  {
    "url": "assets/js/49.be64fc3b.js",
    "revision": "a768c5a8a9910015c50eb02728f6934b"
  },
  {
    "url": "assets/js/5.857ceffb.js",
    "revision": "48b20808ea7808a650472a6856bf42df"
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
    "url": "assets/js/8.5ae9ed49.js",
    "revision": "86bf6cb045967afe5b06d493ddba83ee"
  },
  {
    "url": "assets/js/9.32a7819e.js",
    "revision": "155d35a502c2b96a655fbf19f346be4b"
  },
  {
    "url": "assets/js/app.b7f9c530.js",
    "revision": "5e008281ad46b16e45db6c86511d41ea"
  },
  {
    "url": "grax/api.html",
    "revision": "eb51bf2fea51357ffcb92153932a01d7"
  },
  {
    "url": "grax/bak/links.bak.html",
    "revision": "7f015e247528600ce6ecd067f3d3b0dd"
  },
  {
    "url": "grax/bak/links.html",
    "revision": "d94d2fb005712bdc6239c949b4fa6958"
  },
  {
    "url": "grax/bak/schema.bak.html",
    "revision": "7e070ff03bf4bdc388e1275cdeb32653"
  },
  {
    "url": "grax/ids.html",
    "revision": "7859eed783e6ba45863d39aa934860f0"
  },
  {
    "url": "grax/index.html",
    "revision": "21978709deabc4ee16805a17a7fdfea6"
  },
  {
    "url": "grax/installation.html",
    "revision": "85402c5c0be62363ff045475f6ae6cd0"
  },
  {
    "url": "grax/schemas.html",
    "revision": "8f47c1121d3ef9691b36ca07f6cba7f9"
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
    "revision": "36285e6a25ba17e56c11bbe1fd3cc3b0"
  },
  {
    "url": "links.html",
    "revision": "7e61c7bb7619572896908e70fcaeddc5"
  },
  {
    "url": "rdf-ex/blank-nodes.html",
    "revision": "33cbc6536cf577ecd414aa56b57448a7"
  },
  {
    "url": "rdf-ex/data-structures.html",
    "revision": "7e6763e7e29b31ee883533980d04fd39"
  },
  {
    "url": "rdf-ex/description-and-graph-dsl.html",
    "revision": "2c41dfbdaefaf31c656d21cc01792bbf"
  },
  {
    "url": "rdf-ex/index.html",
    "revision": "7238da58634b0101bba1c771fceed453"
  },
  {
    "url": "rdf-ex/installation.html",
    "revision": "6926613881e6c911f34f3dbee241e5f0"
  },
  {
    "url": "rdf-ex/iris.html",
    "revision": "d885f99247f6d702b0237812a0c8e024"
  },
  {
    "url": "rdf-ex/lists.html",
    "revision": "9534a87e423f7737f1eb6097df9d90c9"
  },
  {
    "url": "rdf-ex/literals.html",
    "revision": "aadb4e6237c15982f0792f1e80505ba7"
  },
  {
    "url": "rdf-ex/mapping-between-rdf-and-elixir.html",
    "revision": "ae2500b047fdfb763f618e90857e116e"
  },
  {
    "url": "rdf-ex/namespaces.html",
    "revision": "50405925760f3882053a5d1d0ea87a3f"
  },
  {
    "url": "rdf-ex/rdf-star.html",
    "revision": "787a4cb7a5bd657af67009fcc5f2b6c0"
  },
  {
    "url": "rdf-ex/resource-generators.html",
    "revision": "2914290bb1e1105f138a73770256dcce"
  },
  {
    "url": "rdf-ex/serializations.html",
    "revision": "1f32103b8d9c29416b06077d6448b7fb"
  },
  {
    "url": "rdf-ex/statements.html",
    "revision": "d42ae0947a9dba36034c8e83dc528c12"
  },
  {
    "url": "rtc-ex/annotations.html",
    "revision": "f936190291b2f41a53b00cc2580fe7b3"
  },
  {
    "url": "rtc-ex/basic-graph-api.html",
    "revision": "c80c70bea4fd7c802bb2a907906ce795"
  },
  {
    "url": "rtc-ex/compound-hierarchies.html",
    "revision": "b77f97ef5bb074d06761efb33ec33971"
  },
  {
    "url": "rtc-ex/index.html",
    "revision": "2f6792df010caf8be0baa0d35de705a0"
  },
  {
    "url": "rtc-ex/installation.html",
    "revision": "0fc44796e407ee1bd8321616cc048b2e"
  },
  {
    "url": "shex-ex/index.html",
    "revision": "5f68f2b5a70fecfa6a4bea28a21c5d96"
  },
  {
    "url": "shex-ex/installation.html",
    "revision": "54c84db999efdcc0ae5376418d1add59"
  },
  {
    "url": "shex-ex/limitations.html",
    "revision": "1a23e3607e54f4365cac8a1863052dc8"
  },
  {
    "url": "shex-ex/shape-maps.html",
    "revision": "878a935ac27f96cdf84bf17889577273"
  },
  {
    "url": "shex-ex/validation.html",
    "revision": "8345ef46d15a887165ccf847eaa71e8c"
  },
  {
    "url": "sparql-ex/default-prefixes.html",
    "revision": "c97666881a6f58b2a91dbe629004517a"
  },
  {
    "url": "sparql-ex/defining-extension-functions.html",
    "revision": "66350876fc04e891fa3ae7cb6b9a9e89"
  },
  {
    "url": "sparql-ex/executing-queries.html",
    "revision": "e8f8a901e22b335f9b3a0064fbb8c4da"
  },
  {
    "url": "sparql-ex/index.html",
    "revision": "c9718a79dc1091a808f5222cf8a0c439"
  },
  {
    "url": "sparql-ex/installation.html",
    "revision": "3642dc6da875ab8fec5b23293c45731b"
  },
  {
    "url": "sparql-ex/limitations.html",
    "revision": "d4089e4f76d5b525f0b02f69d0d083c2"
  },
  {
    "url": "sparql-ex/sparql-client-configuration.html",
    "revision": "310f3ff834b08db7f029df2cb3f2e860"
  },
  {
    "url": "sparql-ex/sparql-client.html",
    "revision": "fea767f3e70d6d6b133ab4965a90a833"
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
