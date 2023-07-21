(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{401:function(t,e,a){"use strict";a.r(e);var s=a(17),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模拟官方机器人-http-方式检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟官方机器人-http-方式检索"}},[t._v("#")]),t._v(" 模拟官方机器人 HTTP 方式检索")]),t._v(" "),a("p",[t._v("目前常见的检索方式 "),a("code",[t._v("GraphSync")]),t._v("、"),a("code",[t._v("HTTP")]),t._v("、"),a("code",[t._v("Bitswap")]),t._v(" 三种，"),a("code",[t._v("droplet")]),t._v(" 默认使用的是 "),a("code",[t._v("GraphSync")]),t._v(" 方式，在 v2.8.0 版本之后，也支持 "),a("code",[t._v("HTTP")]),t._v(" 方式。由于 "),a("code",[t._v("HTTP")]),t._v(" 是无状态的请求数据，在检索时无需要建立大量索引的特性，对于检索成功率提升较高。")]),t._v(" "),a("h2",{attrs:{id:"开启-http-检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-http-检索"}},[t._v("#")]),t._v(" 开启 HTTP 检索")]),t._v(" "),a("p",[t._v("除了需要将 Libp2p 的端口公网映射出去，用于 "),a("code",[t._v("GraphSync")]),t._v(" 接单和检索使用；droplet 还需要将 "),a("code",[t._v("ListenAddress")]),t._v(" 的 "),a("strong",[t._v("41235")]),t._v(" 端口映射出去 (可以自定义，在配置文件中修改即可)，用于 "),a("code",[t._v("HTTP")]),t._v(" 方式的检索使用。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v(".droplet/config.toml")]),t._v(" 中，配置 "),a("strong",[t._v("HTTPRetrievalMultiaddr")]),t._v(" 的公网地址，用于向检索的客户端发送订单的 piece 数据。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[CommonProvider]\n  HTTPRetrievalMultiaddr = "/ip4/公网IP地址/tcp/41235/http"\n  ConsiderOnlineStorageDeals = false\n  ConsiderOfflineStorageDeals = false\n  ConsiderOnlineRetrievalDeals = true\n  ConsiderOfflineRetrievalDeals = true\n')])])]),a("h3",{attrs:{id:"通过-http-请求验证检索功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-http-请求验证检索功能"}},[t._v("#")]),t._v(" 通过 HTTP 请求验证检索功能")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://公网IP:41235/piece/baga6ea4sexxxxxx --output /tmp/test\n")])])]),a("p",[t._v("如果可以正常下载到 piece，则说明 HTTP 方式的检索配置成功")]),t._v(" "),a("h3",{attrs:{id:"通过-retrievalbot-工具验证检索功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-retrievalbot-工具验证检索功能"}},[t._v("#")]),t._v(" 通过 RetrievalBot 工具验证检索功能")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/simlecode/RetrievalBot.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout feat/simple-http\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("ol",[a("li",[t._v("确保 droplet 已经开启 HTTP 检索；")]),t._v(" "),a("li",[t._v("配置 RetrievalBot。 先通过 "),a("code",[t._v("droplet actor info --miner f0xxxx")]),t._v(" 获取 RetrievalBot 工具需要的 "),a("strong",[t._v("PeerID")]),t._v(" 和 "),a("strong",[t._v("Multiaddrs")]),t._v("。")])]),t._v(" "),a("p",[t._v("RetrievalBot 配置文件示例如下:")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http_retrieval.toml")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# miner id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ID")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f0xxxx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# miner peer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PeerID")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12D3KooWBvPWkWLEHbr7iwDUs8CMQ8j2V85keakBZunP3YMZ9SEk"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Multiaddrs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/1.182.90.10/tcp/48027"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# piece cids")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Pieces")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baga6ea4seaqd65uw3tksjc5nilba5fmy4swlbchwx4k47cpe3slba37z7o26cga"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("./http_worker")]),t._v(" 进行验证")]),t._v(" "),a("p",[t._v("返回值为 "),a("code",[t._v("miner f0xxx retrieval bagaxxxxxoa success")]),t._v(" 则说明支持 HTTP 方式检索")])])}),[],!1,null,null,null);e.default=r.exports}}]);