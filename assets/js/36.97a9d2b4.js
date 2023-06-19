(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{404:function(a,t,s){"use strict";s.r(t);var e=s(17),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"迁移订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移订单"}},[a._v("#")]),a._v(" 迁移订单")]),a._v(" "),s("p",[a._v("从 "),s("code",[a._v("lotus")]),a._v(" 迁移到 "),s("code",[a._v("venus")]),a._v(" 的时候，需要迁移已完成封装证明的订单和还在 "),s("code",[a._v("StorageDealWaitingForData")]),a._v(" 状态的订单。\n本文档主要介绍如何从 "),s("code",[a._v("lotus-miner")]),a._v(" 和 "),s("code",[a._v("boost")]),a._v(" 迁移订单到 "),s("code",[a._v("droplet")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"前置条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[a._v("#")]),a._v(" 前置条件")]),a._v(" "),s("p",[a._v("要完成订单的迁移，需要满足以下两个条件：")]),a._v(" "),s("ul",[s("li",[a._v("已经拥有一套带有 "),s("code",[a._v("droplet")]),a._v(" 组件的 "),s("code",[a._v("venus")]),a._v(" 链服务")]),a._v(" "),s("li",[a._v("已经将矿工账号迁入 "),s("code",[a._v("venus")]),a._v(" 链服务")])]),a._v(" "),s("h2",{attrs:{id:"从-lotus-miner-迁移订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-lotus-miner-迁移订单"}},[a._v("#")]),a._v(" 从 lotus-miner 迁移订单")]),a._v(" "),s("h3",{attrs:{id:"从-lotus-miner-导出订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-lotus-miner-导出订单"}},[a._v("#")]),a._v(" 从 lotus-miner 导出订单")]),a._v(" "),s("p",[a._v("通过接口导出订单，参考以下示例：")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("TOKEN")]),a._v(" 是 "),s("code",[a._v("lotus-miner")]),a._v(" 的 token，可以通过命令生成："),s("code",[a._v("lotus-miner auth api-info --perm=admin")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://127.0.0.1:2345/rpc/v0 -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: Bearer <TOKEN>"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"method": "Filecoin.MarketListIncompleteDeals","params":[], "id": 0}\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" lotus_miner_deals.json\n")])])]),s("p",[a._v("执行完命令后，你可能得到如下结果：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{"jsonrpc":"2.0","result":[{"Proposal":{"PieceCID":{"/":"baga6ea4seaqcrddjqzqavqipgljq6jn3bmbnhzw5yucdmoqoji3tni6kisjqini"},"PieceSize":128,"VerifiedDeal":false,"Client":"t3r3nyp4sitvilwc5wggvrsyoqmue3zgliqsqzqxri5up2fmlx2e5xeltxv4qbokjj6qrdgz3t7zdwygogpjaa","Provider":"t01000","Label":"uAVUAHOi_meaYr-eUqOadpea1i-ivleeahOaVsOaNrgo","StartEpoch":173482,"EndEpoch":694737,"StoragePricePerEpoch":"0",\n......\n":"bafkqahhix6m6ngfp46kkrzu5uxtllc7iv6k6pgue42k3bzunvyfa"},"PieceCid":{"/":"baga6ea4seaqcrddjqzqavqipgljq6jn3bmbnhzw5yucdmoqoji3tni6kisjqini"},"PieceSize":127,"RawBlockSize":0},"AvailableForRetrieval":false,"DealID":0,"CreationTime":"2022-08-03T10:35:09.774748628+08:00","TransferChannelId":null,"SectorNumber":0,"InboundCAR":""}],"id":0}\n')])])]),s("p",[a._v("其中，"),s("code",[a._v("result")]),a._v(" 中的每一项都是一个订单的详细信息。每个订单中的 "),s("code",[a._v("State")]),a._v(" 字段表征了当前订单的状态，如果 "),s("code",[a._v("State")]),a._v(" = 18，表示当前订单处于 "),s("code",[a._v("StorageDealWaitingForData")]),a._v(" 的状态。")]),a._v(" "),s("h3",{attrs:{id:"将订单导入到-droplet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将订单导入到-droplet"}},[a._v("#")]),a._v(" 将订单导入到 "),s("code",[a._v("droplet")])]),a._v(" "),s("p",[a._v("开始导入订单之前，先确认矿工账号是否在 "),s("code",[a._v("venus")]),a._v(" 链服务中，如果不在，需要将矿工账号迁入 "),s("code",[a._v("venus")]),a._v(" 链服务。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./droplet actor list\n")])])]),s("p",[a._v("确定完矿工之后，在 "),s("code",[a._v("droplet")]),a._v(" 中可以直接通过命令导入订单：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./droplet storage deal import-deal lotus_miner_deals.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 结果")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" deals success\n")])])]),s("h2",{attrs:{id:"从-boost-迁移订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-boost-迁移订单"}},[a._v("#")]),a._v(" 从 boost 迁移订单")]),a._v(" "),s("h3",{attrs:{id:"从-boost-导出订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-boost-导出订单"}},[a._v("#")]),a._v(" 从 boost 导出订单")]),a._v(" "),s("p",[a._v("boost 支持两种发单协议，暂且称之为新老协议，用户发单时两种协议可能都使用到了，所以需要分两步导出订单。")]),a._v(" "),s("h4",{attrs:{id:"导出老协议订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出老协议订单"}},[a._v("#")]),a._v(" 导出老协议订单")]),a._v(" "),s("p",[a._v("通过接口导出订单，此次导出和从 "),s("code",[a._v("lotus-miner")]),a._v(" 导出订单很类似，参考例子：")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("TOKEN")]),a._v(" 是 "),s("code",[a._v("boost")]),a._v(" 生成的 token，可以通过命令 "),s("code",[a._v("./boostd auth create-token --perm admin")]),a._v(" 生成。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://127.0.0.1:1288/rpc/v0 -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Authorization: Bearer <TOKEN>"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"method": "Filecoin.MarketListIncompleteDeals","params":[], "id": 0}\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" boost_old_deals.json\n")])])]),s("h4",{attrs:{id:"导出新协议订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出新协议订单"}},[a._v("#")]),a._v(" 导出新协议订单")]),a._v(" "),s("ol",[s("li",[a._v("先确定有多少订单")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -X POST -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"query":"query { dealsCount() }"}\'')]),a._v(" http://localhost:8080/graphql/query "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 结果")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dealsCount"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("返回结果中 "),s("code",[a._v("dealsCount")]),a._v(" 的值就是现有订单数量。")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("导出全部订单")])]),a._v(" "),s("blockquote",[s("p",[a._v("下面查询中 "),s("code",[a._v("limit")]),a._v(" 字段的值是 10000000，最多获取到 10000000 条订单，需要大于现有的订单数量。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"query":"query { deals(limit: 10000000) { totalCount deals { ID ClientAddress ProviderAddress CreatedAt PieceCid PieceSize IsVerified ProposalLabel ProviderCollateral ClientCollateral StoragePricePerEpoch StartEpoch EndEpoch ClientPeerID DealDataRoot SignedProposalCid InboundFilePath ChainDealID PublishCid IsOffline Transfer { Type Size } IsTransferStalled Checkpoint Err Sector { ID Offset Length } Message } } }"}\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nhttp://localhost:8080/graphql/query "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" boost_deals.json\n")])])]),s("h3",{attrs:{id:"导入订单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入订单"}},[a._v("#")]),a._v(" 导入订单")]),a._v(" "),s("p",[a._v("开始导入订单之前，先确认矿工账号是否在 "),s("code",[a._v("venus")]),a._v(" 链服务中，如果不在，需要将矿工账号迁入 "),s("code",[a._v("venus")]),a._v(" 链服务。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./droplet actor list\n")])])]),s("ol",[s("li",[a._v("导入老协议订单")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./droplet storage deal import-deal boost_old_deals.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 结果")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" deals success\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("导入新协议订单")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./droplet storage deal import-deal --from boost boost_deals.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 结果")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" deals success\n")])])]),s("blockquote",[s("p",[a._v("--car-dirs 指定car文件的目录，可以设置多个：--car-dirs /tmp/cars --car-dirs /tmp/cars2，程序会根据 piece cid 来获取订单 payload size")])]),a._v(" "),s("blockquote",[s("p",[a._v("payload size 在生成索引的时候会用到")])]),a._v(" "),s("p",[a._v("如果导入过程遇到 "),s("code",[a._v("deal bafyreih7qaddtjxu66khjohckd3gkp42p3x5i2fhw5xjw325rnb7wvje7q payload size 0")]),a._v("，则说明有的订单的 "),s("code",[a._v("payload size")]),a._v(" 是 "),s("code",[a._v("0")]),a._v("，这样的订单不会导入。可以通过设置 "),s("code",[a._v("--car-dirs")]),a._v("，让程序根据 "),s("code",[a._v("piece cid")]),a._v(" 去获取 "),s("code",[a._v("payload size")]),a._v(" 来解决这个问题。")])])}),[],!1,null,null,null);t.default=r.exports}}]);