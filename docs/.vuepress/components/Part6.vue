<template>
    <div class="part6">
        <div class="part6_imgs">
            <img class="part6_bj" :src="P6_bg" loading="lazy">
            <img :src="P6_front" alt="" class="part6_img" loading="lazy">
        </div>

        <div class="part6_content max-width">
            <div class="content_text">
                <div class="text_tit" title="4核专业芯片 视频高清硬解码">4核专业芯片 视频高清硬解码</div>
                <div class="text_info" title="EasePi ARS2使用4核 RTD1296，支持同时双路4K H265实时硬件转码，浏览器看高清无压力。">EasePi ARS2使用4核 RTD1296，支持同时双路4K H265实时<br />硬件转码，浏览器看高清无压力。</div>
            </div>
        </div>

    </div>
</template>

<script>
import P6_bg from "../public/home/P6_bg.jpg"
import P6_front from "../public/home/P6_front.png"
export default {
    data() {
        return {
            P6_bg,
            P6_front
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
.part6 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(169.9deg, #000000 26.79%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part6_imgs {
        .part6_bj {
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
        .part6_img {
            position: relative;
            width: 100%;
        }
    }
    .part6_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 100px;
        .content_text {
            max-width: 782px;
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
                color: rgba(266, 266, 266, 0.8);
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .part6 {
        .part6_content {
            padding: 0 10px;
            margin-top: 40px;
            .content_text {
                .text_tit {
                    font-size: 20px;
                }
                .text_info {
                    font-size: 16px;
                    margin-top: 10px;
                }
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .part6 {
        font-size: 40%;
        .part6_content {
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