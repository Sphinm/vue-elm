<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{ item.name }}
          </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span>月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  const ERR_OK = 0;
  const debug = process.env.NODE_ENV !== 'production';

    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data() {
        return {
          goods: []
        }
      },
      created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

        const url = debug ? '/api/goods' : 'http://ustbhuangyi.com/sell/api/goods';
        this.$http.get(url).then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
          }
        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        width 56px
        height 54px
        padding 0 12px
        line-height 14px
        .icon
          display inline-block
          vertical-align: top
          width 12px
          height 12px
          margin-right: 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display table-cell
          width 56px
          vertical-align middle
          font-size 12px
          border-1px(rgba(7, 17, 27, 0.1))
    .foods-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147, 153, 159)
        background #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          margin-bottom 0
          border-none()
        .icon
          margin-right 10px
          flex 0 0 57px
        .content
          flex 1
          .name
            height 14px
            line-height 14px
            font-size 14px
            color rgb(7, 17, 27)
            margin 2px 0 8px 0
          .desc, .extra
            line-height 10px
            font-size 10px
            color rgb(147, 153, 159)
          .desc
            margin-bottom 8px
          .extra
            &.count
              margin-right 12px
          .price
            line-height 24px
            font-weight 700
            .now
              font-size 14px
              color rgb(240, 20, 20)
              margin-right 18px
            .old
              font-size 10px
              color rgb(147, 153, 159)
              text-decoration line-through
</style>
