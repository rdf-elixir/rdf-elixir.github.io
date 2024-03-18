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
    "revision": "5fbdef06103db1d52c79bffa6aacb0fd"
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
    "url": "assets/js/10.03f2b5e6.js",
    "revision": "78baa9ad99f8ab8cda8b3b866d705873"
  },
  {
    "url": "assets/js/11.0a955d18.js",
    "revision": "ba4f490bd2d76fc83d3d91dd23e81d8c"
  },
  {
    "url": "assets/js/12.ffcafdaf.js",
    "revision": "9bc15831691a34b57dd63b0b014c4048"
  },
  {
    "url": "assets/js/13.26d591e9.js",
    "revision": "0aea5754267c2455235dbaacbf4e8f94"
  },
  {
    "url": "assets/js/14.301b20dd.js",
    "revision": "5133939fce5db7ab0294a7ce24099ca0"
  },
  {
    "url": "assets/js/15.c85a9997.js",
    "revision": "884441901b911a6769f15074bd6efcea"
  },
  {
    "url": "assets/js/16.e3c3a423.js",
    "revision": "ec90d1b6ec2d3ccfb912acf28f9efdd2"
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
    "url": "assets/js/20.584d65dd.js",
    "revision": "dea379d9abc99e4e41dd2dcf38a86828"
  },
  {
    "url": "assets/js/21.c5864c46.js",
    "revision": "88208ff7663ef40055143fcb17ace619"
  },
  {
    "url": "assets/js/22.1ea419e2.js",
    "revision": "a06f96883b74001a670974fcfe4dd2c4"
  },
  {
    "url": "assets/js/23.9ef5f017.js",
    "revision": "77ee2b7a0b09358d4052377f8460881c"
  },
  {
    "url": "assets/js/24.86ff809e.js",
    "revision": "9be2abb97d6749b709de4cbd4571d685"
  },
  {
    "url": "assets/js/25.c54f8b9a.js",
    "revision": "3cf375223bec6649f5f6682a42168be9"
  },
  {
    "url": "assets/js/26.3af07ab9.js",
    "revision": "ca0831bcb3fad41c1e45086efd008e4d"
  },
  {
    "url": "assets/js/27.3f12f3dd.js",
    "revision": "a722b67b41b7b6de141c7c2c0403f664"
  },
  {
    "url": "assets/js/28.e933a34f.js",
    "revision": "96432b9448485b0bf74071ae038d3040"
  },
  {
    "url": "assets/js/29.73910b9b.js",
    "revision": "8415545e78f2eb6b7ecb2ad0c804444a"
  },
  {
    "url": "assets/js/3.86527ece.js",
    "revision": "0378459d54f7d3f3a4cbcb955e6eba4e"
  },
  {
    "url": "assets/js/30.df3f1f5a.js",
    "revision": "b6c884b9603664e767f18795cd520ec3"
  },
  {
    "url": "assets/js/31.4d0bdd70.js",
    "revision": "83bb2cbc501e9f1b8256d177e1186fe6"
  },
  {
    "url": "assets/js/32.34a17056.js",
    "revision": "d40f4c8b4b6984f05a3efc3b9e8e23bd"
  },
  {
    "url": "assets/js/33.a30fdfc3.js",
    "revision": "24b203899fec4843492a0045de1e52a1"
  },
  {
    "url": "assets/js/34.45429ebb.js",
    "revision": "27aafe34b2457a449ece7c1b0c2c07c9"
  },
  {
    "url": "assets/js/35.483b2e22.js",
    "revision": "5c700cf36074ca3e2171a21c223093e0"
  },
  {
    "url": "assets/js/36.3a9c7abb.js",
    "revision": "43f75dd278a2618f371ecd2da466be2c"
  },
  {
    "url": "assets/js/37.4676b6f8.js",
    "revision": "7947629349a52ce4b365401cafdbb5fc"
  },
  {
    "url": "assets/js/38.68752ecc.js",
    "revision": "8b1b1547dbafee29ea7f081d908a3001"
  },
  {
    "url": "assets/js/39.4c47f086.js",
    "revision": "dabdc53848d43edf92d4127f8bb295e5"
  },
  {
    "url": "assets/js/4.48986d85.js",
    "revision": "47171d43de3a1d030055030cdae95f94"
  },
  {
    "url": "assets/js/40.e089ea06.js",
    "revision": "021eae469c3b24ee0edf1e7d5fd706ec"
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
    "url": "assets/js/43.c4f0129e.js",
    "revision": "515ec3017c6850489cdf7a8b5abbb905"
  },
  {
    "url": "assets/js/44.734dd1fc.js",
    "revision": "9957ea46353f9e465ccf188341876c40"
  },
  {
    "url": "assets/js/45.daafafac.js",
    "revision": "3f005fd2073fc51591340774db00b2de"
  },
  {
    "url": "assets/js/46.c30a6827.js",
    "revision": "78f9852468f3f205f4af75001a838069"
  },
  {
    "url": "assets/js/47.d9393ab1.js",
    "revision": "1ddaf2f5f0c6bf15f4c35c2cf474c2b6"
  },
  {
    "url": "assets/js/48.bfadf9da.js",
    "revision": "8d9c69bf341806ee408fadbe8c97266d"
  },
  {
    "url": "assets/js/49.cd41b171.js",
    "revision": "22671ca8cc935ce9b5be33f254b211ef"
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
    "url": "assets/js/8.ae80d4fa.js",
    "revision": "085b984a280e0730f1530dbb719742da"
  },
  {
    "url": "assets/js/9.32a7819e.js",
    "revision": "155d35a502c2b96a655fbf19f346be4b"
  },
  {
    "url": "assets/js/app.04c29d7c.js",
    "revision": "77276404db55d53bc4502904ea7e1051"
  },
  {
    "url": "grax/api.html",
    "revision": "c9507efdcbf360f21b9b7365fc052b22"
  },
  {
    "url": "grax/bak/links.bak.html",
    "revision": "3eb718c82366b8d7b8819dae8a85b36c"
  },
  {
    "url": "grax/bak/links.html",
    "revision": "c89bdf4d35bf0f5cabe856375eba7597"
  },
  {
    "url": "grax/bak/schema.bak.html",
    "revision": "cd7e59678862510bacf79f5422352686"
  },
  {
    "url": "grax/ids.html",
    "revision": "62c425f740d5a05b9aefa07f07969d00"
  },
  {
    "url": "grax/index.html",
    "revision": "e0b045222394cc9351e2ba25bc3597dd"
  },
  {
    "url": "grax/installation.html",
    "revision": "7068ea7446531677f4fa06bbdae7e88b"
  },
  {
    "url": "grax/schemas.html",
    "revision": "2523d19f5d329d19f6f0f2e4e7095576"
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
    "revision": "c1e97a50bdd4840f8557c212861673b9"
  },
  {
    "url": "links.html",
    "revision": "ac255ce0cebf7823c1c0a9f9d3d27015"
  },
  {
    "url": "rdf-ex/blank-nodes.html",
    "revision": "974ad6481dd80565a46265160de20ffa"
  },
  {
    "url": "rdf-ex/data-structures.html",
    "revision": "26282186e3e16f450d4386342820f50c"
  },
  {
    "url": "rdf-ex/description-and-graph-dsl.html",
    "revision": "ad50d3569340dfa3836d04e063dc9b47"
  },
  {
    "url": "rdf-ex/index.html",
    "revision": "2d0341defb57cede7e7a35c15491d31a"
  },
  {
    "url": "rdf-ex/installation.html",
    "revision": "a1357cf3d016566f6ae11524f120cd3f"
  },
  {
    "url": "rdf-ex/iris.html",
    "revision": "764ec8d5690c217213205af951465e99"
  },
  {
    "url": "rdf-ex/lists.html",
    "revision": "c138d1fde9ab87fe942fd4908d4dcc01"
  },
  {
    "url": "rdf-ex/literals.html",
    "revision": "b334f4f34ea8ad8975f7e5ef72163676"
  },
  {
    "url": "rdf-ex/mapping-between-rdf-and-elixir.html",
    "revision": "6bb46f8d939ffa9a02a44d86c82e9392"
  },
  {
    "url": "rdf-ex/namespaces.html",
    "revision": "aa2e9765245d12252657b6081d7c5b8a"
  },
  {
    "url": "rdf-ex/rdf-star.html",
    "revision": "b8a445d69583931f19476fc683f957dd"
  },
  {
    "url": "rdf-ex/resource-generators.html",
    "revision": "ba9569532b52519d8e0d7b4754dedb3e"
  },
  {
    "url": "rdf-ex/serializations.html",
    "revision": "7b77ba3cfce6c712cbed1e775924ab1a"
  },
  {
    "url": "rdf-ex/statements.html",
    "revision": "099155935914e0e55e321c2f2247b218"
  },
  {
    "url": "rtc-ex/annotations.html",
    "revision": "627f59dda1e0460154cfec171904dbab"
  },
  {
    "url": "rtc-ex/basic-graph-api.html",
    "revision": "f8320fa8341503055351fe62eee4b1f2"
  },
  {
    "url": "rtc-ex/compound-hierarchies.html",
    "revision": "43c8b21eac0e8af8c782809ce33dcd9c"
  },
  {
    "url": "rtc-ex/index.html",
    "revision": "dfee56cfb1816da9ccb4ee0f417fa525"
  },
  {
    "url": "rtc-ex/installation.html",
    "revision": "54d31bdb0b4740511f5aed4389fff837"
  },
  {
    "url": "shex-ex/index.html",
    "revision": "357fcf7784f6760fb0e9290108c830b0"
  },
  {
    "url": "shex-ex/installation.html",
    "revision": "a8ee7608f487cba0c6e12ebe669059cf"
  },
  {
    "url": "shex-ex/limitations.html",
    "revision": "158374fa5ed9a52f4c83f160814e4c89"
  },
  {
    "url": "shex-ex/shape-maps.html",
    "revision": "fb368586eb0d6cf3bbeff6e03c14193e"
  },
  {
    "url": "shex-ex/validation.html",
    "revision": "4084e31e72d3cfcf77a5141847fe308e"
  },
  {
    "url": "sparql-ex/default-prefixes.html",
    "revision": "3d1881862dfe047e618972ff8770a5cf"
  },
  {
    "url": "sparql-ex/defining-extension-functions.html",
    "revision": "6d9a325212114fa72788d797df00f2f2"
  },
  {
    "url": "sparql-ex/executing-queries.html",
    "revision": "ab6edf78c21ce881938b2cc2d7ea379d"
  },
  {
    "url": "sparql-ex/index.html",
    "revision": "3571934f179ae3f6b373c89d1e77e17a"
  },
  {
    "url": "sparql-ex/installation.html",
    "revision": "7b040a664d58b1fd3d0ff74471ad00ff"
  },
  {
    "url": "sparql-ex/limitations.html",
    "revision": "ae256405af3897cf0ac0972e2da7d43f"
  },
  {
    "url": "sparql-ex/sparql-client-configuration.html",
    "revision": "8250e2eb91c5f3d041e121ad3afa09e9"
  },
  {
    "url": "sparql-ex/sparql-client.html",
    "revision": "034b318c6c0118029f313e879c39ab6c"
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
