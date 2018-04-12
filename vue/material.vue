<template>
    <div class="material">
        <swiper class="swiper" loop
            auto
            dots-position="center"
            height="100%"
            :list="viwe_pager" :index="viwe_pager_index"
            @on-index-change="pagerOnIndexChange"></swiper>
        <div class="notice">
            <div class="notice-title">
                <span class="iconfont icon-message" slot="icon"></span>
            </div>
            <div class="notice-content">

                <marquee>
                    <marquee-item v-for="i in 5" :key="i"
                        @click.native="onClick(i)">
                        2017/11/05 18:03更新创意海报《I am flying bird》至产品图库{{i}}</marquee-item>
                </marquee>
            </div>
        </div>
        <tab class="material-tab" v-model="index01" prevent-default @on-before-index-change="switchTabItem">
            <tab-item  selected>产品图</tab-item>
            <tab-item  class="border-l1">活动图</tab-item>
            <tab-item  class="border-l2">发货图</tab-item>
            <tab-item  class="personal border-l3">私人订制</tab-item>
            <div style="width:100px"></div>
        </tab>
        <loading v-model="showLoading" :text="loadText"></loading>
        <flexbox orient="vertical" :gutter="0">
            <flexbox-item v-if="!showPrivate" class="scroll tab-items">
                <grid :cols="3">
                    <grid-item v-for="(item, index) in GoodsListPic" :key="index">
                        <img :src="item.img" slot=icon>
                        <span slot="label">{{ item.title }}</span>
                    </grid-item>
                </grid>
            </flexbox-item>
            <flexbox-item v-if="showPrivate" class="scroll function-items">
                <grid :cols="3">
                    <grid-item link="/message">
                        <span class="iconfont icon-qrcode" slot="icon" style="color: #D286B6;"></span>
                        <span slot="label">艺术二维码</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-folding" slot="icon" style="color: #3D489C;"></span>
                        <span slot="label">海报订制</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-h5" slot="icon" style="color: #E24912;"></span>
                        <span slot="label">H5订制</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-ppt" slot="icon" style="color: #E94B1B;"></span>
                        <span slot="label">PPT订制</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-umbrella" slot="icon" style="color: #00BA3B;"></span>
                        <span slot="label">标识订制</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-vidicon" slot="icon" style="color: #D286B6;"></span>
                        <span slot="label">视频订制</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-teacup" slot="icon" style="color: #9C3E13;"></span>
                        <span slot="label">其他订制</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-node" slot="icon" style="color: #009F99;"></span>
                        <span slot="label">发圈助手</span>
                    </grid-item>
                    <grid-item link="/">
                        <span class="iconfont icon-node" slot="icon" style="color: #009F99;"></span>
                        <span slot="label">发圈助手</span>
                    </grid-item>
                </grid>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import {
    Swiper,
    Marquee,
    MarqueeItem,
    Group,
    Cell,
    Tab,
    TabItem,
    AjaxPlugin,
    Loading,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem } from 'vux';

// 轮播图列表
const baseList = [
    {
        url: 'test:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵花',
    },
    {
        url: 'test:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '给你一辆车',
    },
    {
        url: 'test:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '和你去旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg',
    },
    {
        url: 'test:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '带你去西藏',
        fallbackImg: 'https://static.vux.li/demo/3.jpg',
    },
];
// 轮播图列表
const picList = baseList.map(item => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `${item.title}`,
}));
// 产品图列表
const GoodsListPic = [
    {
        img: '../../static/images/product_1.jpg',
        title: '一代女皇酵母软糖',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '一代女皇燕窝代餐棒',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '珍嗖啦酵素果冻',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '毛孔清洁按摩膏',
    },
    {
        img: '../../static/images/product_5.jpg',
        title: '水光凝彩BB霜',
    },
    {
        img: '../../static/images/product_1.jpg',
        title: '一代女皇酵母软糖',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '一代女皇燕窝代餐棒',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '珍嗖啦酵素果冻',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '毛孔清洁按摩膏',
    },
    {
        img: '../../static/images/product_5.jpg',
        title: '水光凝彩BB霜',
    },
    {
        img: '../../static/images/product_1.jpg',
        title: '一代女皇酵母软糖',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '一代女皇燕窝代餐棒',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '珍嗖啦酵素果冻',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '毛孔清洁按摩膏',
    },
    {
        img: '../../static/images/product_5.jpg',
        title: '水光凝彩BB霜',
    },
    {
        img: '../../static/images/product_1.jpg',
        title: '一代女皇酵母软糖',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '一代女皇燕窝代餐棒',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '珍嗖啦酵素果冻',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '毛孔清洁按摩膏',
    },
    {
        img: '../../static/images/product_5.jpg',
        title: '水光凝彩BB霜',
    },
    {
        img: '../../static/images/product_1.jpg',
        title: '一代女皇酵母软糖',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '一代女皇燕窝代餐棒',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '珍嗖啦酵素果冻',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '毛孔清洁按摩膏',
    },
    {
        img: '../../static/images/product_5.jpg',
        title: '水光凝彩BB霜',
    },
];
// 活动图列表
const ActivitysListPic = [
    {
        img: '../../static/images/product_1.jpg',
        title: '2一代女皇酵母软糖1',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '2一代女皇燕窝代餐棒2',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '2珍嗖啦酵素果冻2',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '2毛孔清洁按摩膏3',
    },
];
// 发货图列表
const sendListPic = [
    {
        img: '../../static/images/product_1.jpg',
        title: '3一代女皇酵母软糖2',
    },
    {
        img: '../../static/images/product_2.jpg',
        title: '4一代女皇燕窝代餐棒2',
    },
    {
        img: '../../static/images/product_3.jpg',
        title: '5珍嗖啦酵素果冻2',
    },
    {
        img: '../../static/images/product_4.jpg',
        title: '6毛孔清洁按摩膏2',
    },
];
// 私人订制列表

export default {
    name: 'material',
    components: {
        Swiper,
        Marquee,
        MarqueeItem,
        Group,
        Cell,
        Tab,
        TabItem,
        AjaxPlugin,
        Loading,
        Flexbox,
        FlexboxItem,
        Grid,
        GridItem,
    },
    data() {
        return {
            // 轮播图
            viwe_pager: picList,
            viwe_pager_index: 0,
            swiperItemIndex: 1,
            // tab
            index01: 0,
            GoodsListPic,
            // 私人订制
            showPrivate: false,
            // loading
            showLoading: false,
            loadText: 'Loading',
        };
    },
    methods: {
        pagerOnIndexChange(index) {
            this.viwe_pager_index = index;
        },
        onClick(i) {
            this.index01 += i;
            // console.log(i);
        },
        // 切换tab
        switchTabItem(index) {
            // console.log('on-before-index-change', index);
            this.showLoading = true;
            setTimeout(() => {
                this.showLoading = false;
                this.index01 = index;
                if (index === 0) {
                    this.GoodsListPic = GoodsListPic;
                    this.showPrivate = false;
                } else if (index === 1) {
                    this.GoodsListPic = ActivitysListPic;
                    this.showPrivate = false;
                } else if (index === 2) {
                    this.GoodsListPic = sendListPic;
                    this.showPrivate = false;
                } else if (index === 3) {
                    this.showPrivate = true;
                }
            }, 0);
        },
    },
};
</script>

<style lang="less">
    .material {
        // 轮播
        .swiper {
            height: round(300/64rem, 3);
            .vux-indicator > a > .vux-icon-dot.active,
            .vux-indicator-right > a > .vux-icon-dot.active {
                background-color: #999;
                opacity: 0.6;
            }
            .vux-indicator > a > .vux-icon-dot,
            .vux-indicator-right > a > .vux-icon-dot {
                opacity: 0.8;
            }
        }
        // 公告
        .notice {
            height: round(56/64rem, 3);
            // line-height: round(56/64rem, 3);
            display: flex;
            background: #fabe00;
            color:#fff;
            font-size: 13px;
            .notice-title {
                width: round(56/64rem, 3);
                line-height: round(56/64rem, 3);
                text-align: center;
            }
            .notice-content {
                flex: 1;
                padding-top: round(13/64rem, 3);
                .vux-marquee {
                    height: round(56/64rem, 3);
                }

            }
        }
        // tab重写
        .material-tab {
            padding-top: round(10/64rem, 3);
            padding-left: round(12/64rem, 3);
            border-bottom: 1px solid #A2A3A4;
            height: round(50/64rem, 3);
            color: #1E1F1F;
            background: #F1F2F2;

            // 默认的
            .vux-tab-item {
                border: 1px solid #A2A3A4;
                height: round(49/64rem, 3);
                line-height: round(49/64rem, 3);
                width: round(120/64rem, 3);
                border-style:solid !important;
                border-width: 1px !important;
                border-bottom-color: transparent;
                border-radius: 4px 4px 0 0 ;
                position: relative;
                bottom: -2px
            }
            // 选择的
            .vux-tab-item.vux-tab-selected{
                background: #fff;
                color: #1E1F1F;
                border-bottom: 1px solid #A2A3A4;

            }
            .vux-tab-item.vux-tab-selected:after{
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                bottom: -7px;
                left: 50%;
                border-top: 6px solid #FABE00;
                border-right: 9px solid transparent;
                border-left: 9px solid transparent;
                transform: translateX(-50%)
            }
            .vux-tab-item.vux-tab-selected:before{
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                z-index: 1;
                background: #FABE00;
            }
            .vux-tab-item.border-l1 {
                // border-left-color: transparent;
                left: -1px;
            }
            .vux-tab-item.border-l2 {
                // border-left-color: transparent;
                left: -2px;
            }
            .vux-tab-item.border-l3 {
                // border-left-color: transparent;
                left: -3px;
            }
            .vux-tab-ink-bar {
                width: round(120/64rem, 3);
                background: #FABE00;
                display: none !important;
            }
            // 私人订制
            .personal {
                width: round(135/64rem, 3);
                flex: inherit;
            }
        }
        .vux-flexbox-item.scroll {
            overflow-x: hidden;
            overflow-y: auto;
        }
        // 产品列表
        .tab-items {
            padding: 0.281rem 0;
            height: round(600/64rem, 3);
            .weui-grid {
                padding-bottom: round(10/64rem, 3);
            }
            .weui-grid__icon {
                width: 60%;
                height: 100%;
            }
        }
        // 私人订制
        .function-items {
            padding: round(18/64rem, 3) 0;
            .weui-grids {
                background-color: white;
            }
            .weui-grid {
                padding: 22px 10px;
            }
            .weui-grid__icon {
                width: round(60/64rem, 3);
                height: round(60/64rem, 3);
                .iconfont {
                    font-size: round(60/64rem, 3);
                    line-height: 1;
                }
            }
            .weui-grid__label {
                font-size: round(21/64rem, 3);
            }
            .weui-grid:before {
                // color: #bbbbbc
            }
        }
}

</style>
