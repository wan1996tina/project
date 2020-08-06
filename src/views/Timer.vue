<template lang='pug'>
  #timer(ref='info')
    b-container.p-0.m-0(fluid style='width:100%;')
      h1.timer-title {{currentText}}
      #clock.d-flex.justify-content-center
        .clockBg
          b-col(cols='4').numBg
            h1 {{ time_min }}
          .mx-5
            .dot
            .dot
          b-col(cols='4').numBg
            h1 {{ time_sec }}
          b-row.timer-tools.align-items-center.flex-column
            div
              router-link(to="" v-b-toggle.sidebar-backdrop).m-3
                font-awesome-icon(:icon="['fas', 'plus']")
            div
              router-link(to="" v-b-toggle.sidebar-backdrop).m-3
                font-awesome-icon(:icon="['fas', 'cog']")
            div
              router-link(to="/list" v-b-toggle.sidebar-backdrop).m-3
                font-awesome-icon(:icon="['fas', 'list-ul']")
      br
      .d-flex.flex-row
        b-btn.mx-1(variant='outline-dark' size='lg' v-if='status != 1' @click='start' style='z-index:2;')
          font-awesome-icon(:icon="['fas','play']")
        b-btn.mx-1(variant='outline-dark' size='lg' v-if='status == 1' @click='pause' style='z-index:2;')
          font-awesome-icon(:icon="['fas','pause']")
        b-btn.mx-1(variant='outline-dark' size='lg' v-if='todos.length > 1' @click='finish(true)' style='z-index:2;')
          font-awesome-icon(:icon="['fas','step-forward']")
      //- 計時器側邊欄
      div
        //- b-button(v-b-toggle.sidebar-backdrop) options
        b-sidebar#sidebar-backdrop(title='' right)
          .add-item-block.px-3.py-2
            div.d-flex
              b-button.mr-2.btn-addTimer(variant="info")
                font-awesome-icon(:icon="['fas', 'plus']")
              b-form-input(placeholder="Add a new timer..." v-model="newTimerName")
            div.d-flex.flex-column
              h5 計時步驟
              b-row.p-3
                b-col.p-0(cols='10')
                  b-form-select(v-model='selected' :options='seconds')
                b-col(cols='2')
                  //- 新增秒數的按鈕
                  b-button(variant="light" @click="addSec")
                    font-awesome-icon(:icon="['fas', 'plus']")
              .new-steps
                .step(v-for="(step, index) in workoutStep") {{step}}
                  .next-icon
                    font-awesome-icon(:icon="['fas', 'angle-right']")
            div.d-flex.align-items-center
              b-col.p-0(cols='4')
                h5 循環次數
              b-col.p-0(cols='6')
                b-form-select(v-model='selectedTimes' :options='times')
              b-col(cols='2') 次
            b-row.justify-content-around
              b-button(variant="danger" @click="resetTimer") 重設計時器
              b-button(variant="success" @click='addNewTimer') 新增到清單
              b-button(variant="warning" v-if="user.length > 0" @click="updateData") 儲存到常用
          .list-item-block.px-3.py-2.my-3
            h5.my-2 Next . . .
            b-col.t-list.mx-auto(v-for="(item) in todos") {{item.name}}
</template>
      <!-- <div class="clock_shadow">
        <div class="shadow_in"></div>
        <vep
        :progress="progressNow"
        :size="this.vepData.size"
        :line="this.vepData.line"
        :thickness="this.vepData.thickness"
        :emptyThickness="this.vepData.emptyThickness"
        :color="this.vepData.color"
        :animation="this.vepData.animation"
        fontColor='rgb(0,0,0)'
        fontSize='1.5rem'
        :legend="false"
        >
          <span slot="legend-caption" style="font-size: 2.5rem; color: #000;">
          <span>{{ time_min }}</span>
          <span class="mx-2">:</span>
          <span>{{ time_sec }}</span>
          </span>
        </vep>
      </div> -->
<script>
export default {
  data () {
    return {
      // newTimerName: '',
      selected: null,
      seconds: [
        { value: null, text: '選擇秒數' },
        { value: [5, '5秒'], text: '5秒' },
        { value: [10, '10秒'], text: '10秒' },
        { value: [15, '15秒'], text: '15秒' },
        { value: [20, '20秒'], text: '20秒' },
        { value: [25, '25秒'], text: '25秒' },
        { value: [30, '30秒'], text: '30秒' },
        { value: [45, '45秒'], text: '45秒' },
        { value: [60, '1分鐘'], text: '1分鐘' },
        { value: [120, '2分鐘'], text: '2分鐘' }
      ],
      // workoutStep: [],
      selectedTimes: null,
      times: [
        { value: null, text: '選擇次數' },
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' }
      ],
      // 0 = 停止
      // 1 = 播放
      // 2 = 暫停
      status: 0,
      timer: 0,
      vepData: {
        size: 300,
        line: 'butt',
        thickness: 20,
        emptyThickness: 20,
        color: '#FAA273',
        fontcolor: '#000000',
        fontSize: '60px',
        gradient: {
          radial: false,
          colors: [
            {
              color: '#f12711',
              offset: 0,
              opacity: 1
            },
            {
              color: '#f5af19',
              offset: 100,
              opacity: 1
            }
          ]
        },
        animation: 'default 200 200'
      }
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '開始鍛鍊' : '目前沒有事項'
    },
    timetext () {
      let m = Math.floor(this.timeleft / 60)
      let s = Math.floor(this.timeleft % 60)
      if (m / 10 <= 0) {
        m = '0' + m
      }
      if (s / 10 < 0) {
        s = '0' + s
      }
      return `${m}:${s}`
    },
    time_min () {
      let m = Math.floor(this.timeleft / 60)
      if (m / 10 < 1) {
        m = '0' + m
      }
      return m
    },
    time_sec () {
      let s = Math.floor(this.timeleft % 60)
      if (s / 10 < 1) {
        s = '0' + s
      }
      return s
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    },
    progressNow () {
      return this.$store.getters.progressNow
    },
    user () {
      return this.$store.getters.user
    },
    workoutStep () {
      return this.$store.getters.workoutStep
    },
    workoutStepNum () {
      return this.$store.getters.workoutStepNum
    },
    newTimerName: {
      get () {
        return this.$store.getters.newTimerName
      },
      set (value) {
        this.$store.commit('setNewTimerName', value)
      }
    }
  },
  methods: {
    start () {
      if (this.status === 2) {
        // 暫停後繼續
        this.status = 1
        const move = 100 / this.timeleft
        this.timer = setInterval(() => {
          this.$store.commit('countdown', move)
          if (this.timeleft <= 0) {
            this.finish(false)
            this.$store.commit('reset')
          }
        }, 1000)
      } else {
        // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          const move = 100 / this.timeleft
          this.timer = setInterval(() => {
            this.$store.commit('countdown', move)
            // this.$store.commit('showProgress', move)
            // console.log(this.$store.getters.progressNow)
            if (this.timeleft <= 0) {
              // setTimeout(() => {
              this.finish(false)
              this.$store.commit('reset')
              // }, 200)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      }
      if (this.todos.length > 0) {
        this.start()
      } else {
        alert('鍛鍊結束')
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    },
    addSec () {
      // this.workoutStep.push(this.selected[1])
      if (this.selected === null) {
        alert('請選擇秒數')
      } else {
        this.$store.commit('addSec', this.selected[1])
        this.$store.commit('addSecNum', this.selected[0])
        this.selected = null
      }
    },
    resetTimer () {
      this.newTimerName = ''
      this.$store.commit('clearSec')
      this.selectedTimes = null
      this.selected = null
    },
    addNewTimer () {
      const times = this.selectedTimes
      const steps = this.$store.getters.workoutStepNum
      const timerItem = { name: this.$store.getters.newTimerName, steps: [] }
      if (this.$store.getters.newTimerName.length === 0) {
        alert('請輸入計時器名稱')
      } else if (steps === null) {
        alert('請選擇秒數')
      } else if (times === null) {
        alert('請選擇次數')
      } else {
        for (let i = 0; i < times; i++) {
          for (let k = 0; k < steps.length; k++) {
            timerItem.steps.push(steps[k])
          }
        }
        this.$store.commit('addTodo', timerItem)
        this.newTimerName = ''
        this.$store.commit('clearSec')
        this.selectedTimes = null
        this.selected = null
      }
    },
    saveTimer () {
      const times = this.selectedTimes
      const steps = this.$store.getters.workoutStepNum
      const timerItem = { name: this.$store.getters.newTimerName, steps: [] }
      if (this.$store.getters.newTimerName.length === 0) {
        alert('請輸入計時器名稱')
      } else if (steps === null) {
        alert('請選擇秒數')
      } else if (times === null) {
        alert('請選擇次數')
      } else {
        for (let i = 0; i < times; i++) {
          for (let k = 0; k < steps.length; k++) {
            timerItem.steps.push(steps[k])
          }
        }
        this.$store.commit('addList', timerItem)
        this.newTimerName = ''
        this.$store.commit('clearSec')
        this.selectedTimes = null
        this.selected = null
      }
    },
    updateData () {
      this.saveTimer()
      const user = this.$store.getters.user
      const timers = this.$store.getters.timerList
      console.log(timers)
      this.axios.patch(process.env.VUE_APP_APIURL + '/save_timer/' + user, { timerList: timers })
        .then(response => {
          // image.edit = false
          // image.title = image.model
          alert('已更新')
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }
  }
}
</script>
