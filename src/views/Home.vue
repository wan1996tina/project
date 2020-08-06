<template lang="pug">
  #home(ref='home')
    b-container.m-0.p-0(fluid style='width:100vw; position:relative; height:100vh')
      .bg-video.w-100
        video(src='~@/assets/video.mp4' autoplay muted loop)
      .gradient
        p.t1 healthy mind
        p.t2 in a
        p.t3 healthy body
      b-col.vh-100
        //- 橫幅
      div.vh-100.home-content
        b-row.my-5.w-75.mx-auto
          b-col.banner.p-0(col sm='12' lg='6')
            .wrap
              img(:src="this.imgSrc[0]" width="800px")
          b-col.mx-auto(col sm='12' lg='6')
            h1.h-title1 Strength Training
            p.h-text1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore iusto, quo voluptas, beatae magni mollitia magnam impedit molestias maiores modi ipsa inventore, nemo eum dignissimos! Rem ad sequi aliquam!
            .h-btn1 Learning →

      //- .wrap-hooper.col-7
      //-   hooper(:settings='hooperSettings')
      //-     slide
      //-       .images.img1
      //-         h2 運動前暖身
      //-     slide
      //-       .images.img2
      //-         h2 運動後收操
      //-     slide
      //-       .images.img3
      //-         h2 核心鍛鍊
      //-     slide
      //-       .images.img4
      //-         h2 肩部拉伸
      //-     slide
      //-       .images.img5
      //-         h2 腰部拉伸
      //-     hooper-navigation(slot='hooper-addons')
</template>

<script>
// import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
// import 'hooper/dist/hooper.css'

// import VueHorizontalList from '../components/vue-horizontal-list'
export default {
  components: {
    // Hooper,
    // Slide,
    // HooperNavigation
    // VueHorizontalList
  },
  data () {
    return {
      // formState: false,
      submittedNames: [],
      hooperSettings: {
        itemsToShow: 3,
        infiniteScroll: true,
        centerMode: true,
        autoPlay: true,
        playSpeed: 2000
      },
      imgSrc: ['./img/home1.jpg', '', '', '', '', '', '', '']
    }
  },
  computed: {
    viewWidth () {
      return this.$store.getters.getWidth
    }
  },
  methods: {
    checkFormValidity () {
      // 查看否有條件需要驗證，通過的話回傳 true
      // const valid = this.$refs.form.checkValidity()
      // this.formState = valid
      // return valid
    },
    resetModal () {
      // 清空表單資料
      this.name = ''
      this.account = ''
      this.password_again = ''
      this.password = ''
      this.formState = null
    },
    handleOk (bvModalEvt) {
      // 按下 ok 的時候，先暫停預設動作
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      // 是否通過驗證
      if (!this.checkFormValidity()) {
        return
      }
      // 把名字顯示在網頁上
      // Push the name to submitted names
      // this.submittedNames.push(this.name)
      // 把 modal隱藏
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }

}
</script>
<!-- :style="{ width : 'calc(' + viewWidth + '%-96)'}" -->
