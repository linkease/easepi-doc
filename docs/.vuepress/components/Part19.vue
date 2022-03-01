<template>
    <div class="part19">
        <img class="part19_bj" :src="P11_bg" loading="lazy" />
        <div class="part19_content max-width">
            <div class="content_text">
                <div class="text_tit" title="易有云网络科技">易有云网络科技</div>
                <div
                    class="text_info"
                    title="易有云网络科技是专注于网络设备、软硬件一体的高新技术企业。研发团队由原koolshare团队发展而来，有丰富的软硬件开发经验。企业以“源自社区，服务社区”为宗旨，推出了易有云APP、DDNSTO、EasePi等知名产品，并持续朝着“轻松拥有私有云”为目标不断奋斗。"
                >
                    易有云网络科技是专注于网络设备、软硬件一体的高新技术企业。研发团队由原koolshare团队
                    发展而来，有丰富的软硬件开发经验。企业以“源自社区，服务社区”为宗旨，推出了易有云
                    APP、DDNSTO、EasePi等知名产品，并持续朝着“轻松拥有私有云”为目标不断奋斗。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import P11_bg from "../public/home/P11_bg.jpg"
export default {
    data() {
        return {
            P11_bg,
            P11_bgStyle: {
                backgroundImage: `url(${P11_bg})`
            }
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
.part19 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(199.9deg, #000000 29.99%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part19_bj {
        background-size: 100% 100%;
        width: 100%;
    }
    .part19_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 100px;
        .content_text {
            max-width: 992px;
            margin: 0 auto;
            text-align: center;
            .text_tit {
                font-family: IBM Plex Mono;
                font-style: normal;
                font-weight: bold;
                font-size: 2.5em;
                color: #ffffff;
            }
            .text_info {
                font-family: PingFang SC;
                font-weight: normal;
                font-size: 1.25em;
                line-height: 30px;
                color: rgba(299, 299, 299, 0.9);
                margin-top: 32px;
                max-width: 833px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .part19 {
        .part19_content {
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
@media screen and (max-width: 500px) {
    .part19 {
        font-size: 62.5%;
        .part19_content {
            padding: 0 10px;
            margin-top: 40px;
            .content_text {
                .text_tit {
                    font-size: 18px;
                }
                .text_info {
                    font-size: 12px;
                    margin-top: 10px;
                    line-height: 20px;
                }
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .part19 {
        .part19_content {
            padding: 0 10px;
            margin-top: 20px;
            .content_text {
                .text_tit {
                    font-size: 16px;
                }
                .text_info {
                    font-size: 12px;
                    margin-top: 8px;
                    line-height: 18px;
                }
            }
        }
    }
}
</style>