<template>
    <div class="part18">
        <div class="part18_content max-width">
            <div class="content_tit" title="为什么选择EasePi?">为什么选择EasePi?</div>
            <div class="content_block">
                <div class="block_list">
                    <div class="list_tit" title="1-技术实力">1-技术实力</div>
                    <div class="list_content">
                        <img :src="icon_arrow" alt="" loading="lazy">
                        <div class="list_text" title="专业的硬件研发团队，长期维护专属固件。">专业的硬件研发团队，长期维护专属固件。</div>
                    </div>

                </div>

                <div class="block_list">
                    <div class="list_tit" title="2-软件支持">2-软件支持</div>
                    <div class="list_content">
                        <img :src="icon_arrow" alt="" loading="lazy">
                        <div class="list_text" title="自带iStore应用商店，轻松管理插件；配合DDNSTO，随时随地管理家中路由器。">自带iStore应用商店，轻松管理插件；<br />
                            配合DDNSTO，随时随地管理家中路由器。</div>
                    </div>

                </div>

                <div class="block_list">
                    <div class="list_tit" title="3-性能强劲">3-性能强劲</div>
                    <div class="list_content">
                        <img :src="icon_arrow" alt="" loading="lazy">
                        <div class="list_text" title="双网口！双SATA！双USB！四核高清硬解码！">双网口！双SATA！双USB！四核高清硬解码！</div>
                    </div>

                </div>

                <div class="block_list">
                    <div class="list_tit" title="4-玩家社区">4-玩家社区</div>
                    <div class="list_content">
                        <img :src="icon_arrow" alt="" loading="lazy">
                        <div class="list_text" title="专属用户群，群内技术大佬随时在线解答。">专属用户群，群内技术大佬随时在线解答。</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icon_arrow from "../public/svg/icon_arrow.svg"
export default {
    data() {
        return {
            icon_arrow
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
.part18 {
    background-color: #000;
    padding-bottom: 100px;
    height: 100%;
    position: relative;
    font-size: 100%;
    .max-width {
        max-width: 730px;
    }
    .part18_content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        .content_tit {
            flex: 0 0 100%;
            font-family: IBM Plex Mono;
            font-style: normal;
            font-weight: bold;
            font-size: 2.5em;
            line-height: 80px;
            color: #ffffff;
            margin-bottom: 34px;
            text-align: center;
        }
        .content_block {
            flex: 0 0 100%;
            max-width: 100%;
            .block_list {
                margin-top: 28px;
                .list_tit {
                    font-family: PingFang SC;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 2em;
                    line-height: 45px;
                    color: #ffffff;
                }
                .list_content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-top: 10px;
                    .list_text {
                        width: 684px;
                        height: 86px;
                        left: 407px;
                        top: 243px;

                        background: linear-gradient(
                            94.23deg,
                            #ff7372 -1.36%,
                            #625bff 100%
                        );
                        border-radius: 6px;
                        font-family: PingFang SC;
                        font-size: 1.25em;
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 900px) {
    .part18 {
        .part18_content {
            .content_tit {
                margin-bottom: 10px;
            }
        }
    }
}
@media screen and (max-width: 760px) {
    .part18 {
        font-size: 80%;
        .part18_content {
            padding: 0 10px;
            img {
                display: none;
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .part18 {
        font-size: 40%;
        .part18_content {
            padding: 0 10px;
            .content_tit {
                margin-bottom: 0px;
            }
            .content_block {
                .block_list {
                    margin-top: 0px;
                    .list_content {
                        .list_text {
                            height: 60px;
                        }
                    }
                }
            }
            img {
                display: none;
            }
        }
    }
}
@media screen and (max-width: 500px) {
    .part18 {
        padding-bottom: 40px;
    }
}
@media screen and (max-width: 400px) {
    .part18 {
        padding-bottom: 40px;
    }
}
</style>