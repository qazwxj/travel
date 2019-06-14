
<template>
    <div>
        <div class=" recommend-title">热门推销</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
                 <img  class="item-img" :src="item.imgurl" />
                <div class="item-info">
                     <p class="item-title">{{item.title}}</p>
                     <p class="item-desc">{{item.desc}}</p>
                     <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data(){
        return{
            recommendList:[
                {id:'1',
                imgurl:'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
                title:'大连圣母海洋世界 ',
                desc:'浪漫大连首站，浪漫的海洋主题世界'
                }, 
                {id:'2',
                imgurl:'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
                title:'大连圣母海洋世界 ',
                desc:'浪漫大连首站，浪漫的海洋主题世界'
                }, 
                {id:'3',
                imgurl:'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
                title:'大连圣母海洋世界 ',
                desc:'浪漫大连首站，浪漫的海洋主题世界'
                }
            ]
        }
    } 
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
 .recommend-title
    margin-top:.2rem
    line-height:.8rem
    background:#ccc
    text-indent:.2rem
.item
    overflow:hidden
    display:flex
    height 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding:.1rem
    .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height:.54rem 
            font-size:.32rem
            ellipsis()
         .item-desc
            line-height:.4rem    
            color:#ccc
         .item-button
            line-height:.44rem
            margin-top:.16rem
            background:#ff9300 
            padding: 0 .2rem 
            border-radius:.06rem 
            color:#fff

</style>
