<template lang="pug">
  #information(ref='info')
    b-container(fluid style='width:100%;').p-0
      b-col.toolbar(cols='12')
        p.subtitle.d-none Information
      b-col.banner(cols='11')
        img.woman(src='~@/assets/woman.png')
        h2.info-subtitle Fast.&emsp;Convenient.&emsp;Affordable.
        h2.info-title(class="animate__animated animate__fadeInDown") RELAX
        h2.info-back-title (yourself)
      b-container.text-center(style='width:95%;')
        b-row(class="animate__animated  animate__infinite")
          b-col.more(cols="12") More about us
          div.triangle.mx-auto.mt-2
      //- 目的
      b-container.content1
        div.num1
        div.text-center.mx-auto.c1-title PURPOSE
        h4.box-1-title DARE TO BE GREAT.
        div.box-1 鍛鍊沒有什麼理由，可以只是為了變成更好的自己!我們的核心理念在於提供人們一個能夠隨時開始鍛鍊的環境，不論是熱愛運動的你，還是因為疫情無法出門的你，我們都希望能藉由提供簡單的動作教學，以及可以配合鍛鍊使用的計時器，達到改善人們體態、使身心平衡與放鬆的成效，現在，還有什麼理由繼續懶下去呢?快一起開始你的第一個鍛鍊吧!
        div.infoimg1
          img(:src="this.imgSrc[0]" width="620px")
        div.infoimg2
          img(:src="this.imgSrc[1]" width="600px")
        h4.box-1-title2
        div.box-2 鍛鍊沒有什麼理由，可以只是為了變成更好的自己!我們的核心理念在於提供人們一個能夠隨時開始鍛鍊的環境，不論是熱愛運動的你，還是因為疫情無法出門的你，我們都希望能藉由提供簡單的動作教學，以及可以配合鍛鍊使用的計時器，達到改善人們體態、使身心平衡與放鬆的成效，現在，還有什麼理由繼續懶下去呢?快一起開始你的第一個鍛鍊吧!
      //- 適用對象
      b-container.content2
        div.num2
        div.text-center.mx-auto.c1-title APPLICABLE
        b-row.c2-img.w-100.h-100.justify-content-center
          b-col(cols='3').d-flex.justify-content-center.align-items-center.flex-column
            div.img-wrap.mx-1
              img(:src="this.imgSrc[2]")
            h5.my-4 3C 產品使用者
          b-col(cols='12').d-md-none

          b-col(cols='3').d-flex.justify-content-center.align-items-center.flex-column
            div.img-wrap.mx-1
              img(:src="this.imgSrc[3]")
            h5.my-4 久坐族群
          b-col(cols='12').d-md-none

          b-col(cols='3').d-flex.justify-content-center.align-items-center.flex-column
            div.img-wrap.mx-1
              img(:src="this.imgSrc[4]")
            h5.my-4 有運動習慣者
          b-col(cols='12').d-md-none

          b-col(cols='3').d-flex.justify-content-center.align-items-center.flex-column
            div.img-wrap.mx-1
              img(:src="this.imgSrc[5]")
            h5.my-4 無法外出運動者

        //- 建議
      b-container.contact
        b-col.num3(cols='12')
        div.text-center.mx-auto.num3-title SUGGESTION
        h4.box-1-title.mx-auto
        b-row.info
          b-col(col md='4' sm='12').text-center
            font-awesome-icon(:icon="['fas','phone']")
            h4 PHONE
            p phone 02-2912-3456
          b-col(col md='4' sm='12').text-center
            font-awesome-icon(:icon="['fas','map-marker-alt']")
            h4 ADDRESS
            p  100台北市中正區廣州街15號
          b-col(col md='4' sm='12').text-center
            font-awesome-icon(:icon="['far','envelope']")
            h4 EMAIL
            p workout@123mail.com
        b-row.form.justify-content-center
          b-col.col-6.my-2
            input.d-block.ml-auto(type='text' placeholder="Your name")
          b-col.col-6.my-2
            input.d-block.mr-auto(type='text' placeholder="Your e-mail")
          b-col.col-12.my-2
            input.d-block.mx-auto(type='text' placeholder="Subject")
          b-col.col-12.my-2
            textarea.d-block.mx-auto(placeholder="Message" rows="5" maxlength="300")
          button.ct-submit SEND MESSAGE
      b-container(fluid).footer.text-center
        b-row.w-25.icons
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','facebook-f']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','instagram']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','twitter']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','youtube']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','pinterest-p']")
        h6 Terms & Conditions  Privacy Policy
        h6 Copyright &copy; 2020 Flaunter, Ltd. All rights reserved. Site credit.
</template>

<script>
export default {
  data () {
    return {
      imgSrc: ['./img/home2.jpg', './img/info2.jpg', './img/info3.jpg', './img/info4.jpg', './img/info5.jpg', './img/info6.jpg']
    }
  },
  watch: {
    height () {
      const num3Bg = document.getElementsByClassName('num3')[0]
      window.addEventListener('scroll', function () {
        const value = window.scrollY
        console.log(value)

        num3Bg.style.backgroundPosition = (value * 1 + 200) + 'px' + ' ' + +'px'
      }, true)
    }
  }
}
</script>
