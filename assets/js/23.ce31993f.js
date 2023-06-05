(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{390:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"市场属性配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#市场属性配置"}},[t._v("#")]),t._v(" 市场属性配置")]),t._v(" "),a("h2",{attrs:{id:"simple-summary-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary-概述"}},[t._v("#")]),t._v(" Simple Summary (概述)")]),t._v(" "),a("p",[t._v("矿工可以自己配置存储市场和检索市场的属性。")]),t._v(" "),a("h2",{attrs:{id:"abstract-功能简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract-功能简介"}},[t._v("#")]),t._v(" Abstract (功能简介)")]),t._v(" "),a("p",[a("code",[t._v("venus-market")]),t._v(" 支持矿工的市场交易属性可独立配置，并可以由矿工自己配置，而不是通过链服务维护人员间接进行。")]),t._v(" "),a("p",[t._v("关联：")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 提案的"),a("a",{attrs:{href:"https://github.com/filecoin-project/venus/issues/5410",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[ ] "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus/discussions/5425",target:"_blank",rel:"noopener noreferrer"}},[t._v("社区discussion"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"motivation-来源-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation-来源-背景"}},[t._v("#")]),t._v(" Motivation (来源/背景)")]),t._v(" "),a("p",[a("code",[t._v("Filecoin")]),t._v(" 网络中的矿工参与市场交易需要一些属性来保证交易过程正常进行，也可以通过一些属性来设置自己的交易取向，如：仅接受可验证订单、只进行离线订单等。可配置属性如下：")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default config:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderVerifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderUnverifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PieceCidBlocklist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ExpectedSealDuration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24h0m0s"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealStartDelay")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"336h0m0s"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PublishMsgPeriod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30s"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealsPerPublishMsg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxProviderCollateralMultiplier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("RetrievalFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("TransfePath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxPublishDealsFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxMarketBalanceAddFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("AddressConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("DisableWorkerFallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("RetrievalPricing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Strategy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("RetrievalPricing.Default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("VerifiedDealsFreeTransfer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("RetrievalPricing.External")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),a("p",[t._v("在目前的 "),a("code",[t._v("venus-market")]),t._v(" 实现中，所有的矿工共用一份配置，无法单独为某个矿工配置交易属性。")]),t._v(" "),a("h3",{attrs:{id:"延伸问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延伸问题"}},[t._v("#")]),t._v(" 延伸问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("批量发单的问题: "),a("code",[t._v("market-client")]),t._v(" 需要支持批量发单：自动切分文件、发单；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("venus-market")]),t._v(" 统一 "),a("code",[t._v("pool-run")]),t._v(" 和 "),a("code",[t._v("solo-run")]),t._v(" 两种部署模式为一种，倾向于部署在链下。")])])]),t._v(" "),a("h2",{attrs:{id:"specification-feature-spec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-feature-spec"}},[t._v("#")]),t._v(" Specification (feature Spec)")]),t._v(" "),a("h3",{attrs:{id:"属性配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性配置"}},[t._v("#")]),t._v(" 属性配置")]),t._v(" "),a("ul",[a("li",[t._v("有一套全局的属性表，当矿工没有独立配置时采用全局配置；")]),t._v(" "),a("li",[t._v("支持矿工有独立的属性表；")]),t._v(" "),a("li",[t._v("提供更新属性的 "),a("code",[t._v("API")]),t._v("及界面。")])]),t._v(" "),a("p",[t._v("支持多矿工属性的配置项如下：")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# global")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderVerifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderUnverifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PieceCidBlocklist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ExpectedSealDuration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24h0m0s"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealStartDelay")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"336h0m0s"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PublishMsgPeriod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1h0m0s"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealsPerPublishMsg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxProviderCollateralMultiplier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("RetrievalFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("TransferPath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxPublishDealsFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxMarketBalanceAddFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Strategy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing.Default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("VerifiedDealsFreeTransfer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing.External")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.AddressConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("DisableWorkerFallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个矿工的属性表，没有配置则使用全局配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Miners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Addr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f01000"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Account")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testuser01"')]),t._v("\n  \n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderVerifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderUnverifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PieceCidBlocklist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ExpectedSealDuration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24h0m0s"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealStartDelay")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"336h0m0s"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PublishMsgPeriod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1h0m0s"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealsPerPublishMsg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxProviderCollateralMultiplier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("RetrievalFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("TransferPath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxPublishDealsFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxMarketBalanceAddFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Strategy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing.Default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("VerifiedDealsFreeTransfer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing.External")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.AddressConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("DisableWorkerFallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Miners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Addr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f01002"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Account")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testuser02"')]),t._v("\n  \n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOnlineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderOfflineRetrievalDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderVerifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConsiderUnverifiedStorageDeals")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PieceCidBlocklist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ExpectedSealDuration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"24h0m0s"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealStartDelay")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"336h0m0s"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PublishMsgPeriod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1h0m0s"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxDealsPerPublishMsg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxProviderCollateralMultiplier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("RetrievalFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("TransferPath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxPublishDealsFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxMarketBalanceAddFee")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 FIL"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Strategy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing.Default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("VerifiedDealsFreeTransfer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.RetrievalPricing.External")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("CommonProviderConfig.AddressConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("DisableWorkerFallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h3",{attrs:{id:"用户界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户界面"}},[t._v("#")]),t._v(" 用户界面")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("venus-market")]),t._v(" 的命令行;")]),t._v(" "),a("li",[a("code",[t._v("venus-sector-manager/venus-tools")]),t._v(" 的命令行(可选);")])]),t._v(" "),a("h2",{attrs:{id:"design-rationale-设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-rationale-设计思路"}},[t._v("#")]),t._v(" Design Rationale (设计思路)")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility-兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-兼容性"}},[t._v("#")]),t._v(" Backwards Compatibility（兼容性）")]),t._v(" "),a("p",[t._v("本需求的实现会改变配置项的结构，需要实现配置文件的自动升级.")]),t._v(" "),a("h2",{attrs:{id:"test-cases-测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases-测试用例"}},[t._v("#")]),t._v(" Test Cases (测试用例)")]),t._v(" "),a("ul",[a("li",[t._v("配置文件自动升级；")]),t._v(" "),a("li",[t._v("矿工交易属性可通过命令行或手动改配置文件设置；")])]),t._v(" "),a("h2",{attrs:{id:"security-considerations-安全考量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations-安全考量"}},[t._v("#")]),t._v(" Security Considerations (安全考量)")]),t._v(" "),a("h2",{attrs:{id:"implementation-实施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-实施"}},[t._v("#")]),t._v(" Implementation（实施）")])])}),[],!1,null,null,null);s.default=n.exports}}]);