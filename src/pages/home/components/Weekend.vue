
<template>
    <div>
        <div class=" recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
               <div class="item-img-wrapper">
                     <img  class="item-img" :src="item.imgurl" />
               </div>
                <div class="item-info">
                     <p class="item-title">{{item.title}}</p>
                     <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    data(){
        return{
            recommendList:[
                {id:'1',
                imgurl:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                title:'大连圣母海洋世界 ',
                desc:'浪漫大连首站，浪漫的海洋主题世界'
                }, 
                {id:'2',
                imgurl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                title:'大连圣母海洋世界 ',
                desc:'浪漫大连首站，浪漫的海洋主题世界'
                }, 
                {id:'3',
                imgurl:'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
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
.item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom:33.9%
    .item-img
      width: 100%
    .item-info
        padding:.1rem
        .item-title
            line-height:.54rem 
            font-size:.32rem
            ellipsis()
         .item-desc
            line-height:.4rem    
            color:#ccc
</style>