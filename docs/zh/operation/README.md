# 快速启用

## 概述

`droplet` 是 `venus` 系统中的市场服务组件，由两部分组成：`droplet` 和 `droplet-client`，通俗理解为市场服务端和客户端。

- `droplet` 的服务对象是存储提供商；

- `droplet-client` 的服务对象是有检索需求或存储需求的用户。

`droplet` 的市场服务分为存储市场和检索市场，其一般流程如下：


* 存储流程：

| 阶段                                  | 步骤                                                                                            |
|-------------------------------------|-----------------------------------------------------------------------------------------------|
| 启动 `droplet` 和 `droplet-client` | 1. [droplet初始化并启动](###droplet初始化并启动) <br>2.  [droplet-client初始化并启动](###droplet-client初始化并启动) |
| 代理 `miners` 的 `libp2p` 监听服务         | 3. [设置droplet信息到网络](###设置droplet信息到网络)                                                        |
| 为 `miners` 挂单                       | 4. [存储挂单](####存储挂单)                                                                           |
| 指定 `miner` 发单                       | 5. [存储发单](###存储订单（发单）)                                                                        |

发单之后，需要一定时间执行订单交易流程，订单被确认后，存储提供商对订单中数据进行封装并提交证明，`droplet` 负责跟踪订单状态。

* 检索流程：

| 阶段 | 步骤                                                                                            |
| ---- |-----------------------------------------------------------------------------------------------|
| 启动 `droplet` 和 `droplet-client` | 1. [droplet初始化并启动](###droplet初始化并启动) <br>2.  [droplet-client初始化并启动](###droplet-client初始化并启动) |
| 设置检索价格及收款地址 | 3. 存储供应商通过 `droplet` [检索挂单](####检索挂单)                                                         |
| 提交数据检索订单 | 4. [提交数据检索订单](#提交数据检索订单)                                                                      |


提交数据检索订单之后，开始执行检索交流流程，会按照协议分批次回传数据并将所需费用转给收款地址

:tipping_hand_woman: **无论是存储交易还是检索交易，其协议的执行过程都是自动的，期间会发送消息上链，故需保证交易双方的消息都可以正常签名。交易过程存在必要的 `fil` 流转，相关地址需要有足够的余额，否则交易将无法达成。**

## droplet

### droplet初始化并启动

#### gateway签名模式

`sophon-gateway`作为中转，会找链接`sophon-gateway`的wallet进行签名。
作为链服务中的一个组件，配合`sophon-auth`、`venus`、 `sophon-messager`、`sophon-gateway`等组件一起为注册到链服务的 `miner` 提供市场服务。

```
./droplet run \
--node-url=/ip4/<ip>/tcp/<port> \
--auth-url=http://<ip>:<port> \
--gateway-url=/ip4/<ip>/tcp/<port> \
--messager-url=/ip4/<ip>/tcp/<port> \
--cs-token=<shared-token> \
--signer-type="gateway"
```

生成的服务组件配置参考:
```toml
[Node]
  Url = "/ip4/192.168.200.151/tcp/3455"
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmVkLXRva2VuIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.aARqJ_7FSe1KakkBhWlFvsYm-xBLAXBnl9SvTfqsVe8"

[Messager]
  Url = "/ip4/127.0.0.1/tcp/39812"
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmVkLXRva2VuIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.aARqJ_7FSe1KakkBhWlFvsYm-xBLAXBnl9SvTfqsVe8"

[Signer]
  Type = "gateway"
  Url = "/ip4/127.0.0.1/tcp/45132"
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmVkLXRva2VuIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.aARqJ_7FSe1KakkBhWlFvsYm-xBLAXBnl9SvTfqsVe8"

[AuthNode]
  Url = "http://127.0.0.1:8989"
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmVkLXRva2VuIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.aARqJ_7FSe1KakkBhWlFvsYm-xBLAXBnl9SvTfqsVe8"
```

:tipping_hand_woman: **`shared-token` 是用于访问其他链服务组件 `API` 时的权限验证，由 `sophon-auth` 管理，需要 `admin` 权限。具体请参考 [sophon-auth token](https://github.com/filecoin-project/venus-docs/blob/master/docs/zh/cs/deploy-a-cs.md#user及token生成)**


#### `venus-wallet` 签名模式

:tipping_hand_woman: **签名用独立的`venus-wallet`组件，则配置为 `venus-wallet`的监听地址及具有签名权限的 `token`.**

`venus-wallet` 生成具有签名权限的 `token`:

```bash
$ ./venus-wallet auth api-info --perm=sign
> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIl19.Vr-OP7RNOozf6XXZuahpk-ZGA7IDa5NJjmU9L_znJ-0:/ip4/127.0.0.1/tcp/5678/http
```

初始化并启动

```
./droplet run \
--node-url=/ip4/<ip>/tcp/<port> \
--messager-url=/ip4/<ip>/tcp/<port> \
--cs-token=<token of write-authority that created by sophon-auth> \
--signer-url=/ip4/<ip>/tcp/<port> \
--signer-token=<token of venus-wallet> \
--signer-type="wallet"
```

生成的服务组件配置参考:
```toml
[Node]
  Url = "/ip4/192.168.200.151/tcp/3455"
  # sophon-auth生成的token
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmVkLXRva2VuIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.aARqJ_7FSe1KakkBhWlFvsYm-xBLAXBnl9SvTfqsVe8"

[Messager]
  Url = "/ip4/127.0.0.1/tcp/39812"
  # sophon-auth生成的token
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmVkLXRva2VuIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.aARqJ_7FSe1KakkBhWlFvsYm-xBLAXBnl9SvTfqsVe8"

[Signer]
  Type = "wallet"
  Url = "/ip4/127.0.0.1/tcp/5678/http"
  # wallet生成的token
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIl19.IVBGlmRW__6g4QGbb1D1Jtr1oyMM6Sqs1tj1GDGR5EQ"
```

#### 链接lotus启动

配合 `lotus fullnode` 的启动方式。

```
./droplet run \
--node-url=/ip4/<ip>/tcp/<port> \
--cs-token=<token of lotus> \
--signer-type="lotusnode"
```

生成的服务组件配置参考:
```toml
[Node]
  Url = "/ip4/127.0.0.1/tcp/1234"
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.Ne3JsfHHhN6BgDtdsvLYfUaRC3eJPH_7KrBsMRBdplc"

[Messager]
  Url = ""
  Token = ""

[Signer]
  Type = "lotusnode"
  Url = "/ip4/127.0.0.1/tcp/1234"
  Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.Ne3JsfHHhN6BgDtdsvLYfUaRC3eJPH_7KrBsMRBdplc"

[AuthNode]
  Url = ""
  Token = ""
```

:tipping_hand_woman: **初始化命令执行成功后将会生成`droplet repo`,在使用时需根据实际环境配置。**

`droplet` 首次启动时会生成配置项，默认目录为: `~/.droplet/config.toml`,可以根据实际情况，对配置文件进行设置。具体配置文件的解释请参考：[droplet配置解释](./droplet配置解释.md)
*tips:* 修改完配置文件之后需要重启`droplet`服务：

```bash
$ nohup ./droplet run > droplet.log 2>&1 &
```
> 已经生成 `repo` 之后，初始化所需的参数被写入配置文件，故后续启动无需再加。

### 设置droplet信息到网络

- 查询 `droplet` 的对等节点监听地址，获取`addrs`和`peer-id`值。

```bash
./droplet net listen

/ip4/127.0.0.1/tcp/58418/p2p/12D3KooWQftXTGFBKooKuyaNkugapUzi4VmjxEKTgkpsNCQufKBK
/ip4/192.168.19.67/tcp/58418/p2p/12D3KooWQftXTGFBKooKuyaNkugapUzi4VmjxEKTgkpsNCQufKBK
/ip6/::1/tcp/49770/p2p/12D3KooWQftXTGFBKooKuyaNkugapUzi4VmjxEKTgkpsNCQufKBK
```

- 将 `miners` 的 `Multiaddrs` 和 `peer-id` 设置为 `droplet` 的 `Multiaddrs` 和 `peer-id`     

```bash
./droplet actor set-addrs --miner=t01041 /ip4/192.168.19.67/tcp/58418
Requested multiaddrs change in message bafy2bzaceceqgxmiledunzjwbajpghzzn4iibvxhoifsrz4q2grzsirgznzdg

./droplet actor set-peer-id --miner=f01041 12D3KooWQftXTGFBKooKuyaNkugapUzi4VmjxEKTgkpsNCQufKBK
  Requested peerid change in message bafy2bzacea4ruzf4hvyezzhjkt6hnzz5tpk7ttuw6jmyoadqasqtujypqitp2
```

- 等待消息上链后，查看 `miner` 的代理信息

```bash
./droplet actor info --miner t01041
peers: 12D3KooWQftXTGFBKooKuyaNkugapUzi4VmjxEKTgkpsNCQufKBK
addr: /ip4/192.168.19.67/tcp/58418
```

### 挂单

#### 存储挂单

SP设置订单存储订单的价格和存储文件大小限制等信息。
```bash
./droplet storage ask set --price=0.01fil --verified-price=0.02fil --min-piece-size=512b --max-piece-size=512M t01041
```
可以通过命令行工具检查定价信息：

```shell
./droplet storage ask get t01041
Price per GiB/Epoch  Verified  Min. Piece Size (padded)  Max. Piece Size (padded)  Expiry (Epoch)  Expiry (Appx. Rem. Time)  Seq. No.
0.01 FIL             0.02 FIL  512 B                     521 MiB                     161256          719h59m0s                 0
```

#### 检索挂单

存储服务提供商至少应设置收款地址

```bash
./droplet retrieval ask set t3ueb62v5kbyuvwo5tuyzpvds2bfakdjeg2s33p47buvbfiyd7w5fwmeilobt5cqzi673s5z6i267igkgxum6a
```

同时，也可以设置数据检索订单的价格，不设置时，默认为0.
```bash
./droplet retrieval ask set \
--price 0.02fil \
--unseal-price 0.01fil \
--payment-interval 1MB \
t3ueb62v5kbyuvwo5tuyzpvds2bfakdjeg2s33p47buvbfiyd7w5fwmeilobt5cqzi673s5z6i267igkgxum6a
```

## droplet-client

### droplet-client初始化并启动
`droplet-client` 正常运行需要同步节点、签名节点（`venus fullnode` 和 `lotus fullnode` 可以作为签名节点）、消息节点（`venus fullnode` 和 `lotus fullnode` 可以作为消息节点）及 `droplet`，故其可以灵活配置，只要保证消息能够正常签名并上链即可。

`droplet-client` 需要配置 `--addr` 用来绑定客户的钱包地址，用于支付客户端抵押和检索费用。

这里介绍常用的三种启动方式：

#### 接入 `Venus` 链服务(推荐)

`sophon-gateway` 的签名 `API` 只有 `admin` 权限才能访问（安全考虑），也就是只有链服务组件才能访问，故 `droplet-client` 无法使用，所以用本地的 `venus-wallet` 进行签名。

`droplet-client`是直连`venus-wallet`进行本地签名，`--addr`必须指定`venus-wallet`有的地址才可以。

```shell
./droplet-client run \
--node-url=/ip4/<venus_ip>/tcp/<port> \ 
--messager-url=/ip4/<sophon-messager_ip>/tcp/<port> \
--auth-token=<user-read-or-write-permission-token> \
--signer-type=wallet \
--signer-url=/ip4/<venus-wallet_ip>/tcp/<port> \
--signer-toke=<wallet-token> \
--addr=<signer address> \
```
> `venus-wallet` 生成具有签名权限的 `token` 请参考上文.

#### 连接 `venus fullnode` 启动
```shell
./droplet-client run \
--node-url=/ip4/<venus_ip>/tcp/<port> \ 
--node-token=<node-token> \
--signer-type=wallet \
--addr=<signer address> \
```

#### 连接 `lotus fullnode` 启动
```shell
./droplet-client run \
--node-url=/ip4/<venus_ip>/tcp/<port> \ 
--node-token=<node-token> \
--signer-type=lotusnode \
--addr=<signer address> \
```

这些配置项也可以在配置文件中设置，参见[droplet-client配置](./droplet-client配置解释.md)

### 存储订单（发单）

#### 在线订单
##### 1. 导入待存储的数据

```shell
./droplet-client data import <file path>
Import 1642491708527303001, Root bafk2bzacedgv2xqys5ja4gycqipmg543ekxz3tjj6wwfexda352n55ahjldja
```

##### 2. 选择挂单(询价)

测试连通性，使用 `droplet-client` 来查询 `miner` 挂单信息：

```bash
./droplet-client storage asks query f01041 
Ask: t01041
Price per GiB: 0.02 FIL
Verified Price per GiB: 0.01 FIL
Max Piece size: 8 MiB
Min Piece size: 512 B
```

##### 3. 发起存储订单（发单）

```shell
/droplet-client storage deals init
# 输入需要存储的数据的cid, `./droplet-client data local`命令查看
Data CID (from lotus client import): bafk2bzacedgv2xqys5ja4gycqipmg543ekxz3tjj6wwfexda352n55ahjldja
.. calculating data size
PieceCid:  baga6ea4seaqpz47j4kqdiixpehmzk3uw5c4cmqvs5iyi7xf7rwkepfhdvowdiai  PayLoadSize: 809 PieceSize: 1024
# 输入数据存储周期
Deal duration (days): 180
# 输入接单的miner id
Miner Addresses (f0.. f0..), none to find: t01041
.. querying miner asks
-----
Proposing from t16qnfduxzpneb2m3rbdasvhgk7rmmo32zpiypkaq
  Balance: 9499.999999856612207905 FIL
Piece size: 1KiB (Payload size: 809B)
Duration: 4320h0m0s
Total price: ~0.0098876953124352 FIL (0.000000019073486328 FIL per epoch)
Verified: false
# 确认是否接受订单价格
Accept (yes/no): yes
.. executing
Deal (t01051) CID: bafyreihiln2ha6eaaos7kuhwpnvjvjlxmjnpsklym6hhucu2z776bf2or4
```

然后等待订单消息上链，以及存储提供商完成数据封装即可。

`droplet-client` 查看订单:
```shell
./droplet-client storage deals list
DealCid      DealId  Provider  State                          On Chain?  Slashed?  PieceCID     Size    Price                    Duration  Verified
...76bf2or4  0       t01051    StorageDealCheckForAcceptance  N          N         ...dvowdiai  1016 B  0.00992212295525724 FIL  520205    false
  Message: Provider state: StorageDealPublish
```

#### 离线订单

##### 1. 导入订单存储文件

```bash
./droplet-client data import ./README.md
Import 1642643014364955003, Root bafk2bzaceaf4sallirkt63fqrojz5gaut7akiwxrclcsymqelqad7man3hc2c
```

##### 2. 转为CAR文件

```bash
./droplet-client data generate-car ./README.md ./readme.md.car
```

##### 3. 计算CAR文件的`CID`和`Piece size`

```shell
./droplet-client data commP ./readme.md.car
CID:  baga6ea4seaqfewgysi3n3cjylkbfknr56vbemb2gwjfvpctqtjgpdweu7o3d6mq
Piece size:  3.969 KiB
```

##### 4. 发起订单

```bash
./droplet-client storage deals init \
--manual-piece-cid=baga6ea4seaqfewgysi3n3cjylkbfknr56vbemb2gwjfvpctqtjgpdweu7o3d6mq \
--manual-piece-size=4064 \
bafk2bzaceaf4sallirkt63fqrojz5gaut7akiwxrclcsymqelqad7man3hc2c \
f01051 \
0.01fil \
518400
bafyreiecguaxgtmgcanfco6huni4d6h6zs3w3bznermmiurtdos7r6hftm
```

- `manual-piece-cid`: 在第3步计执行`data commP`后输出的`CID`
- `manual-piece-size`: 在第3步执行`data commP`后输出的`Piece size`.需要注意的是, 在使用这个参数时, 这个值需要转换成`byte`的大小, 在这里为3.969kib转换成byte的大小是4064.
之后4个参数分别是:
- 第一步执行`import`命令后输入的`Root`
- 矿工ID
- 协商支付订单的费用`0.01fil`, **这个值必须大于旷工设置的`storage ask`中的最小值, 不然订单会被拒绝掉.
- 合约周期, 必须大于等于180天, 这个值也需要换成epoch为单位, 每个epoch=30秒, 示例中:518400 = 180天.

最后的输出`bafyreidfs2w7lxacq6zpqck7q4zimyitidxyahojf7dbbuz5zr7irdlmqa`为propose的cid.
线上订单一样, 此时可以通过droplet-client查看deal信息, 订单的最后状态会停止在`StorageDealWaitingForData`

```shell
./droplet-client storage deals list
DealCid      DealId  Provider  State                          On Chain?        Slashed?  PieceCID     Size       Price                    Duration  Verified  
...s7r6hftm  0       t01051    StorageDealCheckForAcceptance  N                N         ...u7o3d6mq  3.969 KiB  5196.63 FIL              519663    false     
  Message: Provider state: StorageDealWaitingForData
```

:tipping_hand_woman: **如果 `droplet-client` 出现下面的内容:**
```shell
2022-01-20T12:47:27.966+0800  ERROR storagemarket_impl  clientstates/client_states.go:324 deal bafyreif2k2e4acraxk33z3llwo5gqmk32tfrdj2kocjanojbfbf6vj72vm failed: adding market funds failed: estimating gas used: message execution failed: exit SysErrInsufficientFunds(6)
```
说明钱包余额不足,调用命令 `./droplet-client actor-funds add 100fil` 充值后重新执行命令.

##### 5. 导入离线订单的数据文件
需要将之前第2步生成的`.car`文件线下传输到droplet, 并通过droplet命令导入数据:
```shell
./droplet storage deal import-data bafyreiecguaxgtmgcanfco6huni4d6h6zs3w3bznermmiurtdos7r6hftm ./readme.md.car
```

再次查看状态, 订单状态更新为`StorageDealPublishing`:
```shell
./droplet-client storage deals list
DealCid      DealId  Provider  State                          On Chain?        Slashed?  PieceCID     Size       Price                    Duration  Verified  
...s7r6hftm  0       t01051    StorageDealCheckForAcceptance  N                N         ...u7o3d6mq  3.969 KiB  5196.63 FIL              519663    false     
Message: Provider state: StorageDealPublishing
```

最后等待订单状态变化为`StorageDealAwaitingPreCommit` 就可以进行订单数据的封装了。


# 提交数据检索订单

用户通过 `minerID` 和 `Data CID` 就可以发起数据检索订单

```shell
./droplet-client retrieval retrieve --provider t01020 bafk2bzacearla6en6crpouxo72d5lhr3buajbzjippl63bfsd2m7rsyughu42 test.txt
Recv 0 B, Paid 0 FIL, Open (New), 0s
Recv 0 B, Paid 0 FIL, DealProposed (WaitForAcceptance), 16ms
Recv 0 B, Paid 0 FIL, DealAccepted (Accepted), 26ms
Recv 0 B, Paid 0 FIL, PaymentChannelSkip (Ongoing), 27ms
Recv 1.479 KiB, Paid 0 FIL, BlocksReceived (Ongoing), 30ms
Recv 1.479 KiB, Paid 0 FIL, AllBlocksReceived (BlocksComplete), 33ms
Recv 1.479 KiB, Paid 0 FIL, Complete (CheckComplete), 35ms
Recv 1.479 KiB, Paid 0 FIL, CompleteVerified (FinalizingBlockstore), 36ms
Recv 1.479 KiB, Paid 0 FIL, BlockstoreFinalized (Completed), 36ms
Success
```
