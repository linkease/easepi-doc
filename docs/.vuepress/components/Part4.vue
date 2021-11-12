<template>
    <div class="part4">
        <img class="part4_bj" :src="P4_bg" loading="lazy">
        <div class="part4_content max-width">
            <div class="content_text">
                <div class="text_tit" title="共享空间高效传输文件、快速分享照片">共享空间<br /> 高效传输文件、快速分享照片</div>
                <div class="text_info" title="每台设备都可以设置共享成员、共享目录。同享p2p高速传输，轻松工作轻松生活">每台设备都可以设置共享成员、共享目录。同享p2p高速传输，轻松工作轻松生活 </div>
            </div>
        </div>
    </div>
</template>

<script>
import P4_bg from "../public/home/P4_bg.jpg"
export default {
    data() {
        return {
            P4_bg,
            // P4_bgStyle: {
            //     backgroundImage: ` url(${P4_bg})`
            // }
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
.part4 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(159.9deg, #000000 26.79%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part4_bj {
        background-size: cover;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .part4_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 999;
        padding-top: 100px;
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
    .part4 {
        .part4_content {
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
    .part4 {
        font-size: 40%;
        .part4_content {
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