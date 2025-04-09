(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{447:function(a,t,s){"use strict";s.r(t);var e=s(33),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[a._v("#")]),a._v(" Validation")]),a._v(" "),s("p",[a._v("A schema can be provided in two formats: ShExC, the language described in the "),s("a",{attrs:{href:"http://shex.io/shex-primer/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ShEx primer"),s("OutboundLink")],1),a._v(" or ShExJ, a JSON-based format for shape expressions. Both formats have a dedicated module with a "),s("code",[a._v("decode")]),a._v(" function to get the ShEx schema from a string in the respective language.")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[a._v(":ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" \n  "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShExC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"""\n    PREFIX ex: <http://ex.example/#>\n    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n    PREFIX school: <http://school.example/#>\n    PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\n    school:enrolleeAge xsd:integer MinInclusive 13 MaxInclusive 20\n\n    school:Enrollee {\n      foaf:age @school:enrolleeAge ;\n      ex:hasGuardian IRI {1,2}\n    }\n    """')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("For both formats there's also a bang variant "),s("code",[a._v("decode!")]),a._v(" which returns the result directly (not in an ok tuple) and fails in error cases.")]),a._v(" "),s("p",[a._v("RDF data can now be validated with such a schema and a ShapeMap passed to the "),s("code",[a._v("ShEx.validate/3")]),a._v(" function. For the ShapeMap you can also pass any data structure from which an ShapeMap can be constructed.")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[a._v("result_shape_map "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("RDF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Turtle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("read_string!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"""\n        PREFIX ex: <http://ex.example/#>\n        PREFIX inst: <http://example.com/users/>\n        PREFIX school: <http://school.example/#>\n        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\n        inst:Alice foaf:age 13 ;\n          ex:hasGuardian inst:Person2, inst:Person3 .\n\n        inst:Bob foaf:age 15 ;\n          ex:hasGuardian inst:Person4 .\n\n        inst:Claire foaf:age 12 ;\n          ex:hasGuardian inst:Person5 .\n\n        inst:Don foaf:age 14 .\n        """')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShExC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("decode!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"""\n        PREFIX ex: <http://ex.example/#>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n        PREFIX school: <http://school.example/#>\n        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\n        school:enrolleeAge xsd:integer MinInclusive 13 MaxInclusive 20\n\n        school:Enrollee {\n          foaf:age @school:enrolleeAge ;\n          ex:hasGuardian IRI {1,2}\n        }\n        """')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("users"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Alice")]),a._v("> "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Enrollee>,")]),a._v("\n        ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("users"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Bob")]),a._v("> "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Enrollee>,")]),a._v("\n        ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("users"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Claire")]),a._v("> "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Enrollee>,")]),a._v("\n        ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("users"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Don")]),a._v("> "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" ~"),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("I")]),a._v("<"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Enrollee>,")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("The result of the validation is a result ShapeMap for which the associations now have the value "),s("code",[a._v(":conformant")]),a._v(" or "),s("code",[a._v(":nonconformant")]),a._v(" in the "),s("code",[a._v("status")]),a._v(" field of the association. For example:")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" association "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<-")]),a._v(" result_shape_map "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("IO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("puts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("#{")]),a._v("inspect association"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("node"),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}")])]),a._v(" is "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("#{")]),a._v("association"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("status"),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}")])]),a._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("end")]),a._v("\n")])])]),s("p",[a._v("will output")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("~I<http://example.com/users/Alice> is conformant\n~I<http://example.com/users/Bob> is conformant\n~I<http://example.com/users/Claire> is nonconformant\n~I<http://example.com/users/Don> is nonconformant\n")])])]),s("p",[a._v("The "),s("code",[a._v("reason")]),a._v(" field of an association contains a list of "),s("code",[a._v("ShEx.Violation")]),a._v(" structures with details about the reason why it's nonconformant. The fields of these depend on the type of violation. You can get a string representation of any type of violation with the "),s("code",[a._v("ShEx.Violation.message/1")]),a._v(" function.")]),a._v(" "),s("p",[a._v("If you want to output the failures of the result, instead of filtering the nonconformant associations, you can also access them directly, since the associations are partitioned on a result ShapeMap into the fields "),s("code",[a._v("conformant")]),a._v(" and "),s("code",[a._v("nonconformant")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" association "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<-")]),a._v(" result_shape_map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nonconformant "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("IO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("puts "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"""\n    '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("#{")]),a._v("inspect association"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("node"),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}")])]),a._v(" is not valid because: "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("#{")]),a._v("\n        association"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("reason \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Enum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Violation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("Enum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}")])]),a._v('\n    """')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("end")]),a._v("\n")])])]),s("p",[a._v("This will output:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("~I<http://example.com/users/Claire> is not valid because:\n- matched none of at least 1 ~I<http://xmlns.com/foaf/0.1/age> triples\n  - %RDF.Literal{value: 12, datatype: ~I<http://www.w3.org/2001/XMLSchema#integer>} is less than 13.0\n\n~I<http://example.com/users/Don> is not valid because:\n- matched none of at least 1 ~I<http://ex.example/#hasGuardian> triples\n")])])]),s("h2",{attrs:{id:"parallelization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parallelization"}},[a._v("#")]),a._v(" Parallelization")]),a._v(" "),s("p",[a._v("The validation of all the nodes in ShapeMap can also run be run in parallel by passing the option "),s("code",[a._v("parallel: true")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[a._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token module class-name"}},[a._v("ShEx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" shape_map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("parallel:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Under the hood the work of processing the nodes is distributed in batches over your CPUs with the "),s("a",{attrs:{href:"https://github.com/plataformatec/flow",target:"_blank",rel:"noopener noreferrer"}},[a._v("Flow"),s("OutboundLink")],1),a._v(" library. Since for small amounts of nodes to be validated the usage of Flow means a little overhead, if you don't provide the option explicitly the "),s("code",[a._v("parallel")]),a._v(" flag is set to "),s("code",[a._v("true")]),a._v(" only for query ShapeMaps (as these usually produce more ShapeMap associations) and fixed ShapeMaps with more than 10 ShapeMap associations.")]),a._v(" "),s("p",[a._v("You can however turn off this auto-setting of the "),s("code",[a._v("parallel")]),a._v(" flag with the "),s("code",[a._v("parallel")]),a._v(" application configuration field:")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[a._v("config "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[a._v(":shex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("parallel:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])])]),s("p",[a._v("ShEx.ex automatically uses sane defaults for the Flow configuration. You can still try to tweak them for yourself. The options to "),s("code",[a._v("ShEx.validate/4")]),a._v(" are passed through to "),s("a",{attrs:{href:"https://hexdocs.pm/flow/Flow.html#from_enumerable/2%60",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("Flow.from_enumerable/2")]),s("OutboundLink")],1),a._v(". You can also configure them globally:")]),a._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[a._v("config "),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[a._v(":shex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("flow_opts:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("max_demand:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("min_demand:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("stages:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("These default options are used whenever "),s("code",[a._v("parallel")]),a._v(" is set to "),s("code",[a._v("true")]),a._v(" and no Flow option is provided on a "),s("code",[a._v("ShEx.validate/4")]),a._v(" call.")]),a._v(" "),s("p",[a._v("You're invited to share your experience or thoughts on the "),s("a",{attrs:{href:"https://discuss.rdf.community/c/rdf-tooling-libraries/elixir",target:"_blank",rel:"noopener noreferrer"}},[a._v("forum"),s("OutboundLink")],1),a._v(", a "),s("a",{attrs:{href:""}},[a._v("GitHub issue")]),a._v(" or PR.")])])}),[],!1,null,null,null);t.default=n.exports}}]);