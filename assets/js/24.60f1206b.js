(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{391:function(t,e,a){"use strict";a.r(e);var r=a(17),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary-概述"}},[t._v("#")]),t._v(" Simple Summary (概述)")]),t._v(" "),a("p",[a("code",[t._v("droplet")]),t._v(" 批量发单是指基于 "),a("a",{attrs:{href:"https://github.com/filedrive-team/go-graphsplit",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-graphsplit"),a("OutboundLink")],1),t._v(" 工具实现一个能够批量发离线订单的工具，并且 "),a("code",[t._v("DC")]),t._v(" 订单符合 "),a("code",[t._v("DC 发单要求")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"abstract-功能简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract-功能简介"}},[t._v("#")]),t._v(" Abstract (功能简介)")]),t._v(" "),a("p",[a("code",[t._v("droplet-client")]),t._v(" 需要实现以下功能：")]),t._v(" "),a("ul",[a("li",[t._v("增加批量发布订单命令和接口")]),t._v(" "),a("li",[t._v("离线订单持久化存储，订单状态追踪")]),t._v(" "),a("li",[t._v("增加获取离线订单、订单分布情况接口")]),t._v(" "),a("li",[t._v("命令行可以输出离线订单信息和 "),a("code",[t._v("DC")]),t._v(" 订单分布信息")]),t._v(" "),a("li",[t._v("批量导入订单及聚合抵押")]),t._v(" "),a("li",[t._v("支持 f+ 对 LDN 发单要求，简称："),a("code",[t._v("DC 发单要求")])])]),t._v(" "),a("p",[t._v("关联：")]),t._v(" "),a("ul",[a("li",[t._v("[x] 提案的"),a("a",{attrs:{href:"https://github.com/filecoin-project/venus/issues/5809",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"motivation-来源-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation-来源-背景"}},[t._v("#")]),t._v(" Motivation (来源/背景)")]),t._v(" "),a("p",[t._v("目前 "),a("code",[t._v("droplet-client")]),t._v(" 一次只能发布一个订单，当有大量订单需要发布时，需要一个一个发，发单的效率并不高。批量发单可以一次对多个 "),a("code",[t._v("SP")]),t._v(" 发布多个订单，可以提高效率。")]),t._v(" "),a("h2",{attrs:{id:"specification-feature-spec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-feature-spec"}},[t._v("#")]),t._v(" Specification (feature Spec)")]),t._v(" "),a("h3",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("ul",[a("li",[t._v("批量发单：指批量发布离线订单")]),t._v(" "),a("li",[t._v("订单：分普通订单和 "),a("code",[t._v("DC")]),t._v(" 订单，"),a("code",[t._v("DC")]),t._v(" 订单是被分配了 "),a("code",[t._v("datacap")]),t._v(" 的订单")]),t._v(" "),a("li",[t._v("SP：存储提供者")]),t._v(" "),a("li",[t._v("发单地址：发单时使用的地址，可以是具有 "),a("code",[t._v("datacap")]),t._v(" 的地址")]),t._v(" "),a("li",[t._v("go-graphsplit：一种用于将数据集切分成固定大小的 car 文件的工具")]),t._v(" "),a("li",[t._v("datacap发单要求：\n"),a("ul",[a("li",[t._v("Storage provider should not exceed 25% of total datacap("),a("code",[t._v("client")]),t._v(" 给一个 "),a("code",[t._v("SP")]),t._v(" 发的 "),a("code",[t._v("DC")]),t._v(" 订单不能超过  "),a("code",[t._v("SP")]),t._v(" 总 "),a("code",[t._v("DC")]),t._v(" 订单的 25%)")]),t._v(" "),a("li",[t._v("Storage provider should not be storing duplicate data for more than 20%("),a("code",[t._v("SP")]),t._v(" 不能超过 20% 的重复数据)")]),t._v(" "),a("li",[t._v("Storage provider should have published its public IP address("),a("code",[t._v("SP")]),t._v(" 需要公开公告 IP 地址)")]),t._v(" "),a("li",[t._v("All storage providers should be located in different regions("),a("code",[t._v("SP")]),t._v(" 需要位于不同地区)")])])])]),t._v(" "),a("h3",{attrs:{id:"订单持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订单持久化"}},[t._v("#")]),t._v(" 订单持久化")]),t._v(" "),a("p",[t._v("把离线订单存储到 "),a("code",[t._v("badger")]),t._v(" 数据库，以 "),a("code",[t._v("proposal cid")]),t._v(" 作为 key，把订单 JSON marshal 后的结果作为 value。")]),t._v(" "),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("p",[a("code",[t._v("droplet-client")]),t._v(" 新增接口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 批量导入订单\nClientBatchDeal(ctx context.Context, params *client.DealsParams) (*client.DealResults, error)\n# 获取 DC 订单分布情况\nClientGetVerifiedDealDistribution(ctx context.Context, providers []address.Address, client address.Address) (*client.DealDistribution, error)\n# 查询所有离线订单\nClientListOfflineDeals(ctx context.Context) ([]client.DealInfo, error)    \n")])])]),a("p",[a("code",[t._v("droplet")]),t._v(" 新增接口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 批量导入离线订单数据\nDealsBatchImportData(ctx context.Context, refs market.ImportDataRefs) ([]*market.ImportDataResult, error)\n")])])]),a("h3",{attrs:{id:"新增命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增命令"}},[t._v("#")]),t._v(" 新增命令")]),t._v(" "),a("ul",[a("li",[t._v("droplet-client 批量发单：支持对多 "),a("code",[t._v("SP")]),t._v(" 发布多个离线订单，")]),t._v(" "),a("li",[t._v("droplet-client 查询离线订单：能够查询单个订单和列出所有离线订单")]),t._v(" "),a("li",[t._v("droplet-client 查询订单分布情况：可以按 "),a("code",[t._v("SP")]),t._v(" 和 发单地址查询")]),t._v(" "),a("li",[t._v("droplet-client 导出离线订单：当订单状态为 StorageDealWaitingForData 时，导出订单 proposalcid 和 piececid")]),t._v(" "),a("li",[t._v("droplet 批量导入订单：支持输入多个 proposalcid 和 car 文件组合，也支持根据文件导入")])]),t._v(" "),a("h2",{attrs:{id:"design-rationale-设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-rationale-设计思路"}},[t._v("#")]),t._v(" Design Rationale (设计思路)")]),t._v(" "),a("p",[t._v("存储离线订单使用 JSON marshal 是为了方便以后加字段")]),t._v(" "),a("p",[t._v("根据用户使用 "),a("code",[t._v("go-graphsplit")]),t._v(" 生成的 "),a("code",[t._v("manifest.csv")]),t._v(" 文件内容来批量生成离线订单。")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility-兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility-兼容性"}},[t._v("#")]),t._v(" Backwards Compatibility（兼容性）")]),t._v(" "),a("p",[t._v("需要兼容已有的发单逻辑")]),t._v(" "),a("h2",{attrs:{id:"test-cases-测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases-测试用例"}},[t._v("#")]),t._v(" Test Cases (测试用例)")]),t._v(" "),a("h2",{attrs:{id:"security-considerations-安全考量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations-安全考量"}},[t._v("#")]),t._v(" Security Considerations (安全考量)")]),t._v(" "),a("h2",{attrs:{id:"implementation-实施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-实施"}},[t._v("#")]),t._v(" Implementation（实施）")]),t._v(" "),a("h3",{attrs:{id:"查询离线订单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询离线订单"}},[t._v("#")]),t._v(" 查询离线订单")]),t._v(" "),a("ol",[a("li",[t._v("按 proposal cid 查询单个离线订单信息")]),t._v(" "),a("li",[t._v("列出所有离线订单信息")])]),t._v(" "),a("h3",{attrs:{id:"持久化订单数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久化订单数据"}},[t._v("#")]),t._v(" 持久化订单数据")]),t._v(" "),a("p",[t._v("离线订单数据结构如下：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/filecoin-project/venus/blob/master/venus-shared/types/state_types_gen.go#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("ClientDealProposal"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  types.ClientDealProposal\n  ProposalCID    cid.Cid\n\tDataRef        *storagemarket.DataRef\n\tMessage        string\n\tState          uint64\n\tDealID         uint64\n\tAddFundsCid    *cid.Cid\n\tPublishMessage *cid.Cid\n\tFastRetrieval  bool\n\tSlashEpoch     abi.ChainEpoch\n\tCreatedAt      time.Time\n\tUpdatedAt      time.Time\n")])])]),a("p",[t._v("接口：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type ClientOfflineDealRepo interface {\n\tSaveDeal(ctx context.Context, deal *ClientOfflineDeal) error\n\tGetDeal(ctx context.Context, proposalCid cid.Cid) (*ClientOfflineDeal, error)\n\tListDeal(ctx context.Context) ([]*ClientOfflineDeal, error)\n  ListDeal(ctx context.Context) ([]*types2.ClientOfflineDeal, error)\n}\n")])])]),a("h3",{attrs:{id:"离线订单状态追踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线订单状态追踪"}},[t._v("#")]),t._v(" 离线订单状态追踪")]),t._v(" "),a("p",[t._v("粗略的把订单分成 active 订单和 inactive 订单，循序检查订单状态，如果订单状态是 "),a("code",[t._v("StorageDealActive")]),t._v(" 则为 active 订单，反之是 inactive 订单。")]),t._v(" "),a("ul",[a("li",[t._v("active 订单：间隔一段较长时间去链上查询订单是否 slash")]),t._v(" "),a("li",[t._v("inactive 订单：间隔较短时间使用 libp2p 去获取订单状态")])]),t._v(" "),a("h3",{attrs:{id:"批量发布订单接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量发布订单接口"}},[t._v("#")]),t._v(" 批量发布订单接口")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/filecoin-project/venus/blob/master/venus-shared/types/market/client/deal.go#L16",target:"_blank",rel:"noopener noreferrer"}},[t._v("DealsParams"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ClientBatchDeal(ctx context.Context, params *client.DealsParams) (*client.DealResults, error)\ntype DealResults struct {\n\tResults []*DealResult\n}\ntype DealResult struct {\n\tProposalCID cid.Cid\n\t// Create deal failed\n\tMessage string\n}\ntype DealsParams struct {\n\tParams []*DealParams\n}\n")])])]),a("h3",{attrs:{id:"统计-dc-订单分布情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计-dc-订单分布情况"}},[t._v("#")]),t._v(" 统计 DC 订单分布情况")]),t._v(" "),a("ol",[a("li",[t._v("统计 "),a("code",[t._v("SP")]),t._v(" "),a("code",[t._v("DC")]),t._v(" 订单数据重复率，重复率 = 不重复 "),a("code",[t._v("DC")]),t._v(" 订单 / "),a("code",[t._v("SP")]),t._v(" 所有 "),a("code",[t._v("DC")]),t._v(" 订单。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("假如有两个 piece1，三个 piece3，则重复率 = 1 - (piece1+piece3) / (2 * piece1 + 3 * piece3)\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("统计发单地址分配给 "),a("code",[t._v("SP")]),t._v(" 的 "),a("code",[t._v("DC")]),t._v(" 订单占比")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 获取 DC 订单分布情况\nClientGetVerifiedDealDistribution(ctx context.Context) (*PieceDistribution, error) \ntype ProviderDistribution struct {\n\tProvider address.Address\n\t// Total deal\n\tTotal uint64\n\t// Uniq deal\n\tUniq uint64\n\t// May be too large\n\tUniqPieces map[string]uint64\n\t// (Total-Uniq) / Total\n\tDuplicationPercentage float64\n}\ntype ReplicaDistribution struct {\n\t// Datacap address\n\tClient address.Address\n\t// Total deal\n\tTotal uint64\n\t// Uniq deal\n\tUniq uint64\n\t// (Total-Uniq) / Uniq\n\tDuplicationPercentage float64\n\t// ProviderTotalDeal / Total\n\tReplicasPercentage   map[string]float64\n\tReplicasDistribution []*ProviderDistribution\n}\ntype DealDistribution struct {\n\tProvidersDistribution []*ProviderDistribution\n\tReplicasDistribution  []*ReplicaDistribution\n}\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);