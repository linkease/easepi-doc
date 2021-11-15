<template>
    <div class="body">
        <div class="part1">
            <div class="part1_content max-width">
                <div class="part1_top">
                    <img class="part1_topTitle" :src="Part1_title">
                    <div class="part1_topInfo" title="丰富的接口和强劲的性能，不再限制你的创意和想法">丰富的接口和强劲的性能，不再限制你的创意和想法</div>
                </div>
                <img class="part1_img" :src="part1_diagram" alt="" loading="lazy">
            </div>
        </div>
    </div>
</template>

<script>
import part1_diagram from "../public/svg/part1_diagram.svg"
import Part1_title from "../public/svg/Part1_title.svg"
export default {
    data() {
        return {
            part1_diagram,
            Part1_title
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
    .part1 {
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
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .body {
        .max-width {
            padding: 0 30px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .body {
        .max-width {
            max-width: 920px;
            padding: 0 30px;
        }
    }
}

@media screen and (max-width: 900px) {
    .body {
        padding-bottom: 0px;
        .part1 {
            .part1_content {
                padding: 0px;
            }
        }
    }
}

@media screen and (max-width: 719px) {
    .body {
        padding-bottom: 200px;
        .max-width {
            max-width: 100%;
            padding: 0 10px;
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
    }
}
@media screen and (max-width: 600px) {
    .body {
        padding-bottom: 80px;
    }
}

@media screen and (max-width: 400px) {
    .body {
        padding-bottom: 180px;
        .part1 {
            .part1_content {
                .part1_img {
                    height: 300px;
                }
            }
        }
    }
}
</style>