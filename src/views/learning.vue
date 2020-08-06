<template lang="pug">
    .container-fluid.p-0
      .row.h-100
        //- 左半邊
        .col-8.text-center
          h2.my-3 {{ this.$route.params.title }}
          div.video-wrap
            iframe(width='854' height='480' :src='getdata.video' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)
            .col-9.bg-light.mx-auto.mt-4
              b-nav
                b-nav-item(v-for="(item, index) in this.navItem" @click="change(item.content)") {{item.content}}
              .nav-content(ref='navContent')
                h3.py-3 使用部位
                .d-flex.justify-content-center
                  p(v-for="(i) in getdata.info[0]") {{i+' ,'}}

        //- 右半邊
        .col-4
          p.step-title 步驟
          //- .row.step-wrap.text-center.justify-content-lg-start
          //-   .col-11.step(v-for="(step,index) in this.steps") {{step}}
          .col-10.mx-auto.d-flex.flex-column.h-50.bg-info.align-items-center
            .steps-item(v-for="(item, index) in getdata.steps") {{item}}
            //- hooper(:settings="this.hooperSettings").hooper-style
            //-   slide.go
            //-     .content slide1
            //-   slide.go1
            //-     .content slide2
            //-   slide.go2
            //-     .content slide3
            //-   slide.go3
            //-     .content slide4
            //-   slide.go4
            //-     .content slide5
            //-   slide.go5
            //-     .content slide6
          .row
            .col.my-5
              a.btn-start.mx-auto 開始鍛鍊
            .col.my-5
              a.btn-add.mx-auto(@click='addtolist') 加入我的清單
          .row
            .col.prev.text-center
              font-awesome-icon(:icon="['fas','arrow-left']")
              a 上一個
            .col.toMenu.text-center.d-flex.flex-column.justify-content-center
              font-awesome-icon(:icon="['fas','home']").d-block.mx-auto.my-2
              a(@click="gotomenu") 回到目錄
            .col.prev.text-center
              a 下一個
              font-awesome-icon(:icon="['fas','arrow-right']")

  </template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  props: {
    vSrc: String,
    index: Number
  },
  data () {
    return {
      videoSrc: this.$route.params.vSrc,
      steps: ['抬頭正面朝向前方，慢慢將一邊耳朵貼向肩膀，保持正面朝前，不轉頭，並注意不要聳肩，另一邊亦重複相同動作。', '抬頭、背挺直，肩膀保持不動，慢慢將正臉轉90度朝向一邊，注意下巴不要往脖子縮，另一邊亦重複相同動作。'],
      hooperSettings: {
        vertical: true,
        itemstoshow: 3,
        centermode: true
      },
      navItem: [{ content: '關於動作' }, { content: '準備什麼?' }, { content: '要注意喔!' }],
      learningItem: []
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  methods: {
    change (content) {
      console.log(this.$refs.navContent)
      this.$refs.navContent.innerHTML = '<p>' + content + '</p>'
    },
    addtolist () {

    },
    gotomenu () {
      this.$router.push({ name: 'Workout' })
    }
  },
  mounted () {
    this.$store.commit('addL', this.$route.params)
    console.log(this.$route.params)
  },
  computed: {
    getdata () {
      return this.$store.getters.getL
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-content
  width 100%
  height 400px
  background #fff

.go
  background #ffa
.go1
  background #abc
.go2
  background #cba
.go3
  background #aff
.go4
  background #bfb
.go5
  background #fcf

.hooper-style
  border-radius 8px

.steps-item
  width 400px
  height 80px
  margin-top 20px
  background #fff
  text-align center
  line-height 40px

.content
  margin 10px auto
  width 90%
  height 25%
  background #fff
  border-radius 10px

.container-fluid
  height 100vh
  width 100%
  background #eee
  overflow scroll
.container-fluid::-webkit-scrollbar
  display none

.video-wrap
  padding 30px 0

.step-wrap
  background #fff
  width 70%
  height 80%
  margin 30px auto
  border-radius 25px
  overflow scroll
  padding 30px 0

.step-wrap::-webkit-scrollbar
  display none

.step-title
  text-align center
  color rgb(47,85,151)
  font-size 18px
  margin 30px auto
  background linear-gradient(0deg, rgb(255,255,255) 0, rgb(255,255,255) 100%)
  width 170px
  height 35px
  line-height 35px
  border-radius 20px
  letter-spacing 2px

.step
  background #CAF2F6
  height 60px
  line-height 60px
  border-radius 30px
  font-size 18px
  margin 0 auto

.btn-start
  background rgb(47,85,151)
  display block
  width 200px
  height 50px
  line-height 50px
  color white
  text-align center
  font-size 20px
  border-radius 8px
  letter-spacing 3px
  transition 0.3s

.btn-start:hover
  color #fff
  background rgb(115, 157, 230)
  cursor pointer

.btn-start:hover::before
  content:'GO!GO!GO!'
  position absolute
  top -80%
  left calc(50% - 55px)
  color #000
  font-size 15px

.btn-add
  background #EC5C2E
  display block
  width 200px
  height 50px
  line-height 50px
  color white
  text-align center
  font-size 20px
  border-radius 8px
  letter-spacing 2px
  transition 0.3s

.btn-add:hover
  color #fff
  background #ffb15e
  cursor pointer

.prev
  background #ffffff
  height 170px
  line-height 170px
  font-size 23px
  border-right 1px solid #eee

.toMenu
  background #ffffff
  height 170px
  font-size 23px
  border-right 1px solid #eee

.next
  background #ffffff
  height 170px
  line-height 170px
  font-size 23px

.next:hover,
.prev:hover,
.toMenu:hover
  background #E4F3FF
  cursor pointer
</style>
