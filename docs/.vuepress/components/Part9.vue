<template>
    <div class="part9">
        <div class="part9_imgs">
            <img class="part9_bj" :src="P9_bg" loading="lazy">
            <img :src="P9_front" alt="" class="part9_img" loading="lazy">
        </div>
        <div class="part9_content max-width">
            <div class="content_text">
                <div class="text_tit" title="怎么连接Wi-Fi？">怎么连接Wi-Fi？</div>
                <div class="text_info" title="专业的事交给专业的设备，EasePi + 专业无线路由器（推荐华硕、Netgear） 自带双千兆网口，配合千兆无线路由，覆盖全屋智能设备，传输更快！">专业的事交给专业的设备，EasePi + 专业无线路由器（推荐华硕、Netgear）<br />
                    自带双千兆网口，配合千兆无线路由，覆盖全屋智能设备，传输更快！</div>
            </div>
        </div>

    </div>
</template>

<script>
import P9_bg from "../public/home/P9_bg.jpg"
import P9_front from "../public/svg/P9_front.svg"
export default {
    data() {
        return {
            P9_bg,
            P9_front
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
.part9 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(199.9deg, #000000 29.99%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part9_imgs {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .part9_bj {
            background-size: cover;
            width: 100%;
            z-index: 0;
        }
        .part9_img {
            position: absolute;
            z-index: 1;
            // max-width: 448px;
        }
    }

    .part9_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 60px;
        .content_text {
            max-width: 992px;
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
                color: rgba(299, 299, 299, 0.9);
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .part9 {
        .part9_imgs {
            .part9_img {
                max-width: 600px;
            }
        }
    }
}

@media screen and (max-width: 1400px) {
    .part9 {
        .part9_imgs {
            .part9_img {
                max-width: 520px;
            }
        }
    }
}
@media screen and (max-width: 1240px) {
    .part9 {
        .part9_imgs {
            .part9_img {
                max-width: 440px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .part9 {
        .part9_imgs {
            .part9_img {
                max-width: 300px;
            }
        }
        .part9_content {
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
    .part9 {
        font-size: 40%;
        .part9_imgs {
            .part9_img {
                max-width: 200px;
                margin-top: 80px;
            }
        }
        .part9_content {
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