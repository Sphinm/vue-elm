<template>
    <div class="header">
      <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>

      <!-- 内容区 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      </div>
      <div class="bulletin-wrapper"></div>
    </div>
</template>

<script>
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position: relative
    overflow: hidden
    color #fff
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
     .avatar
       display inline-block
       vertical-align top
       img
        border-radius 2px
     .content
       display inline-block
       margin-left 16px
       .title
        margin 2px 0 8px 0
        .brand
          display inline-block
          vertical-align top
          width 30px
          height 18px
          bg-image('brand')
          background-repeat no-repeat
          background-size 30px 18px
         .name
           font-size 16px
           line-height 18px
           font-weight bold
           margin-left 6px
       .description
         line-height 12px
         font-size 12px
         margin-bottom 10px
       .support
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px
          font-size 12px

</style>
