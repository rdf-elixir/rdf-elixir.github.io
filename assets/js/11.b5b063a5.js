(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(e,t,s){"use strict";s.r(t);var a=s(33),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),s("p",[e._v("As we saw in the last section, URIs can be kept in the "),s("code",[e._v("Grax.Schema")]),e._v("s "),s("code",[e._v("property")]),e._v(" values for the data properties as values with the "),s("code",[e._v(":iri")]),e._v(" datatype. But usually you aren't particularly interested on the URI, but on the description of the identified resource, you'll want to use them as object properties and map them to nested structs with the RDF descriptions of the RDF resources (nodes).")]),e._v(" "),s("p",[e._v("As we've said, object properties are still "),s("code",[e._v("Grax.Schema")]),e._v(" properties that are mapped to fields of an Elixir struct. But the values of these properties are mapped differently. As opposed to the values of data properties, which are mapped from RDF literal/XSD datatypes to values of simple Elixir datatypes, the value of object properties are "),s("code",[e._v("Grax.Schema")]),e._v(" structs, nested recursively to build up a tree structure under the root resource.")]),e._v(" "),s("p",[e._v("Before we get back to our graph diagram example, let's make a change in our diagram notation. We want to differentiate between leaf nodes with simple values and RDF literals from resource nodes whose description can itself be  put into a "),s("code",[e._v("Grax.Schema")]),e._v(" struct. So, in the following graph diagrams "),s("code",[e._v("Grax.Schema")]),e._v(" structs will be represented as diamond nodes. The URI in the node is the value of the "),s("code",[e._v("__id__")]),e._v(" field of the struct, while the other fields are the properties on the outgoing edges of the "),s("code",[e._v("Grax.Schema")]),e._v(" struct. So, the whole tree of the root node and its direct children are the "),s("code",[e._v("Grax.Schema")]),e._v(" struct. Think of "),s("code",[e._v("Grax.Schema")]),e._v(" structs as root nodes holding Elixir mappings of a subset of the RDF graph with statements directly or indirectly associated with our root node.")]),e._v(" "),s("p",[e._v("If we put the "),s("code",[e._v(":Address1")]),e._v(" resource as our first object property into the picture, we would get this if we would map the identifier to an ordinary "),s("code",[e._v("property")]),e._v(" in our schema.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/user1-link1.png",alt:"img"}})]),e._v(" "),s("p",[e._v("The problem here is that we aren't actually interested in the identifier, in this case a blank node identifier, but the description of the resource it identifies. So, we'll embed the "),s("code",[e._v("Grax.Schema")]),e._v(" struct directly as value of the respective object property.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/img/user1-link1-2.png",alt:"img"}})]),e._v(" "),s("p",[e._v("The object properties of RDF resources are represented on "),s("code",[e._v("Grax.Schema")]),e._v("s as "),s("strong",[s("em",[e._v("links")])]),e._v(", which are the properties of an RDF resource (node) linking to other RDF resources (nodes). They map the description of resources linked with this property in a RDF graph into a "),s("code",[e._v("Grax.Schema")]),e._v(" with the description of this resource which gets embedded into the "),s("code",[e._v("Grax.Schema")]),e._v(" of the linking resource. So, the links allow us to traverse the nodes of a graph, but as we're accessing the graph through the "),s("code",[e._v("Grax.Schema")]),e._v(" of a particular resource, this traversal happens by accessing it as a tree structure down from a root resource and its fields of nested "),s("code",[e._v("Grax.Schema")]),e._v(" structs.")]),e._v(" "),s("p",[e._v("A Grax link can be defined in a Grax "),s("code",[e._v("schema")]),e._v(" definition with the "),s("code",[e._v("link/3")]),e._v(" macro. The first two arguments are again for the name and IRI of the property. The "),s("code",[e._v(":type")]),e._v(" option however has a different meaning and is no longer optional on link properties. It must be the module name of another "),s("code",[e._v("Grax.Schema")]),e._v(" struct.")]),e._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("defmodule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("User")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Grax")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alias")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("NS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  schema "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("required:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("email:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("required:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("age:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":integer")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("password:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v("\n    \n    link "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("address:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Address")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("defmodule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Address")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Grax")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alias")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("NS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),e._v("\n\n  schema "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("PostalAddress")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("country:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("addressCountry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("city:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("addressLocality"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("street:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("streetAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])]),s("p",[e._v("But just as for data properties single struct values are assumed unless the module name is put in square brackets. This allows us to map another of the remaining object properties of our example: the "),s("code",[e._v("foaf:friends")]),e._v(" property is mapped to a list of instances of the "),s("code",[e._v("Post")]),e._v(" schema struct.")]),e._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("defmodule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("User")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Grax")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alias")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("NS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  schema "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("required:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("email:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("required:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("age:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":integer")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("password:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v("\n    \n    link "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("address:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("PostalAddress")]),e._v("\n    link "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("friends:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("friend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])]),s("p",[e._v("So, in this simplistic example where the address resource consist only of a couple data properties ...")]),e._v(" "),s("p",[e._v("But of course the complexities of mappings of relational associations don't just disappear completely. We need somehow deal with the possible complexities of the associations between the entities of the domain of our application.\nYou might have already asked yourself how the recursive traversal of the graph for loading the nested schema of a root node is done. There are still some problems we have to deal with as we can see on our "),s("code",[e._v("friends")]),e._v(" link: how many levels of friends do we want to load and how do we handle circles like in the link for the "),s("code",[e._v("posts")]),e._v(" property which is bidirectional linked resource schema.")]),e._v(" "),s("h2",{attrs:{id:"preloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preloading"}},[e._v("#")]),e._v(" Preloading")]),e._v(" "),s("p",[e._v("Preloading is the operation of populating a "),s("code",[e._v("Grax.Schema")]),e._v(" struct by loading (mapping) the RDF descriptions of linked resources from a RDF graph\ninto a tree structure over the linked property fields of a "),s("code",[e._v("Grax.Schema")]),e._v(" struct as recursive nestings.")]),e._v(" "),s("p",[e._v("There are potentially several useful preloading strategies, which might be implemented in possible future versions. For now, the only preloading strategy supported is the depth preloading strategy, where all of the properties and links up to a specified recursive depth.")]),e._v(" "),s("p",[e._v("The default behaviour for how deep the links of a mapping struct are loaded can be specified on a "),s("code",[e._v("link")]),e._v(" definition with the "),s("code",[e._v(":preload")]),e._v(" option, which accepts for now only a "),s("code",[e._v(":depth")]),e._v(" option keyword with an integer for the preloading depth. The default value for "),s("code",[e._v(":depth")]),e._v(" is "),s("code",[e._v("1")]),e._v(". This means  all of the data and object properties are loaded, including the nested "),s("code",[e._v("Grax.Schema")]),e._v(" mapping with the descriptions of a linked resource, BUT NOT the linked "),s("code",[e._v("Grax.Schema")]),e._v(" structs of these nested "),s("code",[e._v("Grax.Schema")]),e._v(" structs. These would only be preloaded if the depth was")]),e._v(" "),s("p",[e._v("TODO: Insert graph diagrams with the preloaded")]),e._v(" "),s("p",[e._v("This preloading depth is interpreted against the root element. That means the")]),e._v(" "),s("p",[e._v("When loading the mapping of a resource only the specified number of depth levels of the root resource is relevant. The preloading depth specified in the schema of linked resource is not taken into account and doesn't increase the overall preloading depth. This can be achieved however, by specifying an additive preloading depth with a plus sign before "),s("code",[e._v(":depth")]),e._v(" integer value, like "),s("code",[e._v("depth: +1")]),e._v(" . This will ensure that these resources are preloaded with the specified level even when the specified depth even when they itself are nested. This essentially overwrites the preloading depth specification of the parent resource.")]),e._v(" "),s("p",[e._v("Instead of writing out the depth tuples there are some shortcuts for common depth values:")]),e._v(" "),s("ul",[s("li",[e._v("the boolean "),s("code",[e._v("true")]),e._v("  is equivalent to "),s("code",[e._v("{add_depth, 1}")])]),e._v(" "),s("li",[e._v("the boolean "),s("code",[e._v("false")]),e._v(" is equivalent to "),s("code",[e._v("{add_depth, 0}")]),e._v(" and can be used to explicitly prohibit the preloading")]),e._v(" "),s("li",[e._v("non-additive depths can be specified with the integer for the depth level directly")]),e._v(" "),s("li",[e._v("additive depths can be specified in macro-contexts (on the "),s("code",[e._v("preload")]),e._v(" opt of a "),s("code",[e._v("link")]),e._v(" specification in the schema or on "),s("code",[e._v("use Grax")]),e._v(") with the an explicitly plus-signed integer like "),s("code",[e._v("+1")]),e._v(" for the depth level directly")])]),e._v(" "),s("p",[e._v("On "),s("code",[e._v("load/2")]),e._v(" calls the preloading can be configured also")]),e._v(" "),s("p",[e._v("The is a pretty greedy preloading strategy. But in the first version, which is limited to working on in-memory RDF.ex graphs, where loading is quite fast and the data access doesn't require any further IO, using this simple strategy seems a plausible first candidate.")]),e._v(" "),s("h2",{attrs:{id:"inverse-property-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inverse-property-links"}},[e._v("#")]),e._v(" Inverse property links")]),e._v(" "),s("p",[e._v("TODO: Finally, we can map the last object property of our example ...")]),e._v(" "),s("p",[e._v("TODO: Diagram")]),e._v(" "),s("p",[e._v("Sometimes we want to define a "),s("code",[e._v("link")]),e._v(" on a "),s("code",[e._v("Grax.Schema")]),e._v(" for which no RDF property exists directly. For example, in our data there is no property linking a user to a post directly. Instead there is the "),s("code",[e._v("schema:author")]),e._v("property which links a post to its authors, so exactly the inverse property of what we want. You can specify a link property on a "),s("code",[e._v("Grax.Schema")]),e._v(" in those cases by declaring it as an inverse property with a minus sign before the IRI of the inverse property.")]),e._v(" "),s("p",[e._v("TODO: This Post schema should be introduced earlier with preloading or in the general Link introduction.")]),e._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("defmodule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("User")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Grax")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alias")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("NS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  schema "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("required:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("email:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("required:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("age:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":integer")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("password:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("nil")]),e._v("\n    \n    link "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("friends:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("FOAF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("friend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    link "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("posts:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("defmodule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Post")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Grax")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("alias")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("NS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),e._v("\n\n  schema "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("title:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),e._v("\n    property "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("content:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("articleBody")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[e._v(":string")]),e._v("\n\n    link "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("author:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("SchemaOrg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type:")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[e._v("User")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);