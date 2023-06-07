(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{381:function(e,n,t){"use strict";t.r(n);var a=t(17),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"market-client-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#market-client-configurations"}},[e._v("#")]),e._v(" Market Client Configurations")]),e._v(" "),t("p",[e._v("A typical configuration of "),t("code",[e._v("market-client")]),e._v(" is as follows...")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\nSimultaneous Transfers For Retrieval = 20\nSimultaneous Transfers For Storage = 20\n\n[Default MarketAddress]\n   Addr = "t3qkgm5h7nmusacfggd744w7fdj45rn6iyl7n6s6lr34t4qlfebiphmm3vxtwc4a4acqi4nv3pqk6h7ddqqz5q"\n   Account = ""\n\n[API]\n   ListenAddress = "/ip4/127.0.0.1/tcp/41231/ws"\n   RemoteListenAddress = ""\n   Secret = ""\n   Timeout = "30s"\n\n[Libp2p]\n   ListenAddresses = ["/ip4/0.0.0.0/tcp/34123", "/ip6/::/tcp/0"]\n   AnnounceAddresses = []\n   NoAnnounceAddresses = []\n   PrivateKey = ""\n\n[Node]\n   Url = "/ip4/192.168.200.106/tcp/3453"\n   Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.0fylyMSNjp8dkTrCLYkFQSjO9FokDKXrl5dqGpMDaOE"\n\n[Messager]\n   Url = ""\n   Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.0fylyMSNjp8dkTrCLYkFQSjO9FokDKXrl5dqGpMDaOE"\n\n[Signer]\n   Type = ""\n   Url = ""\n   Token = ""\n\n')])])]),t("p",[e._v("Among them, it can be divided into three parts: 1) client network configuration, 2) configuration of Venus chain service components and 3) other configurations")]),e._v(" "),t("h2",{attrs:{id:"market-client-network-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#market-client-network-configuration"}},[e._v("#")]),e._v(" Market Client network configuration")]),e._v(" "),t("p",[e._v("This part of the configuration determines the interface between the "),t("code",[e._v("market client")]),e._v(" and external actors")]),e._v(" "),t("h3",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" [API]")]),e._v(" "),t("p",[e._v("This section defines the external interface of "),t("code",[e._v("market-client")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[API]\n# market-client provides the address where the service listens\n# String type, required, default: "/ip4/127.0.0.1/tcp/41235"\nListenAddress = "/ip4/127.0.0.1/tcp/41235"\n\n# reserved text\nRemoteListenAddress = ""\n\n# key used for encrypted communication\n# String type, optional, automatically generated none is supplied\nSecret = "878f9c1f88c6f68ee7be17e5f0848c9312897b5d22ff7d89ca386ed0a583da3c"\n\n# reserved text\nTimeout = "30s"\n')])])]),t("h3",{attrs:{id:"libp2p"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#libp2p"}},[e._v("#")]),e._v(" [Libp2p]")]),e._v(" "),t("p",[e._v("The communication address used for P2P network")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Libp2p]\n# Listening network address\n# string array, required, default: ["/ip4/0.0.0.0/tcp/58418", "/ip6/::/tcp/0"]\nListenAddresses = ["/ip4/0.0.0.0/tcp/58418", "/ip6/::/tcp/0"]\n\n# reserved text\nAnnounceAddresses = []\n\n# reserved text\nNoAnnounceAddresses = []\n\n# Private key for p2p encrypted communication\n# string, optional, automatically generated if none is supplied\nPrivateKey = "08011240ae580daabbe087007d2b4db4e880af10d582215d2272669a94c49c854f36f99c35"\n')])])]),t("h2",{attrs:{id:"venus-chain-service-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-chain-service-configuration"}},[e._v("#")]),e._v(" Venus Chain Service Configuration")]),e._v(" "),t("p",[e._v("When the "),t("code",[e._v("market-client")]),e._v(" is connected to the "),t("code",[e._v("venus components")]),e._v(", the API of the related component needs to be configured.")]),e._v(" "),t("h3",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" [Node]")]),e._v(" "),t("p",[e._v("Venus chain service access configuration")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Node]\n# Entrance of the chain service\n# String type, mandatory, can also be configured directly through the --node-url flag of the command line\nUrl = "/ip4/192.168.200.128/tcp/3453"\n\n# Authentication token of Venus series components\n# String type, mandatory, can also be configured directly through the --auth-token flag of the command line\nToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9yY2VuZXQtbnYxNiIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.PuzEy1TlAjjNiSUu_tbHi2XPUritDLm9Xf5UW3MHRe8"\n\n')])])]),t("h3",{attrs:{id:"messager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messager"}},[e._v("#")]),e._v(" [Messager]")]),e._v(" "),t("p",[t("code",[e._v("venus-messager")]),e._v(" service access configuration")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Messager]\n# Message service entry\n# String type, mandatory, can also be configured directly through the --messager-url flag on the command line\nUrl = "/ip4/192.168.200.128/tcp/39812/"\n\n# Authentication token of venus series components\n# String type, mandatory, can also be configured directly through the --auth-token flag of the command line\nToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9yY2VuZXQtbnYxNiIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.PuzEy1TlAjjNiSUu_tbHi2XPUritDLm9Xf5UW3MHRe8"\n')])])]),t("h3",{attrs:{id:"signer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signer"}},[e._v("#")]),e._v(" [Signer]")]),e._v(" "),t("p",[e._v("The Venus component that provide signing services\nOnly signature services of "),t("code",[e._v("wallet")]),e._v(" type can be used in "),t("code",[e._v("market-client")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Signer]\n# Type of signature service component\n# String type can only be "wallet"\nType = "wallet"\n\n# Signature service entry\n# String type, mandatory, can also be configured directly through the --signer-url flag on the command line\nUrl = "/ip4/192.168.200.128/tcp/5678/"\n\n# wallet token for authentication\n# string type, mandatory\nToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9yY2VuZXQtbnYxNiIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.PuzEy1TlAjjNiSUu_tbHi2XPUritDLm9Xf5UW3MHRe8"\n')])])]),t("h2",{attrs:{id:"other-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-configuration"}},[e._v("#")]),e._v(" Other configuration")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# Get the maximum number of retrieval request for simultaneous transfers\n# Integer type Default: 20\nSimultaneous Transfers For Retrieval = 20\n\n# Store the maximum number of simultaneous transfers of storage deals\n# Integer type Default: 20\nSimultaneous Transfers For Storage = 20\n\n# The default address of the current market-client\n# String type, optional, can also be configured directly through the --addr flag of the command line\nDefaultMarketAddress = "t3qkgm5h7nmusacfggd744w7fdj45rn6iyl7n6s6lr34t4qlfebiphmm3vxtwc4a4acqi4nv3pqk6h7ddqqz5q:username"\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);