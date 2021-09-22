<template>
    <div class="body">
        <!-- banner部分 -->
        <div class="banner" :style="'background-image: url(\'' + bannerbgSvg + '\');width: 100%;background-size: cover;'">
            <div class="banner_bg"></div>
            <div class="banner_content max-width">
                <div class="banner_top">
                    <div class="flex_center">
                        <div class="banner_topTitle" title="4核 RTD1296 | DDR4 4GB | eMMC 5.0 8GB">
                            <img class="icon_left" :src="icon_left">
                            <span>4核 RTD1296 | DDR4 4GB | eMMC 5.0 8GB</span>
                            <img class="icon_right" :src="icon_right">
                        </div>
                    </div>

                    <div class="banner_topTit" title="EasePi ARS2">EasePi ARS2</div>
                    <div class="banner_topInfo" title="EasePi ARS2，是易有云团队推出的基于RTD1296处理器且带存储的软路由开发板">EasePi ARS2，是易有云团队推出的基于RTD1296处理器且带存储的软路由开发板</div>
                    <div class="flex_center"> <a href="https://koolcenter.taobao.com/" class="banner_topBtn" title="立即抢购">立即抢购</a> </div>
                    <div class="flex_right">
                        <div class="banner_price">
                            <img :src="pic_bannerprictag">
                        </div>
                    </div>

                </div>
                <div class="flex_center">
                    <div class="banner_bottom">
                        <img :src="pic_banner" :srcset="pic_banner + ', ' + pic_banner_2x + ' 2x'" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- 第一部分 -->
        <div class="part1">
            <div class="part1_content max-width">
                <div class="part1_top">
                    <img class="part1_topTitle" :src="Part1_title">
                    <div class="part1_topInfo" title="丰富的接口和强劲的性能，不再限制你的创意和想法">丰富的接口和强劲的性能，不再限制你的创意和想法</div>
                </div>
                <img class="part1_img" :src="part1_jpg" alt="">
            </div>
        </div>

        <!-- 第二部分 -->
        <div class="part2">
            <div class="part2_content max-width">
                <div class="part2_block">
                    <div class="part2_left">
                        <div class="part2_leftTitle" title="基本功能">基本功能</div>
                        <div class="part2_leftInfo">
                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_drop">
                                    <div class="part2_infoTit" title="低功耗">低功耗</div>
                                </div>
                                <div class="part2_infoText" title="待机功率仅约3W，更省电更环保">待机功率仅约3W，更省电更环保</div>
                            </div>

                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_Soc">
                                    <div class="part2_infoTit" title="SoC原生支持">SoC原生支持</div>
                                </div>
                                <div class="part2_infoText" title="一个M.2 SATA 接口  一个SATA 3 接口">两个千兆以太网口<br />
                                    一个M.2 SATA 接口<br />
                                    一个SATA 3 接口</div>
                            </div>

                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_media">
                                    <div class="part2_infoTit" title="支持流媒体硬解码">支持流媒体硬解码</div>
                                </div>
                                <div class="part2_infoText" title="支持H264、H265 4K@60P">支持H264、H265 4K@60P</div>
                            </div>

                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_rescuemode">
                                    <div class="part2_infoTit" title="独立救援模式">独立救援模式</div>
                                </div>
                                <div class="part2_infoText" title="轻松解决主系统刷机失败或配置错误">轻松解决主系统刷机失败或配置错误</div>
                            </div>
                        </div>
                    </div>
                    <div class="part2_right">
                        <img :src="part2_img">
                    </div>
                </div>

            </div>

        </div>

        <!-- 第三部分 -->
        <div class="part3">
            <div class="part3_content max-width">
                <div class="part3_block">
                    <div class="block_content">
                        <div class="block_list1">
                            <div class="block_list">
                                <div class="list_tit" title="8G">8G</div>
                                <div class="list_info" title="自带8GB eMMC 5.0，从此摆脱TF卡，刷机折腾更方便">
                                    <p>自带8GB eMMC 5.0，从此摆</p>
                                    <p>脱TF卡，刷机折腾更方便</p>
                                </div>
                            </div>

                            <div class="block_list">
                                <div class="list_tit" title="4G">4G</div>
                                <div class="list_info" title="4GB大内存，nas、docker、jellyfin...撑起更多服务">
                                    <p>4GB大内存，NAS、Docker、</p>
                                    <p>Jellyfin...撑起更多服务</p>
                                </div>
                            </div>
                        </div>

                        <div class="block_list2">
                            <div class="block_list">
                                <div class="list_tit" title="DSP">DSP</div>
                                <div class="list_info" title="处理器流媒体硬解码，视频加载更快更清晰">
                                    <p>处理器流媒体硬解码，视频</p>
                                    <p>加载更快更清晰</p>
                                </div>
                            </div>

                            <div class="block_list">
                                <div class="list_tit" title="SATA">SATA</div>
                                <div class="list_info" title="原生sata接口配稳定电源，数据传输更快更稳定">
                                    <p>原生SATA接口配稳定电源,</p>
                                    <p>数据传输更快更稳定</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block_img">
                    <img :src="part3_img">
                </div>
            </div>
        </div>

        <!-- 第四部分 -->
        <div class="part4">
            <div class="part4_content max-width">
                <div class="part4_title tit" title="软件支持">软件支持</div>
                <div class="part4_list">
                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_openwrt">
                        </div>
                        <div class="list_blockIfo" title="Openwrt">Openwrt</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_docker">
                        </div>
                        <div class="list_blockIfo" title="Docker">Docker</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_jellyfin">
                        </div>
                        <div class="list_blockIfo" title="Jellyfin">Jellyfin</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_houseassistant">
                        </div>
                        <div class="list_blockIfo" title="Home Assistant">Home Assistant</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_nextcloud">
                        </div>
                        <div class="list_blockIfo" title="Nextcloud">Nextcloud</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_iStore">
                        </div>
                        <div class="list_blockIfo" title="iStore">应用市场</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_easelink">
                        </div>
                        <div class="list_blockIfo" title="易有云">易有云</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_ddnsto">
                        </div>
                        <div class="list_blockIfo" title="DDNSTO">DDNSTO</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_youxijiasu">
                        </div>
                        <div class="list_blockIfo" title="游戏加速">游戏加速</div>
                    </div>

                    <div class="list_block">
                        <div class="list_blockImg">
                            <img :src="logo_aria2">
                        </div>
                        <div class="list_blockIfo" title="Aria2">远程下载</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五部分 -->
        <div class="part5">
            <div class="part5_content max-width">
                <div class="part5_title tit" title="产品包含">产品包含</div>
                <div class="part5_block">
                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_chip" alt="">
                        </div>
                        <div class="part5_listInfo" title="ARS2 开发板一块">ARS2 开发板一块</div>
                    </div>

                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_charge" alt="">
                        </div>
                        <div class="part5_listInfo" title="12V/2A 电源一个">12V/2A 电源一个</div>
                    </div>

                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_line" alt="">
                        </div>
                        <div class="part5_listInfo" title="带屏蔽干扰SATA数据线一根">带屏蔽干扰SATA数<br />据线一根 </div>
                    </div>

                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_box" alt="">
                        </div>
                        <div class="part5_listInfo" title="亚克力外壳一套">亚克力外壳一套</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第六部分 -->
        <div class="part6">
            <div class="part6_content max-width">
                <div class="part6_title tit" title="立即开始">立即开始</div>
                <div class="part6_substance">
                    <div class="substance_left">
                        <div class="left_title" title="准备：">准备：</div>
                        <div class="left_block">
                            <div class="block_info" title="千兆网线（必备，不随开发板一同出售）">千兆网线（必备，不随开发板一同出售）</div>
                            <div class="block_info" title="十字螺丝套以供安装外壳">十字螺丝套以供安装外壳</div>
                            <div class="block_info" title="M.2接口SATA协议硬盘（非NVME）">M.2接口SATA协议硬盘（非NVME）</div>
                            <div class="block_info" title="SATA接口硬盘（2.5寸硬盘可安装进外壳内）">SATA接口硬盘（2.5寸硬盘可安装进外壳内）</div>
                        </div>
                    </div>

                    <div class="substance_right">
                        <div class="right_title" title="文档：">文档：</div>
                        <div class="right_block">
                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/quick.html#_1-组装" title="1. 如何安装外壳">1. 如何安装外壳
                                    <img :src="arrow">
                                </a>
                            </div>

                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/quick.html#_2-开机" title="2. 如何配置成软路由">2. 如何配置成软路由
                                    <img :src="arrow">
                                </a>
                            </div>

                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/common.html#变身nas" title="3. 如何开启NAS功能">3. 如何开启NAS功能
                                    <img :src="arrow">
                                </a>
                            </div>

                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/" title="点击查看更多">点击查看更多</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
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
import pic_banner from "../public/home/pic_banner.png"
import pic_banner_2x from "../public/home/pic_banner_2x.png"
import pic_box from "../public/home/pic_box.png"
import pic_charge from "../public/home/pic_charge.png"
import pic_chip from "../public/home/pic_chip.png"
import pic_line from "../public/home/pic_line.png"
import arrow from "../public/home/arrow.png"
import bannerSvg from "../public/svg/banner.svg"
import bannerbgSvg from "../public/svg/bannerbg.svg"
import pic_bannerprictag from "../public/svg/pic_bannerprictag.svg"
import part1_jpg from "../public/svg/part1_jpg.svg"
import Part1_title from "../public/svg/Part1_title.svg"
import pic_bannerbg from "../public/svg/pic_bannerbg.svg"
import pic_chipbg1 from "../public/svg/pic_chipbg1.svg"
import pic_chipbg2 from "../public/svg/pic_chipbg2.svg"
import part2_img from "../public/home/part2_img.png"
import part3_img from "../public/home/part3_img.png"
import icon_drop from "../public/svg/icon_drop.svg"
import icon_media from "../public/svg/icon_media.svg"
import icon_rescuemode from "../public/svg/icon_rescuemode.svg"
import icon_Soc from "../public/svg/icon_Soc.svg"
import icon_left from "../public/svg/icon_left.svg"
import icon_right from "../public/svg/icon_right.svg"
export default {
    data() {
        return {
            logo_aria2,
            logo_ddnsto,
            logo_docker,
            logo_easelink,
            logo_houseassistant,
            logo_iStore,
            logo_jellyfin,
            logo_nextcloud,
            logo_openwrt,
            logo_youxijiasu,
            pic_banner,
            pic_banner_2x,
            pic_box,
            pic_charge,
            pic_chip,
            pic_line,
            arrow,
            bannerSvg,
            bannerbgSvg,
            pic_bannerprictag,
            part1_jpg,
            Part1_title,
            pic_bannerbg,
            pic_chipbg1,
            pic_chipbg2,
            icon_drop,
            icon_media,
            icon_rescuemode,
            icon_Soc,
            part2_img,
            part3_img,
            icon_left,
            icon_right

        }
    }
}
</script>
<style lang="scss" scoped>
* {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: none;
}
.body {
    background-color: #000;
    padding-bottom: 100px;
    .max-width {
        max-width: 1440px;
    }
    .banner {
        width: 100%;
        height: 810px;
        position: relative;
        .banner_bg {
            background-size: cover;
        }
        .banner_content {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-wrap: wrap;
            .flex_center {
                display: flex;
                width: 100%;
                justify-content: center;
                margin: 0;
            }
            .banner_top {
                flex: 0 0 100%;
                max-width: 726px;
                position: absolute;
                top: 168px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                .banner_topTitle {
                    font-size: 18px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #ffd732;
                    line-height: 25px;
                    position: relative;
                    margin-top: -35px;
                    .icon_left {
                        position: absolute;
                        top: -10px;
                        left: -14px;
                    }
                    .icon_right {
                        position: absolute;
                        bottom: -6px;
                        right: -14px;
                    }
                }
                .banner_topTit {
                    font-size: 60px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 84px;
                    padding-top: 6px;
                }
                .banner_topInfo {
                    font-size: 18px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.63);
                    line-height: 28px;
                    margin-bottom: 40px;
                }
                .banner_topBtn {
                    width: 176px;
                    height: 66px;
                    background: #0060ff;
                    border-radius: 8px;
                    font-size: 24px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 66px;
                }
                .banner_topBtn:hover {
                    opacity: 0.9;
                }
                .banner_price {
                    position: absolute;
                    right: 0;
                    bottom: -54px;
                }
            }
            .banner_bottom {
                position: absolute;
                top: 432px;
                img {
                    width: 474px;
                    max-width: 100%;
                }
            }
        }
    }
    .part1 {
        padding-top: 112px;
        height: auto;
        background: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        .part1_content {
            flex: 0 0 100%;
            max-width: 100%;
            margin: 0 auto;
            padding: 40px 0;
            .part1_top {
                .part1_topTitle {
                    width: 246px;
                    height: 70px;
                }
                .part1_topInfo {
                    font-size: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.63);
                    line-height: 28px;
                    margin-top: 24px;
                    margin-bottom: 60px;
                }
            }
            .part1_img {
                width: 672px;
                height: 522px;
            }
        }
    }
    .part2 {
        background: #000000;
        height: auto;
        padding: 142px 0;
        .part2_content {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .part2_block {
                position: relative;
                width: 1440px;
                height: 388px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                border-radius: 16px;
                .part2_left {
                    flex: 0 0 100%;
                    max-width: calc(100% - 574px);
                    position: absolute;
                    z-index: 1;
                    padding-left: 24px;
                    .part2_leftTitle {
                        font-size: 40px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 56px;
                        margin-left: 26px;
                    }
                    .part2_leftInfo {
                        margin-top: 45px;
                        padding-left: 24px;
                        margin-top: 45px;
                        padding-left: 24px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        // max-width: 50%;
                        .part2_leftInfoList {
                            flex: 0 0 100%;
                            max-width: 50%;
                            margin-bottom: 36px;
                            height: 80px;
                            .part2_InfoTile {
                                display: flex;
                                align-items: center;
                                .icon {
                                    width: 24px;
                                    height: 24px;
                                }
                                .part2_infoTit {
                                    font-size: 24px;
                                    font-family: PingFangSC-Semibold,
                                        PingFang SC;
                                    font-weight: 600;
                                    color: #ffffff;
                                    line-height: 34px;
                                    margin-left: 16px;
                                }
                            }
                            .part2_infoText {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.63);
                                line-height: 20px;
                                margin-left: 6px;
                                margin-top: 14px;
                                margin-left: 42px;
                            }
                        }
                    }
                }
                .part2_right {
                    width: 544px;
                    height: 432px;
                    position: absolute;
                    z-index: 1;
                    flex: 0 0 100%;
                    // max-width: 50%;
                    right: 0;
                }
            }
            .part2_block::after {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                content: "";
                background: linear-gradient(
                    270deg,
                    #000000 0%,
                    #413b75 58%,
                    #c2368c 100%
                );
                border-radius: 16px;
                opacity: 0.6;
            }
        }
    }
    .part3 {
        height: auto;
        background-color: #000;
        padding-top: 296px;
        .part3_content {
            margin: 0 auto;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .part3_block {
                width: 1440px;
                height: 324px;
                background: linear-gradient(
                    90deg,
                    #442471 0%,
                    #000000 49%,
                    #6d2159 100%
                );
                border-radius: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                .block_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    flex: 0 0 100%;
                    padding: 0 52px;
                    position: relative;
                    z-index: 2;
                    .block_list1 {
                        flex: 0 0 100%;
                        max-width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 32px;
                        .block_list {
                            .list_tit {
                                font-size: 50px;
                                font-family: DINAlternate-Bold, DINAlternate;
                                font-weight: bold;
                                color: #ffffff;
                                line-height: 58px;
                            }
                            .list_info {
                                p {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.63);
                                    margin: 0;
                                }
                            }
                        }
                    }
                    .block_list2 {
                        flex: 0 0 100%;
                        max-width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 100px;
                        .block_list {
                            .list_tit {
                                font-size: 50px;
                                font-family: DINAlternate-Bold, DINAlternate;
                                font-weight: bold;
                                color: #ffffff;
                                line-height: 58px;
                            }
                            .list_info {
                                P {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.63);
                                    margin-top: 18px;
                                    margin: 0;
                                }
                            }
                        }
                    }
                }
            }
            .block_img {
                max-width: 776px;
                max-height: 524px;
                position: absolute;
                top: -200px;
            }
        }
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
            .part4_title {
            }
            .part4_list {
                margin-top: 88px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                .list_block {
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
    .part5 {
        padding-top: 158px;
        height: auto;
        background-color: #000;
        .part5_content {
            margin: 0 auto;
            text-align: center;
            .part5_title {
                padding-bottom: 88px;
            }
            .part5_block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                .part5_blockList {
                    flex: 0 0 100%;
                    max-width: calc(25% - 20px);
                    .part5_listImg {
                        width: 100%;
                        img {
                            width: 100%;
                        }
                    }
                    .part5_listInfo {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #ffffff;
                        height: 60px;
                        margin-top: 22px;
                    }
                }
            }
        }
    }
    .part6 {
        height: auto;
        background-color: #000;
        .part6_content {
            margin: 0 auto;
            .part6_title {
                text-align: center;
                padding-top: 198px;
                padding-bottom: 88px;
            }
            .part6_substance {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .substance_left {
                    flex: 0 0 100%;
                    max-width: calc(50% - 22px);
                    .left_title {
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.63);
                        line-height: 34px;
                        padding-bottom: 24px;
                        margin-left: 24px;
                    }
                    .left_block {
                        width: 100%;
                        height: 272px;
                        background: rgba(255, 255, 255, 0.22);
                        border-radius: 16px;
                        .block_info {
                            width: 100%;
                            height: 68px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #ffffff;
                            line-height: 68px;
                            padding-left: 32px;
                        }
                    }
                }
                .substance_right {
                    flex: 0 0 100%;
                    max-width: calc(50% - 22px);
                    .right_title {
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.63);
                        line-height: 34px;
                        padding-bottom: 24px;
                        margin-left: 24px;
                    }
                    .right_block {
                        width: 100%;
                        height: 272px;
                        background: rgba(255, 255, 255, 0.22);
                        border-radius: 16px;
                        display: flex;
                        justify-content: space-between;
                        align-items: left;
                        flex-wrap: wrap;
                        .block_info {
                            flex: 0 0 100%;
                            width: 100%;
                            height: 68px;
                            a {
                                display: block;
                                width: 100%;
                                height: 100%;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #ffffff;
                                line-height: 20px;
                                padding: 0 32px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                img {
                                    width: 22px;
                                    height: 22px;
                                }
                            }
                            a:hover {
                                opacity: 0.9;
                            }
                        }
                        .block_info:last-child {
                            a {
                                color: #0060ff;
                            }
                        }
                    }
                }
            }
        }
    }
}

.tit {
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 56px;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .body {
        .max-width {
            padding: 0 30px;
        }
        .part2 {
            .part2_content {
                .part2_block {
                    .part2_left {
                        .part2_leftInfo {
                            .part2_leftInfoList {
                                .part2_infoText {
                                    height: 60px;
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .body {
        .max-width {
            max-width: 920px;
            padding: 0 30px;
        }
        .part2 {
            .part2_content {
                .part2_block {
                    .part2_left {
                        max-width: 50%;
                        position: absolute;
                        z-index: 5;
                        .part2_leftInfo {
                            flex-wrap: nowrap;
                            .part2_leftInfoList {
                                max-width: 50%;
                                .part2_leftInfoList {
                                    .part2_infoText {
                                        height: 10px;
                                        overflow: hidden;
                                    }
                                }
                            }
                        }
                    }
                    .part2_right {
                        width: 574px;
                        height: 460px;
                        position: absolute;
                        z-index: 1;
                        flex: 0 0 100%;
                        right: 0;
                    }
                }
                .part2_block::after {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    content: "";
                    background: linear-gradient(
                        270deg,
                        #000000 0%,
                        #413b75 58%,
                        #c2368c 100%
                    );
                    border-radius: 16px;
                    opacity: 0.6;
                }
            }
        }

        .part3 {
            .part3_content {
                flex-wrap: nowrap;
                .part3_block {
                    .block_content {
                        .block_list1 {
                            flex-wrap: nowrap;
                        }
                        .block_list2 {
                            flex-wrap: nowrap;
                            padding: 0 60px;
                        }
                    }
                }
                .block_img {
                    max-width: 576px;
                    max-height: 296px;
                    position: absolute;
                    top: -100px;
                    img {
                        max-width: 100%;
                    }
                }
            }
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

        .part5 {
            .part5_content {
                .part5_block {
                    .part5_blockList {
                        max-width: calc(50% - 20px);
                    }
                }
            }
        }

        .part6 {
            .part6_content {
                .part6_substance {
                    .substance_left {
                        max-width: 100%;
                        margin-bottom: 50px;
                    }
                    .substance_right {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 719px) {
    .body {
        .max-width {
            max-width: 100%;
            padding: 0 10px;
        }
        .banner {
            .banner_content {
                display: block;
                .flex_right {
                    display: flex;
                    width: 100%;
                    justify-content: right;
                    margin: 0;
                }
                .banner_top {
                    z-index: 2;
                    padding: 0 10px;
                    position: relative;
                    .banner_topTitle {
                        font-size: 14px;
                        //margin: 0 66px;
                    }
                    .banner_topTit {
                        font-size: 46px;
                    }
                    .banner_topInfo {
                        font-size: 16px;
                    }
                    .banner_topBtn {
                        margin-top: -18px;
                        z-index: 4;
                        width: 140px;
                        height: 56px;
                        font-size: 18px;
                        line-height: 56px;
                    }
                    .banner_price {
                        position: relative;
                        top: 20px;
                        bottom: 0px;
                        margin-left: auto;
                        img {
                            max-width: 88%;
                        }
                    }
                }
                .banner_bottom {
                    position: relative;
                    top: 200px;
                    // margin-top: 100px;
                    max-width: 474px;
                    z-index: 1;
                    img {
                        width: 100%;
                        padding: 0 10px;
                    }
                }
            }
        }
        .part1 {
            padding-top: 0px;
            .part1_content {
                .part1_top {
                    .part1_topTitle {
                        max-width: 100%;
                        padding: 0 10px;
                    }
                    .part1_topInfo {
                        margin-bottom: 0px;
                        font-size: 14px;
                    }
                }
                .part1_img {
                    max-width: 100%;
                    padding: 0 10px;
                }
            }
        }
        .part2 {
            padding-top: 0px;
            .part2_content {
                .part2_block {
                    max-width: 100%;
                    justify-content: center;
                    .part2_left {
                        max-width: 100%;
                        padding-left: 0;
                        .part2_leftTitle {
                            margin-top: 14px;
                            padding-left: 0;
                            font-size: 24px;
                            margin-left: 12px;
                            // text-align: center;
                        }
                        .part2_leftInfo {
                            flex-wrap: wrap;
                            margin-top: 10px;
                            padding-left: 0;
                            padding: 0 12px;
                            .part2_leftInfoList {
                                max-width: 50%;
                                margin-bottom: 18px;
                                margin-bottom: 46px;
                                .part2_InfoTile {
                                    padding-bottom: 0px;
                                    .icon {
                                        width: 18px;
                                        height: 18px;
                                    }
                                    .part2_infoTit {
                                        font-size: 16px;
                                        margin-left: 8px;
                                    }
                                }
                                .part2_infoText {
                                    font-size: 12px;
                                    margin-top: 0px;
                                    margin-left: 28px;
                                    max-width: 110px;
                                    height: 120px;
                                }
                            }
                        }
                    }
                    .part2_right {
                        width: 300px;
                        position: absolute;
                        z-index: 1;
                        flex: 0 0 100%;
                        right: -10px;
                        opacity: 0.8;
                        top: -100px;
                        img {
                            max-width: 100%;
                        }
                    }
                }
            }
        }
        .part3 {
            padding-top: 48px;
            .part3_content {
                flex-wrap: nowrap;
                .part3_block {
                    max-width: 100%;
                    .block_content {
                        padding: 0 12px;
                        .block_list1 {
                            // padding: 0 -20px;
                            flex-wrap: nowrap;
                            padding-bottom: 14px;
                            .block_list {
                                max-width: 100%;
                                .list_tit {
                                    font-size: 40px;
                                }
                                .list_info {
                                    p {
                                        margin-top: 4px;
                                        font-size: 12px;
                                        // padding: 0 14px;
                                    }
                                }
                            }
                        }
                        .block_list2 {
                            flex: 0 0 100%;
                            flex-wrap: nowrap;
                            padding: 0 6px;
                            .block_list {
                                max-width: 52%;
                                .list_tit {
                                    font-size: 40px;
                                }
                                .list_info {
                                    p {
                                        margin-top: 4px;
                                        font-size: 12px;
                                    }
                                }
                            }
                        }
                    }
                }
                .block_img {
                    max-width: 300px;
                    // max-height: 296px;
                    position: absolute;
                    top: -60px;
                    img {
                        max-width: 100%;
                    }
                }
            }
        }
        .part4 {
            padding-top: 98px;
            .part4_content {
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
        .part5 {
            padding-top: 80px;
            .part5_content {
                .part5_block {
                    .part5_blockList {
                        flex: 0 0 100%;
                        max-width: calc(50% - 10px);
                        .part5_listImg {
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                        .part5_listInfo {
                            height: 98px;
                        }
                    }
                }
            }
        }
        .part6 {
            .part6_content {
                .part6_title {
                    padding-top: 58px;
                    padding-bottom: 60px;
                }
                .part6_substance {
                    .substance_left {
                        max-width: 100%;
                    }
                    .substance_right {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}
</style>
