<template>
 <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_600x330_9fee26e9.jpg" >
      <div class="banner-info">
          <div class="banner-title">
              大连圣亚海洋世界(AAAA景区)
          </div>
          <div class="banner-number">
              <span class="iconfont banner-icon">&#xe6df;</span>
              39
            </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
 </div>
  
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name:'DetailBanner',
  data(){
    return{
      showGallary:false,
      imgs:['http://img1.qunarzz.com/sight/p0/1511/ea/ea7eda2c3e879ed90.img.jpg_350x240_d6142a2a.jpg',
      'http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_350x240_90880200.jpg' ]
    }
  },
  methods:{
    handleBannerClick(){
      this.showGallary =true
    },
    handleGallaryClose(){
       this.showGallary =false
    }
  },
  components:{
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info 
        display:flex 
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem 
        color:#fff
        background-image:linear-gradient(top,rgba(0,0,0,0),
        rgba(0,0,0,0.8))
        .banner-title
          flex:1
          font-size:.32rem 
          padding:0 .2rem
        .banner-number
          height:.32rem 
          lie-height:.32rem 
          margin-top:.14rem
          padding: 0 .4rem
          border-radius:.2rem 
          background:rgba(0,0,0,.8)
          font-size:.24rem 
          .banner-icon
            font-size:.24rem 

</style>
