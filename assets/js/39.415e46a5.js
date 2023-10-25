(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{424:function(e,t,a){"use strict";a.r(t);var s=a(17),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"venus-链服务组件间签名机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-链服务组件间签名机制"}},[e._v("#")]),e._v(" venus 链服务组件间签名机制")]),e._v(" "),a("h2",{attrs:{id:"背景介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[e._v("#")]),e._v(" 背景介绍")]),e._v(" "),a("p",[a("code",[e._v("venus")]),e._v(" 的 "),a("code",[e._v("account")]),e._v(" 体系中，各角色的关系如下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sophon-auth")]),e._v(" 为指定的用户（"),a("code",[e._v("account")]),e._v("）生成所需权限的 "),a("code",[e._v("token")]),e._v("， "),a("code",[e._v("SP")]),e._v(" 用户用此 "),a("code",[e._v("token")]),e._v(" 访问链服务接口；")]),e._v(" "),a("li",[a("code",[e._v("sophon-auth")]),e._v(" 保存 "),a("code",[e._v("account-minerIDs")]),e._v("，即一个用户可以拥有对个 "),a("code",[e._v("minerID")]),e._v("；")]),e._v(" "),a("li",[e._v("链服务组件之间的接口访问没有用到用户的 "),a("code",[e._v("token")]),e._v(", 是系统内置的共享 "),a("code",[e._v("token")])])]),e._v(" "),a("h3",{attrs:{id:"用户请求的签名机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户请求的签名机制"}},[e._v("#")]),e._v(" 用户请求的签名机制")]),e._v(" "),a("p",[e._v("以 "),a("code",[e._v("sophon-cluster")]),e._v(" 推送消息的过程为例：")]),e._v(" "),a("ul",[a("li",[e._v("以 "),a("code",[e._v("token")]),e._v(" 请求 "),a("code",[e._v("sophon-messager")]),e._v(" 的接口:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PushMessage(ctx context.Context, msg *shared.Message, meta *types.SendSpec) (string, error)\n")])])]),a("ul",[a("li",[a("code",[e._v("sophon-messager")]),e._v(" 处理 "),a("code",[e._v("rpcapi")]),e._v(" 请求，从 "),a("code",[e._v("token")]),e._v(" 中解析获得在 "),a("code",[e._v("sophon-auth")]),e._v(" 中生成的 "),a("code",[e._v("account")]),e._v(", 然后调用 "),a("code",[e._v("sophon-gateway")]),e._v(" 中的签名接口:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WalletSign(ctx context.Context, account string, addr address.Address, toSign []byte, meta venusTypes.MsgMeta) (*crypto.Signature, error)\n")])])]),a("ul",[a("li",[a("code",[e._v("sophon-gateway")]),e._v(" 根据 "),a("code",[e._v("account")]),e._v(" 找到对应的 "),a("code",[e._v("venus-wallet")]),e._v(" 服务进行签名。")])]),e._v(" "),a("h3",{attrs:{id:"链服务内部的签名机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链服务内部的签名机制"}},[e._v("#")]),e._v(" 链服务内部的签名机制")]),e._v(" "),a("p",[e._v("链服务组件之间的接口访问用的是内置的 "),a("code",[e._v("share token")]),e._v("，故无法通过 "),a("code",[e._v("token")]),e._v(" 解析出 "),a("code",[e._v("account")]),e._v("， 这样就需要依赖 "),a("code",[e._v("sophon-auth")]),e._v(" 的 保存 "),a("code",[e._v("account-minerIDs")]),e._v(" 体系。以 "),a("code",[e._v("venus-miner")]),e._v(" 请求 "),a("code",[e._v("sophon-gateway")]),e._v(" 为例进行说明。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("venus-miner")]),e._v(" 从 "),a("code",[e._v("sophon-auth")]),e._v(" 获取 "),a("code",[e._v("account-miners")]),e._v(" 列表；")]),e._v(" "),a("li",[e._v("先从"),a("code",[e._v("account-miners")]),e._v(" 列表中查找 "),a("code",[e._v("minerID")]),e._v(" 对应的 "),a("code",[e._v("account")]),e._v("， 然后调用 "),a("code",[e._v("sophon-gateway")]),e._v(" 的 "),a("code",[e._v("WalletSign")]),e._v(" 接口。")])]),e._v(" "),a("h3",{attrs:{id:"问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[e._v("#")]),e._v(" 问题分析")]),e._v(" "),a("p",[e._v("本问题以接入 "),a("code",[e._v("venus")]),e._v(" 链服务的场景进行分析")]),e._v(" "),a("ul",[a("li",[e._v("链服务中没有 "),a("code",[e._v("signer address")]),e._v(" 与 "),a("code",[e._v("account")]),e._v(" 的关系表，而依赖链服务的签名接口需要 "),a("code",[e._v("account")]),e._v(" 参数，"),a("code",[e._v("droplet")]),e._v(" 需要额外扩展 "),a("code",[e._v("signer-account")]),e._v(" 关系，如下：")])]),e._v(" "),a("p",[e._v("假设 "),a("code",[e._v("f0128788")]),e._v(" 的可签名地址有: "),a("code",[e._v("f3wylwd6pclppme4qmbgwled5xpsbgwgqbn2alxa7yahg2gnbfkipsdv6m764xm5coizujmwdmkxeugplmorha")]),e._v(", "),a("code",[e._v("f3r47fkdzfmtex5ic3jnwlzc7bkpbj7s4d6limyt4f57t3cuqq5nuvhvwv2cu2a6iga2s64vjqcxjqiezyjooq")]),e._v("。")]),e._v(" "),a("p",[e._v("初始 "),a("code",[e._v("miner-account")]),e._v(", "),a("code",[e._v("sophon-auth")]),e._v(" 中实现的关系：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("f0128788-test\n")])])]),a("p",[e._v("扩展后，"),a("code",[e._v("droplet")]),e._v(" 中的扩展:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("f0128788-test\nf3wylwd6pclppme4qmbgwled5xpsbgwgqbn2alxa7yahg2gnbfkipsdv6m764xm5coizujmwdmkxeugplmorha-test\nf3r47fkdzfmtex5ic3jnwlzc7bkpbj7s4d6limyt4f57t3cuqq5nuvhvwv2cu2a6iga2s64vjqcxjqiezyjooq-test\n")])])]),a("ul",[a("li",[e._v("存储市场跟踪订单或扇区状态产生了不必要的工作量，会把非 "),a("code",[e._v("miner Actor")]),e._v(" 的地址也进行遍历，如下：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('func (dealTracker *DealTracker) scanDeal(ctx metrics.MetricsCtx) {\n\taddrs, err := dealTracker.minerMgr.ActorAddress(ctx)\n\tif err != nil {\n\t\tlog.Errorf("get miners list %w", err)\n\t}\n\thead, err := dealTracker.fullNode.ChainHead(ctx)\n\tif err != nil {\n\t\tlog.Errorf("get chain head %w", err)\n\t}\n\n\tfor _, addr := range addrs {\n\t\tdealTracker.checkSlash(ctx, addr, head.Key())\n\t\tdealTracker.checkPreCommitAndCommit(ctx, addr, head.Key())\n\t}\n}\n')])])]),a("h2",{attrs:{id:"specification-feature-spec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-feature-spec"}},[e._v("#")]),e._v(" Specification (feature Spec)")]),e._v(" "),a("p",[e._v("本次重构涉及组件包括：sophon-auth，sophon-gateway，sophon-messager， venus-miner， droplet等，接下来将一一介绍修改内容。")]),e._v(" "),a("h3",{attrs:{id:"sophon-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sophon-auth"}},[e._v("#")]),e._v(" sophon-auth")]),e._v(" "),a("p",[a("code",[e._v("sophon-auth")]),e._v(" 提供接口将签名地址和账号进行绑定，并提供查询接口，保障链服务可以安全地支持多用户相互签名，接口如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type IAuthClient interface {\n\tGetUserBySigner(signer string) (auth.ListUsersResponse, error)\n\tRegisterSigners(user string, addrs []string) error\n\tUnregisterSigners(user string, addrs []string) error\n}\n")])])]),a("h3",{attrs:{id:"sophon-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sophon-gateway"}},[e._v("#")]),e._v(" sophon-gateway")]),e._v(" "),a("p",[e._v("签名接口重构:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type IWalletClient interface {\n\tWalletHas(ctx context.Context, addr address.Address, accounts []string) (bool, error)                                                  //perm:admin\n\tWalletSign(ctx context.Context, addr address.Address, accounts []string, toSign []byte, meta types.MsgMeta) (*crypto.Signature, error) //perm:admin\n}\n")])])]),a("ul",[a("li",[a("code",[e._v("sophon-gateway")]),e._v(" 签名接口只开放对具有 "),a("code",[e._v("admin")]),e._v(" 权限的 "),a("code",[e._v("token")]),e._v(" 访问,也就是只能被链服务内部访问，如："),a("code",[e._v("venus-miner")]),e._v(","),a("code",[e._v("sophon-messager")]),e._v("；")]),e._v(" "),a("li",[e._v("在调用 "),a("code",[e._v("sophon-gateway")]),e._v(" 的签名接口前需要完成权限的检查，这样做为了避免构造消息，调用别人账号下的私钥签名；")]),e._v(" "),a("li",[e._v("在调用 "),a("code",[e._v("sophon-gateway")]),e._v(" 的签名接口时需要带上密钥绑定的账号，这样做是为了多个账号的"),a("code",[e._v("venus-wallet")]),e._v("可以相互签名；")])]),e._v(" "),a("p",[e._v("自动注册/注销签名地址：")]),e._v(" "),a("ul",[a("li",[e._v("在"),a("code",[e._v("venus-wallet")]),e._v(" 建立连接时将其保存的私钥和支持的账号进行校验，通过后调用接口保存到 "),a("code",[e._v("sophon-auth")]),e._v("。如 某个"),a("code",[e._v("venus-wallet")]),e._v("终端管理的私钥有： w1，w2；配置的支持账号有：user01，user02；那么绑定的关系有： user01-w1，user01-w2，user02-w1，user02-w2；")]),e._v(" "),a("li",[e._v("在"),a("code",[e._v("venus-wallet")]),e._v(" 连接端口或通过接口删除某个地址时自动注销签名地址和账号的绑定关系。")])]),e._v(" "),a("h3",{attrs:{id:"sophon-messager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sophon-messager"}},[e._v("#")]),e._v(" sophon-messager")]),e._v(" "),a("p",[e._v("删除强制推送消息的接口，SP统一消息推送接口。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type IMessager interface {\n\t- ForcePushMessage(ctx context.Context, account string, msg *types.Message, meta *mtypes.SendSpec) (string, error)                                             //perm:admin\n\t- ForcePushMessageWithId(ctx context.Context, id string, account string, msg *types.Message, meta *mtypes.SendSpec) (string, error)                            //perm:write\n}\n")])])]),a("p",[e._v("推送消息流程修改:")]),e._v(" "),a("ul",[a("li",[e._v("SP组件调用链服务通常是 ["),a("code",[e._v("sign")]),e._v(","),a("code",[e._v("read")]),e._v(","),a("code",[e._v("write")]),e._v("] 权限的 "),a("code",[e._v("token")]),e._v("，"),a("code",[e._v("sophon-messager")]),e._v(" 首先要检查接口带的 "),a("code",[e._v("token")]),e._v(" 权限是否满足：\n"),a("ul",[a("li",[a("code",[e._v("token")]),e._v(" 对应的的账号与消息中的签名地址 "),a("code",[e._v("msg.From")]),e._v(" 是绑定的；")]),e._v(" "),a("li",[a("code",[e._v("token")]),e._v(" 具有 "),a("code",[e._v("sign")]),e._v(" 权限(待定)；")])])]),e._v(" "),a("li",[e._v("给签名接口提供签名地址绑定的所有账号，这样只要有一个连接到 "),a("code",[e._v("sophon-gateway")]),e._v(" 的签名终端("),a("code",[e._v("venus-wallet")]),e._v(")支持对此密钥签名则可以签名此条消息，也就是多个账号相互帮助签名；")])]),e._v(" "),a("h3",{attrs:{id:"venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[e._v("#")]),e._v(" venus-miner")]),e._v(" "),a("p",[e._v("无逻辑变化，只需匹配新的接口调用即可。")]),e._v(" "),a("h3",{attrs:{id:"droplet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#droplet"}},[e._v("#")]),e._v(" droplet")]),e._v(" "),a("ul",[a("li",[e._v("取消额外扩展 "),a("code",[e._v("signer-account")]),e._v(" 关系的逻辑；")]),e._v(" "),a("li",[e._v("消息签名前先检查请求 "),a("code",[e._v("token")]),e._v(" 的权限，通过后调用 "),a("code",[e._v("sophon-gateway")]),e._v("的签名接口。")])]),e._v(" "),a("p",[e._v("这里要注意的是 "),a("code",[e._v("droplet-client")]),e._v(" 组件，其实现和 "),a("code",[e._v("droplet")]),e._v(" 在同一项目，但是其本质是SP类组件，过程中的签名不能通过"),a("code",[e._v("sophon-gateway")]),e._v(", 其签名逻辑：")]),e._v(" "),a("ul",[a("li",[e._v("对于deals的签名需要额外的签名终端("),a("code",[e._v("venus-wallet")]),e._v("或"),a("code",[e._v("lotus/venus")]),e._v(")；")]),e._v(" "),a("li",[e._v("交易过程中的消息推送到 "),a("code",[e._v("sophon-messager")]),e._v(", 和 "),a("code",[e._v("sophon-cluster")]),e._v("等推送消息一致；")])]),e._v(" "),a("blockquote",[a("p",[e._v("所以 "),a("code",[e._v("droplet-client")]),e._v(" 组件代码独立为一个项目比较好？从 "),a("code",[e._v("droplet")]),e._v(" 中剥离？")])])])}),[],!1,null,null,null);t.default=v.exports}}]);