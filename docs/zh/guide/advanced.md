## 混杂模式MACVLAN
Linux原始的macvlan没有混杂模式，打开混杂模式也会过滤掉不是发给自己的报文。

ARS2的内核改变了这个行为，混杂模式的macvlan可以接收到宿主接口的所有报文，除了单播给宿主接口的报文。

应用场景：使用混杂模式macvlan，将WAN口的报文转发到一个网桥中，加入此网桥的虚拟网卡即可加入宿主机WAN口所在的局域网，获得局域网IP。以Docker为例：

```
HOST_WAN=eth0

ip link add macv-docker-wan link $HOST_WAN type macvlan mode private
ip link set dev macv-docker-wan promisc on

ip link add br-docker-wan type bridge

ip link set dev macv-docker-wan master br-docker-wan
ip link set dev macv-docker-wan up

docker network ls -f "name=docker-wan" | grep -q docker-wan || \
    docker network create -d bridge -o "com.docker.network.bridge.name=br-docker-wan" docker-wan

echo "0" > /proc/sys/net/bridge/bridge-nf-call-iptables
```

创建容器并加入docker-wan网络：
```
docker run --net=docker-wan debian
```

Docker会给容器分配IP，但这里用不上，容器内执行以下命令获得局域网IP：
```
ip addr flush dev eth0 && udhcpc
```

## Jellyfin硬解
ARS2支持4K H265（HEVC），H264等格式硬解。

