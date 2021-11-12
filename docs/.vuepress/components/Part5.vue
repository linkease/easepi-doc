<template>
    <div class="part5">
        <div class="part5_imgs">
            <img class="part5_bj" :src="P5_bg" loading="lazy">
            <img :src="P5_front" alt="" class="part5_img" loading="lazy">
        </div>

        <div class="part5_content max-width">
            <div class="content_text">
                <div class="text_tit" title="随时随地P2P设备之间数据高速互传">随时随地P2P<br />设备之间数据高速互传</div>
                <div class="text_info" title="无论身处何地，易有云APP让你轻松上传、下载个人文件，在线播放视频。P2P高速穿透，智能识别网络环境不限速。">无论身处何地，易有云APP让你轻松上传、下载个人文件，在线播放视<br />频。P2P高速穿透，智能识别网络环境不限速。</div>
            </div>
        </div>

    </div>
</template>

<script>
import P5_bg from "../public/home/P5_bg.jpg"
import P5_front from "../public/home/P5_front.png"
export default {
    data() {
        return {
            P5_bg,
            P5_front
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
.part5 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(159.9deg, #000000 26.79%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part5_imgs {
        .part5_bj {
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
        .part5_img {
            position: relative;
            width: 100%;
        }
    }
    .part5_content {
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
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .part5 {
        .part5_content {
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
    .part5 {
        font-size: 40%;
        .part5_content {
            padding: 0 10px;
            margin-top: 20px;
            .content_text {
                .text_tit {
                    font-size: 16px;
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