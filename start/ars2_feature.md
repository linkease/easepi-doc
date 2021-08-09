---
typora-root-url: ..
typora-copy-images-to: ../assets/images
layout: post
title: ARS2特色功能
lang-ref: ars2
category: NAS
tags: [nas,rtd1296,router]
---

## 救援模式
救援模式与主系统独立，不会因为正常的刷机或者主系统配置错误而失效。

由于救援模式运行在内存盘里，除了刷机，重置，导入配置等操作外，都不会影响到主系统，并且所有配置都不会保留。

### 进入救援模式
断电状态下，按住开机键再通电，当红灯亮起时松开开机键，即可进入救援模式。

救援模式启动完毕以后，绿灯会常亮，红灯为心跳模式。

### 救援模式使用
救援模式的WAN口是DHCP客户端，LAN口是DHCP服务端，LAN网段是192.168.100.1/24，救援模式下防火墙不可用。

救援模式下的操作与正常的OpenWRT大同小异，并集成了LUCI以方便在浏览器中进行操作。

在救援模式中可以执行刷机，重置，导入配置等操作，以此恢复主系统的工作状态。

（你甚至可以在救援模式中安装软件包。）


## 混杂模式MACVLAN
Linux原始的macvlan没有混杂模式，打开混杂模式也会过滤掉不是发给自己的报文。

ARS2的内核改变了这个行为，混杂模式的macvlan可以接收到宿主接口的所有报文，除了单播给宿主接口的报文。

应用场景：使用混杂模式macvlan，将WAN口的报文转发到一个网桥中，加入此网桥的虚拟网卡即可加入宿主机WAN口所在的局域网，获得局域网IP。以Docker为例：
```shell

HOST_WAN=eth0

ip link add macv-docker-wan link $HOST_WAN type macvlan mode private
ip link set dev macv-docker-wan promisc on

ip link add br-docker-wan type bridge

ip link set dev macv-docker-wan master br-docker-wan
ip link set dev macv-docker-wan up

docker network ls -f "name=docker-wan" | grep -q docker-wan || \
    docker network create -d bridge -o "com.docker.network.bridge.name=br-docker-wan" docker-wan

```
创建容器并加入`docker-wan`网络：
```shell
docker run --net=docker-wan debian
```
Docker会给容器分配IP，但这里用不上，容器内执行以下命令获得局域网IP：
```shell
ip addr flush dev eth0 && udhcpc
```

需要注意的是，macvlan会隔离宿主接口和虚拟接口的通讯，现象就是宿主ping不通虚拟机，虚拟机也ping不通宿主，但是局域网其他设备却可以跟虚拟机互相通讯。这是macvlan的特性。


## Jellyfin硬解
ARS2支持4K H265（HEVC），H264等格式硬解。

1. 拉取Jellyfin镜像
```shell
docker pull jjm2473/jellyfin-rtk:v10.7
```

2. 创建Jellyfin容器
```shell

docker run --restart=unless-stopped -d \
    --device /dev/rpc0:/dev/rpc0 \
    --device /dev/rpc1:/dev/rpc1 \
    --device /dev/rpc2:/dev/rpc2 \
    --device /dev/rpc3:/dev/rpc3 \
    --device /dev/rpc4:/dev/rpc4 \
    --device /dev/rpc5:/dev/rpc5 \
    --device /dev/rpc6:/dev/rpc6 \
    --device /dev/rpc7:/dev/rpc7 \
    --device /dev/rpc100:/dev/rpc100 \
    --device /dev/uio250:/dev/uio250 \
    --device /dev/uio251:/dev/uio251 \
    --device /dev/uio252:/dev/uio252 \
    --device /dev/uio253:/dev/uio253 \
    --device /dev/ion:/dev/ion \
    --device /dev/ve3:/dev/ve3 \
    --device /dev/vpu:/dev/vpu \
    --device /dev/memalloc:/dev/memalloc \
    -v /tmp/shm:/dev/shm \
    -v /sys/class/uio:/sys/class/uio \
    -v /var/tmp/vowb:/var/tmp/vowb \
    --pid=host \
    --dns=172.17.0.1 \
    -p 8096:8096 -v /root/jellyfin/config:/config -v /mnt/sda3/media:/media --name myjellyfin-rtk-10.7 jjm2473/jellyfin-rtk:v10.7

```
* /root/jellyfin/config 用来存放Jellyfin的配置以及转码的临时文件，按需修改
* /mnt/sda3/media 表示媒体文件所在路径，按需修改

3. 浏览器打开ARS2对应IP加上8096端口，例如`http://192.168.100.1:8096/`，即可进入Jellyfin界面
