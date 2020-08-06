import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// const timeleft = parseInt(process.env.VUE_APP_TIMELEFT)
// const timeleftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)

export default new Vuex.Store({
  state: {
    todos: [],
    // timerList: ['肩膀放鬆', '頸部放鬆', '我的計時器 1', '我的計時器 2', '我的計時器 3', '我的計時器 4', '我的計時器 5', '我的計時器 6', '我的計時器 7', '我的計時器 8', '我的計時器 9', '我的計時器 10', '我的計時器 11'],
    timerList: [],
    timeleft: 0,
    alarm: 'alarm1.mp3',
    current: '',
    isBreak: false,
    progressNow: 0,
    viewWidth: 96,
    // 帳號
    user: '',
    // 姓名
    username: '',
    workoutStep: [],
    workoutStepNum: [],
    newTimerName: '',
    currentTimer: [],
    learningItem: []
  },
  mutations: {
    addL (state, data) {
      state.learningItem = data
    },
    login (state, data) {
      state.user = data[0]
      state.username = data[1]
    },
    logout (state) {
      state.user = ''
    },
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push({ name: data.name, steps: data.steps, edit: false, model: data })
    },
    addList (state, data) {
      state.timerList.push({ name: data.name, steps: data.steps, edit: false, model: data })
    },
    dragTodo (state, data) {
      state.todos = data
    },
    delTodo (state, index) {
      state.todos.splice(index, 1)
    },
    editTodo (state, data) {
      state.todos[data].edit = !state.todos[data].edit
    },
    cancelTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].model = state.todos[data].name
    },
    saveTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].name = state.todos[data].model
    },
    start (state) {
      // if (state.isBreak) {
      //   state.current = '休息一下'
      // } else if (!state.isBreak) {
      //   state.showProgress = 0
      //   state.current = state.todos[0].name
      //   state.todos.splice(0, 1)
      // }
      state.currentTimer = state.todos[0].model
      state.current = state.currentTimer.name
      state.timeleft = state.currentTimer.steps[0]
    },
    countdown (state, data) {
      state.timeleft--
      state.progressNow += data
      if (state.progressNow >= 100) {
        state.progressNow = 100
      }
    },
    finish (state) {
      // if (state.todos.length > 0) {
      //   state.isBreak = !state.isBreak
      // }

      // 完成一個小倒數
      state.currentTimer.steps.splice(0, 1)
      if (state.currentTimer.steps.length === 0) {
        state.todos.splice(0, 1)
        if (state.todos.length === 0) {
          state.current = '目前沒有事項'
          state.timeleft = 0
          state.currentTimer = []
        }
      }
      // state.timeleft = state.isBreak ? timeleftBreak : timeleft
    },
    showProgress (state, data) {
      state.progressNow += data
      if (state.progressNow >= 100) {
        state.progressNow = 100
      }
    },
    reset (state) {
      state.progressNow = 0
    },
    changeWidth (state, data) {
      state.viewWidth = data
    },
    addSec (state, data) {
      state.workoutStep.push(data)
    },
    addSecNum (state, data) {
      state.workoutStepNum.push(data)
    },
    clearSec (state) {
      state.workoutStep = []
      state.workoutStepNum = []
    },
    setNewTimerName (state, data) {
      state.newTimerName = data
    },
    setTimerList (state, data) {
      state.timerList = data
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getL (state) {
      return state.learningItem
    },
    timerList (state) {
      return state.timerList
    },
    user (state) {
      return state.user
    },
    username (state) {
      return state.username
    },
    alarm (state) {
      return state.alarm
    },
    todos (state) {
      return state.todos
    },
    timeleft (state) {
      return state.timeleft
    },
    current (state) {
      return state.current
    },
    isBreak (state) {
      return state.isBreak
    },
    progressNow (state) {
      return state.progressNow
    },
    getWidth (state) {
      return state.viewWidth
    },
    workoutStep (state) {
      return state.workoutStep
    },
    workoutStepNum (state) {
      return state.workoutStepNum
    },
    newTimerName (state) {
      return state.newTimerName
    }
  },
  plugins: [createPersistedState()]
})
