<template>
    <div class="body">
        <div class="part4">
            <div class="part4_content max-width">
                <div class="part4_title tit" title="软件支持">软件支持</div>
                <div class="part4_block">
                    <div class="block_text">
                        <p title="1-预装Openwrt操作系统；">1-预装Openwrt操作系统；</p>
                        <p title="2-独立的救援模式，轻松解决主机系统崩坏问题；">2-独立的救援模式，轻松解决主机系统崩坏问题；</p>
                        <p title="3-适合新手操作的多种多样的玩机教程；">3-适合新手操作的多种多样的玩机教程；</p>
                        <p title="4-DDNSTO和易有云的完美融合，软路由+NAS的完美融合，远程操作更加便利；">4-DDNSTO和易有云的完美融合，软路由+NAS的完美融合，远程操作更加便利；</p>
                        <p title="5-预装iStore应用市场；">5-预装iStore应用市场；</p>
                        <p title="6-官方提供稳定固件，开放更多玩法，开放SDK，极客可随意定制路由系统；">6-官方提供稳定固件，开放更多玩法，开放SDK，极客可随意定制路由系统；</p>
                        <p title="7-主流硬件解码，支持H264、H265 4K@60P等，专属Jellyfin硬解适配；">7-主流硬件解码，支持H264、H265 4K@60P等，专属Jellyfin硬解适配；</p>
                        <p title="8-更多惊喜，敬请期待！">8-更多惊喜，敬请期待！</p>
                    </div>

                </div>
                <div class="part4_list">
                    <template v-for="(item, i) in apps">
                        <a class="list_block" :key="i" :href="item.link">
                            <div class="list_blockImg">
                                <img :src="item.icon">
                            </div>
                            <div class="list_blockIfo" :title="item.name">{{item.name}}</div>
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as apps from "./apps.js"
import logo_aria2 from "../public/home/logo_aria2.png"
import logo_ddnsto from "../public/home/logo_ddnsto.png"
import logo_docker from "../public/home/logo_docker.png"
import logo_easelink from "../public/home/logo_easelink.png"
import logo_houseassistant from "../public/home/logo_houseassistant.png"
import logo_iStore from "../public/home/logo_iStore.png"
import logo_jellyfin from "../public/home/logo_jellyfin.png"
import logo_nextcloud from "../public/home/logo_nextcloud.png"
import logo_openwrt from "../public/home/logo_openwrt.png"
import logo_youxijiasu from "../public/home/logo_youxijiasu.png"
export default {
    data() {
        return {
            apps: apps.apps,
            logo_aria2,
            logo_ddnsto,
            logo_docker,
            logo_easelink,
            logo_houseassistant,
            logo_iStore,
            logo_jellyfin,
            logo_nextcloud,
            logo_openwrt,
            logo_youxijiasu
        }
    }

}
</script>

<style lang="scss" scoped>
.body {
    background-color: #000;
    .max-width {
        max-width: 1440px;
    }
    .part4 {
        padding-top: 198px;
        height: auto;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        .part4_content {
            margin: 0 auto;
            .part4_block {
                max-width: 1158px;
                width: 100%;
                height: 464px;
                background: rgba(255, 255, 255, 0.13);
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 0 auto;
                margin-top: 88px;
                margin-bottom: 50px;
                .block_text {
                    p {
                        flex: 0 0 100%;
                        max-width: 100%;
                        font-size: 18px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #ffffff;
                        text-align: left;
                    }
                }
            }
            .part4_list {
                margin-top: 88px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                .list_block {
                    display: block;
                    height: 212px;
                    flex: 0 0 100%;
                    max-width: calc(20% - 10px);
                    margin-bottom: 80px;
                    .list_blockImg {
                        width: 128px;
                        height: 128px;
                        margin: 0 auto;
                    }
                    .list_blockIfo {
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #ffffff;
                        margin-top: 32px;
                    }
                }
            }
        }
    }
}
.tit {
    font-size: 2.5em;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 56px;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .body {
        font-size: 90%;
        .max-width {
            padding: 0 30px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .body {
        font-size: 80%;
        .max-width {
            max-width: 920px;
            padding: 0 30px;
        }
        .part4 {
            .part4_content {
                .part4_list {
                    .list_block {
                        max-width: 33.33%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .body {
        .part4 {
            padding-top: 82px;
        }
    }
}
@media screen and (max-width: 719px) {
    .body {
        font-size: 70%;
        .max-width {
            max-width: 100%;
            padding: 0 10px;
        }
        .part4 {
            padding: 0 10px;
            padding-top: 98px;
            .part4_content {
                .part4_block {
                    .block_text {
                        p {
                            font-size: 14px;
                            padding: 0 20px;
                        }
                    }
                }
                .part4_list {
                    margin-top: 60px;
                    display: flex;
                    .list_block {
                        height: 118px;
                        max-width: 20%;
                        width: 100px;
                        margin-bottom: 14px;
                        .list_blockImg {
                            flex: 0 0 100%;
                            max-width: 100%;
                            img {
                                flex: 0 0 100%;
                                max-width: 100%;
                                width: 60px;
                                height: 60px;
                            }
                        }
                        .list_blockIfo {
                            margin-top: -60px;
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 500px) {
    .body {
        padding-bottom: 0;
        .part4 {
            padding-top: 40px;
            .part4_content {
                .part4_block {
                    margin-top: 20px;
                    margin-bottom: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .body {
        padding-bottom: 0;
        .part4 {
            padding-top: 40px;
            .part4_content {
                .part4_block {
                    margin-top: 20px;
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>