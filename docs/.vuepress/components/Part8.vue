<template>
    <div class="part8">
        <div class="part8_imgs">
            <img class="part8_bj" :src="P8_bg" loading="lazy">
            <img :src="P8_front" alt="" class="part8_img" loading="lazy">
        </div>

        <div class="part8_content max-width">
            <div class="content_text">
                <div class="text_tit" title="更简单的Openwrt">更简单的Openwrt</div>
                <div class="text_info" title="iStore应用市场，插件安装卸载就是这么轻松。DDNSTO，一个浏览器搞定内网穿透，远程访问Openwrt、远程终端、远程桌面...">iStore应用市场，插件安装卸载就是这么轻松。<br />
                    DDNSTO，一个浏览器搞定内网穿透，远程访问Openwrt、远程终端、远程桌面...</div>
            </div>
        </div>

    </div>
</template>

<script>
import P8_bg from "../public/home/P8_bg.jpg"
import P8_front from "../public/home/P8_front.png"
export default {
    data() {
        return {
            P8_bg,
            P8_front
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
.part8 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(189.9deg, #000000 28.89%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part8_imgs {
        .part8_bj {
            background-size: cover;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
        }
        .part8_img {
            position: relative;
            width: 100%;
        }
    }

    .part8_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 140px;
        .content_text {
            max-width: 882px;
            margin: 0 auto;
            text-align: center;
            .text_tit {
                font-family: IBM Plex Mono;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                color: #ffffff;
            }
            .text_info {
                font-family: PingFang SC;
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
                color: rgba(288, 288, 288, 0.8);
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .part8 {
        .part8_content {
            padding: 0 10px;
            margin-top: 40px;
            .content_text {
                .text_tit {
                    font-size: 20px;
                }
                .text_info {
                    font-size: 16px;
                    margin-top: 18px;
                }
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .part8 {
        font-size: 40%;
        .part8_content {
            padding: 0 10px;
            margin-top: 20px;
            .content_text {
                .text_tit {
                    font-size: 18px;
                }
                .text_info {
                    font-size: 12px;
                    margin-top: 10px;
                    line-height: 16px;
                }
            }
        }
    }
}
</style>