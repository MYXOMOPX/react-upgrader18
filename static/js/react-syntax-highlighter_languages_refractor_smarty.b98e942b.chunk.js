"use strict";(self.webpackChunkupgrader=self.webpackChunkupgrader||[]).push([[849,3047],{2491:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,s=i.length;-1!==t.code.indexOf(r=n(a,s));)++s;return i[s]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(s){for(var l=0;l<s.length&&!(r>=o.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=o[r],d=t.tokenStack[p],c="string"===typeof u?u:u.content,g=n(a,p),f=c.indexOf(g);if(f>-1){++r;var k=c.substring(0,f),m=new e.Token(a,e.tokenize(d,t.grammar),"language-"+a,d),b=c.substring(f+g.length),h=[];k&&h.push.apply(h,i([k])),h.push(m),b&&h.push.apply(h,i([b])),"string"===typeof u?s.splice.apply(s,[l,1].concat(h)):u.content=h}}else u.content&&i(u.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]},8429:function(e,n,t){var a=t(2491);function r(e){e.register(a),function(e){e.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},e.hooks.add("before-tokenize",(function(n){var t=!1;e.languages["markup-templating"].buildPlaceholders(n,"smarty",/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,(function(e){return"{/literal}"===e&&(t=!1),!t&&("{literal}"===e&&(t=!0),!0)}))})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"smarty")}))}(e)}e.exports=r,r.displayName="smarty",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_smarty.b98e942b.chunk.js.map