<template>
    <div class="part3">
        <div class="part3_content max-width">
            <div class="content_text">
                <div class="text_tit" title="支持多种存储设备">支持多种存储设备</div>
                <div class="text_info" title="支持机械/固态硬盘、U盘、移动硬盘(支持：常规SATA /M.2 SATA/USB 3.0)">支持机械/固态硬盘、U盘、移动硬盘<br /> (支持：常规SATA /M.2 SATA/USB 3.0) </div>
            </div>
        </div>
        <img :src="P3_front" alt="" class="part3_img" loading="lazy">

    </div>
</template>

<script>
import P3_front from "../public/home/P3_front.png"
export default {
    data() {
        return {
            P3_front
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
.part3 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(159.9deg, #000000 26.79%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }

    .part3_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 90px;
        .content_text {
            max-width: 670px;
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
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 20px;
            }
        }
    }
    .part3_img {
        position: relative;
        width: 100%;
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
    .part3 {
        .part3_img {
            padding-top: 40px;
        }
    }
}
@media screen and (max-width: 1024px) {
    .part3 {
        .part3_content {
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
@media screen and (max-width: 900px) {
    .part3 {
        .part3_img {
            padding-top: 20px;
        }
    }
}

@media screen and (max-width: 800px) {
    .part3 {
        .part3_img {
            padding-top: 40px;
        }
    }
}

@media screen and (max-width: 700px) {
    .part3 {
        .part3_img {
            padding-top: 80px;
        }
    }
}
@media screen and (max-width: 400px) {
    .part3 {
        font-size: 40%;
        .part3_content {
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