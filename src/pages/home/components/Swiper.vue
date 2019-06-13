<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img  class="swiper-img" :src="item.imgurl" >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name:'HomeSwiper',
  data () {
    return{
      swiperOption :{
        pagination:'.swiper-pagination',
        loop:true, //支持循环轮播
      },
      swiperList:[
        {id:'1',
        imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'},
        {id:'2',
        imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/d1dabef55b4e17db42b4d74cc0ea23af.jpg_750x200_5a5c28d4.jpg'},
        {id:'3',
        imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/3db65a4159225577a4d67701e30b3e1d.jpg_750x200_a0dd80e8.jpg'},
        {id:'4',
        imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/3db65a4159225577a4d67701e30b3e1d.jpg_750x200_a0dd80e8.jpg'},
        {id:'5',
        imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/ec35f7e49f0542dd4320cbdd78ee1ffb.jpg_750x200_75722072.jpg'},
        {id:'6',
        imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/b07d59650489443d2885e8d06620909f.jpg_750x200_a8180811.jpg'},
     ]
    }
  }

}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background:#fff
 .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:26.25%
    .swiper-img
      width:100%

</style>
