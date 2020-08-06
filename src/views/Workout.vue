<template lang='pug'>
  #workout(ref='info')
    //- learning(:v-src="this.video")
    b-container
      h5.m-4 Newest
      b-col.banner.my-2.p-5(cols='12')
        b-row.w-100
          b-col(col sm='8')
            h1.title Use it or lose it.
          //- img(src='~@/assets/dec.gif' width='300px')
          b-col(cols sm='4')
            lottie-player(src='https://assets7.lottiefiles.com/packages/lf20_DyXIVc.json' background='transparent' speed='1' style='width: 300px; height: 300px;' loop autoplay)
      b-container.mx-0.mt-5
        h5.m-3 Classification
        div.navbar(id='navBar')
          b-nav.w-75.mx-auto(tabs justified)
            b-nav-item(href="#navBar") 運動前暖身
            b-nav-item(href="#warmUp") 肌群鍛鍊
            b-nav-item(href="#workOut") 伸展與放鬆
            b-nav-item(href="#relax") 運動後收操
        h6.mx-auto.my-5.class-sub 運動前暖身
        b-row(id='warmUp')
          b-col(col sm='3' v-for="(item, index) in warmUp" @click='learningPage1(index)')
            div.poseCard.d-flex.justify-content-center.align-items-center.my-3.flex-column
              img(:src='item.src' width='65px').my-4
              p {{item.title}}
        h6.mx-auto.my-5.class-sub 核心肌群鍛鍊
        b-row(id='workOut')
          b-col(col sm='3' v-for="(item, index) in workOut" @click='learningPage(item)')
            div.poseCard.poseCard2.d-flex.justify-content-center.align-items-center.my-3.flex-column
              img(:src='item.src' width='65px').my-4
              p {{item.title}}
        h6.mx-auto.my-5.class-sub 日常伸展放鬆
        b-row(id='relax')
          b-col(col sm='3' v-for="(item, index) in relax" @click='learningPage(item)')
            div.poseCard.d-flex.justify-content-center.align-items-center.my-3.flex-column
              img(:src='item.src' width='65px').my-4
              p {{item.title}}
        h6.mx-auto.my-5.class-sub 運動後收操
        b-row
          b-col(col sm='3' v-for="(item, index) in coolDown" @click='learningPage(item)')
            div.poseCard.poseCard2.d-flex.justify-content-center.align-items-center.my-3.flex-column
              img(:src='item.src' width='65px').my-4
              p {{item.title}}
</template>

<script>
import learning from './learning'
export default {
  components: {
    learning
  },
  data () {
    return {
      warmUp: [
        {
          id: 1,
          src: './img/r1.png',
          title: '頸部暖身',
          subtitle: 'Neck Warm Up',
          video: 'https://www.youtube.com/embed/j1L1hoKc0XI',
          steps: ['抬頭正面朝向前方，慢慢將一邊耳朵貼向肩膀，保持正面朝前，不轉頭，並注意不要聳肩，另一邊亦重複相同動作。', '抬頭、背挺直，肩膀保持不動，慢慢將正臉轉90度朝向一邊，注意下巴不要往脖子縮，另一邊亦重複相同動作。'],
          info: [['提肩胛肌', '胸鎖乳突肌', '斜方肌', '中斜角肌', '前斜角肌', '後斜角肌', '頭夾肌', '頭半棘肌', '頭最長肌'], {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 0
        },
        {
          id: 2,
          src: './img/r2.png',
          title: '肩部暖身',
          subtitle: 'Shoulder Warm Up',
          video: 'https://www.youtube.com/embed/bj5NRi52YLc',
          steps: ['抬頭挺胸，慢慢將兩邊肩膀提起，朝前、下繞一圈到後面再回到原位，相同動作改成由後向前畫圈，重複數次。', '平舉起一邊手臂，朝向另一側肩膀貼近，彎曲另一邊手肘，夾緊平舉的手臂，感受到肩膀有拉緊的感覺，另一側亦重複相同動作。', '右邊手臂向上舉起，彎下手肘放在左側背後，左邊的手按住彎曲的手肘，向左邊拉，左側亦重複相同的動作。', '雙手舉起，以肩膀為圓心由前往後畫圈，重複同樣動作改由後往前畫圈。'],
          info: [{ 使用部位: ['肩胛下肌', '棘上肌', '棘下肌', '小圓肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 1
        },
        {
          id: 3,
          src: './img/r3.png',
          title: '腰部暖身',
          subtitle: 'Waist Warm Up',
          video: 'https://www.youtube.com/embed/-Vd7arp9ZAE',
          steps: '雙手向上平舉，雙腳打開與肩同寬，扭轉腰部使正面朝向右方，左側亦重複相同的動作。',
          info: [{ 使用部位: ['腹斜肌', '闊背肌', '三角肌', '豎脊肌', '腹直肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 2
        },
        {
          id: 4,
          src: './img/r1.png',
          title: '腿部暖身',
          subtitle: 'Legs Warm Up',
          video: 'https://www.youtube.com/embed/MoW1hXjDA4I',
          steps: ['彎曲膝蓋向上抬起到腰部位置，抬起時用雙手抱住膝蓋再放下，換腳重複相同動作。', '右腳向後勾起，腳跟向臀部貼近時，用手抓住腳踝像臀部壓，感覺大腿前側有緊的感覺，左側亦重複相同的動作。', '彎曲右側膝蓋，並將右腳抬起到腰部位置呈現盤腿狀，雙手抓住小腿前側向身體拉近，左側亦重複相同的動作。'],
          info: [{ 使用部位: ['股外側肌', '股直肌', '內收肌', '股二頭肌', '半腱肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 3
        },
        {
          id: 5,
          src: './img/r2.png',
          title: '膝蓋暖身',
          subtitle: 'Knees Warm Up',
          video: 'https://www.youtube.com/embed/fUgXkL61WnU',
          steps: ['雙腳併攏，膝蓋微彎，彎腰將雙手放在膝蓋上，順時針旋轉膝蓋，之後逆時針重複同樣的動作'],
          info: [{ 使用部位: ['股四頭肌', '膝蓋肌腱', '膕繩肌', '半腱肌', '半膜肌', ''] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 4
        },
        {
          id: 6,
          src: './img/r3.png',
          title: '腳踝暖身',
          subtitle: 'Ankle Warm Up',
          video: 'https://www.youtube.com/embed/zwZBcMuNN6c',
          steps: ['一側腳跟向後抬起，膝蓋彎曲，大幅度旋轉腳踝，另一側重複同樣動作。'],
          info: [{ 使用部位: ['腓骨長肌', '腓骨短肌', '第三腓骨肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 5
        }
      ],
      workOut: [
        {
          id: 1,
          src: './img/g1.png',
          title: '曲膝橋式',
          subtitle: 'Glute Bridge',
          video: 'https://www.youtube.com/embed/rXAbcneAr3I',
          steps: ['平躺地上，雙腿彎曲，膝部朝向天', '雙手放平，置於身體兩側', '提起腰部，將膝蓋、腰和肩膀成一直線', '收緊腹肌，靜止3秒', '放鬆，落下'],
          info: [{ 針對肌群: ['臀肌 (Glute)'] }, { 訓練建議量: ['初學每次3組，每組10下'] }, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 6
        },
        {
          id: 2,
          src: './img/g2.png',

          title: '捲腹',
          subtitle: 'Crunch',
          video: 'https://www.youtube.com/embed/Xyd_fa5zoEU',
          steps: ['身體躺在地下放鬆', '雙腳屈曲，腳掌放在地上', '慢慢用腰力將上身抬起', '放鬆，回復第一步。'],
          info: [{ 使用部位: ['腹直肌'] }, { 訓練建議量: ['初學者每組10次，每次做3組，每組休息時間10至15分鐘。'] }, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 7
        },
        {
          id: 3,
          src: './img/g3.png',
          title: '跪姿撐體',
          subtitle: 'Bird Dog',
          video: 'https://www.youtube.com/embed/wiFNA3sqjCA',
          steps: ['膝部跪在地上，雙手垂直支撐上身。', '頭、肩、腰、臀，四個部位，成一直線。', '左手伸出，右腳向後伸直。與頭、肩、腰、臀成一直線。', '靜止2-3秒。回復1之位置，左右交替重覆動作。'],
          info: [{ 針對肌群: ['臀肌 (Glute)', '腹橫肌 (Transverse Abdominis)'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 8
        },
        {
          id: 4,
          src: './img/g1.png',
          title: '核心踢腿',
          subtitle: 'Flutter kicks',
          video: 'https://www.youtube.com/embed/WRnq49TAv-w',
          steps: ['仰臥，雙腿伸直至45度角。保持手臂伸直並與地板平行，手掌朝下。稍微抬起頭、脖子和肩膀。', '保持雙腿伸直並將雙腳指尖併攏，開始放低一隻腳。', '再抬高放低的腳，然後放低另一隻，保持核心收緊。', '雙腿持續交替運動。'],
          info: [{ 針對肌群: ['腹直肌', '腹內斜肌', '腹外斜肌', '腹橫肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 9
        },
        {
          id: 5,
          src: './img/g2.png',
          title: '平板支撐',
          subtitle: 'Plank',
          video: 'https://www.youtube.com/embed/oZI1328BgIk',
          steps: [''],
          info: [{ 針對肌群: ['腹直肌', '腹內斜肌', '腹外斜肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 10
        }
      ],
      relax: [
        {
          id: 1,
          src: './img/y1.png',
          title: '頸部放鬆',
          subtitle: 'Neck relax',
          video: 'https://www.youtube.com/embed/Weg7ZT1L3uE',
          steps: ['直視前方頭擺正，雙手抱在頭後方，慢慢將頭往前壓，讓下巴貼近頸部，直到頸部後方有緊繃的感覺，停留5秒後回復原位', '直視前方頭擺正，單手右手壓在左上方頭頂，慢慢將頭往右側拉至45度位置，直到頸部左側有緊繃的感覺，停留5秒後回復原位，右邊亦重複相同動作'],
          info: [{ 針對肌群: ['斜方肌', '肩胛提肌', '小菱形肌', '大菱形肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 11
        },
        {
          id: 2,

          src: './img/g3.png',
          title: '肩膀放鬆',
          subtitle: 'Shoulder relax',
          video: 'https://www.youtube.com/embed/6jHsraw2NIk',
          steps: ['抬頭挺胸，慢慢將兩邊肩膀提起，朝前、下繞一圈到後面再回到原位，相同動作改成由後向前畫圈，重複數次。', '抬頭挺胸，兩邊肩膀同時向後夾緊，手臂自然向後伸，再回到原位', '平舉起一邊手臂，朝向另一側肩膀貼近，彎曲另一邊手肘，夾緊平舉的手臂，感受到肩膀有拉緊的感覺，另一側亦重複相同動作。', '右邊手臂向上舉起，彎下手肘放在左側背後，左邊的手按住彎曲的手肘，向左邊拉，左側亦重複相同的動作。'],
          info: [{ 使用部位: ['肩胛下肌', '棘上肌', '棘下肌', '小圓肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 12
        },
        {
          id: 3,
          src: './img/r2.png',
          title: '背部放鬆',
          subtitle: 'Back realx',
          video: 'https://www.youtube.com/embed/2VuLBYrgG94',
          steps: ['平躺在地上，頭枕在枕頭上，膝蓋彎起，轉動骨盆使背部貼平地面，再回復原位', '平躺在地上，膝蓋彎起，臀部、腹部發力，將腰部向上抬起，上抬時背部微微彎曲直到伸直，使膝蓋、腰和肩膀成一直線', '平躺在地，膝蓋彎起，保持膝蓋彎曲抬起一邊的腳，雙手穿過膝窩抱緊，將膝蓋往身體方向拉，直到感覺臀部、背部有緊繃感。'],
          info: [{ 使用部位: ['豎脊肌', '背闊肌', '後鋸肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 13
        },
        {
          id: 4,
          src: './img/y2.png',
          title: '髖關節放鬆',
          subtitle: 'Hip joint relax',
          video: 'https://www.youtube.com/embed/cjOWkVF2reo',
          steps: ['將左腳膝蓋放置於地上', '右腳往前踩呈高跪姿', '將手放在右大腿上或腰部兩側', '臀部向前推，後腳保持不動', '另一邊重複相同動作。'],
          info: [{ 使用部位: ['髂腰肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 14
        }
      ],
      coolDown: [
        {
          id: 1,
          src: './img/r3.png',
          title: '坐式內縮肌伸展',
          subtitle: 'Seated Groin Stretch',
          video: 'https://www.youtube.com/embed/ZADA5EzIj_k',
          steps: ['坐著彎曲雙腿，使雙腳掌心相對，雙手抓住腳尖，膝蓋下壓貼近地面，保持背部挺直，上半身慢慢向前傾斜使腹部與地面成平行'],
          info: [{ 使用部位: ['髂腰肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 15
        },
        {
          id: 2,
          src: './img/g2.png',
          title: '臀大肌伸展',

          subtitle: 'Gluteus stretch',
          video: 'https://www.youtube.com/embed/gE6mJ0VjK7Y',
          steps: ['平躺在地上，雙腳彎曲，舉起右腳將腳踝靠在左腳膝蓋上，保持姿勢抬起左腳向身體靠近，直到感覺臀部有緊繃感'],
          info: [{ 使用部位: ['臀大肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 16
        },
        {
          id: 3,
          src: './img/y1.png',
          title: '小腿伸展',
          subtitle: 'calf stretch',
          video: 'https://www.youtube.com/embed/f1HzSAuB-Vw',
          steps: ['面向牆壁，雙手扶在牆上，一腳在前一腳在後，前腳腳尖勾起抵在牆上，腳跟不離地，感覺小腿有緊繃感，換腳重複相同動作'],
          info: [{ 使用部位: ['比目魚肌', '腓腸肌'] }, {}, {}],
          timerItem: [{ name: 'first', steps: [10, 5, 10, 5, 10, 5], edit: false, model: { name: 'first', steps: [10, 5, 10, 5, 10, 5] } }],
          index: 17
        }
      ],
      video: 'https://www.youtube.com/embed/sTANio_2E0Q',
      learningData: [
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' }
      ]
    }
  },
  methods: {
    learningPage1 (index) {
      // console.log(data.video)
      this.$router.push({ name: 'Learning', params: this.warmUp[index] })
    }
  }
}
</script>
