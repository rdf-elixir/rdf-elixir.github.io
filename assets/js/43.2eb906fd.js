(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{442:function(e,t,s){"use strict";s.r(t);var a=s(33),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"default-prefixes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-prefixes"}},[e._v("#")]),e._v(" Default prefixes")]),e._v(" "),s("p",[e._v("By default the configured "),s("code",[e._v("RDF.default_prefixes/0")]),e._v(" are defined before every query. See the section about "),s("a",{attrs:{href:"/../rdf-ex/serializations"}},[e._v("Managing prefixes")]),e._v(" for more on that. So, unless you've configured additional "),s("code",[e._v("default_prefixes")]),e._v(" or set "),s("code",[e._v("use_standard_prefixes")]),e._v(" to "),s("code",[e._v("false")]),e._v(", you'll get these prefixes implicitly and can use them on every query without having to define them all the time.")]),e._v(" "),s("div",{staticClass:"language-sparql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sparql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PREFIX")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[s("span",{pre:!0,attrs:{class:"token prefix"}},[e._v("rdf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")])])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PREFIX")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[s("span",{pre:!0,attrs:{class:"token prefix"}},[e._v("rdfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")])])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("http://www.w3.org/2000/01/rdf-schema#"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PREFIX")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[s("span",{pre:!0,attrs:{class:"token prefix"}},[e._v("xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")])])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("http://www.w3.org/2001/XMLSchema#"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("p",[e._v("You can also provide your own query-specific default prefixes with the "),s("code",[e._v("default_prefixes")]),e._v(" option on the "),s("code",[e._v("SPARQL.query/1")]),e._v(" function. Setting this option to "),s("code",[e._v("nil")]),e._v(" or an empty map disables the "),s("code",[e._v("default_prefixes")]),e._v(" just on a single query.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The prefixes you're using in your query are also used for the "),s("code",[e._v("RDF.Graph")]),e._v(" build with "),s("code",[e._v("CONSTRUCT")]),e._v(" queries, so it might be useful to also specify additional prefixes in "),s("code",[e._v("CONSTRUCT")]),e._v(" queries, which are not directly used in your query but in the nodes of the resulting graph (although you can also add those later programmatically with "),s("code",[e._v("RDF.Graph.add_prefixes/2")]),e._v(").")])])])}),[],!1,null,null,null);t.default=r.exports}}]);