<template lang="pug">
  #app(ref='app')
    .main-content
      router-view
    //- 大尺寸選單
    div#menu
      b-nav#nav.mx-auto.text-center(vertical)
        b-nav-item
          router-link(to='/')
            font-awesome-icon(:icon="['fas', 'home']")
            span(v-show='!isBurgerShow') Home
        b-nav-item
          router-link(to='/workout')
            font-awesome-icon(:icon="['fas', 'dumbbell']")
            span(v-show='!isBurgerShow') Workout
        b-nav-item
          router-link(to='/information')
            font-awesome-icon(:icon="['fas', 'info-circle']")
            span(v-show='!isBurgerShow') About
        b-nav-item
          router-link(to='/timer')
            font-awesome-icon(:icon="['fas', 'stopwatch']")
            span(v-show='!isBurgerShow') Timer
      h3 {{this.width}}
      //- Menu#menu(@data='data' ref='menu')

    //- 主選單
    .menu-sm
      b-navbar(toggleable='lg' type='dark' variant='info' fixed="top")
        b-navbar-toggle(target='nav-collapse')
        b-navbar-brand.text-center(href='#').d-flex
          img(:src='this.logoSrc' style="width:40px;").ml-4.mr-3
          p.logo-title workout
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav#nav-sm.mr-auto
            b-nav-item
              router-link(to='/')
                font-awesome-icon(:icon="['fas', 'home']")
                span(v-show='!isBurgerShow') Home
            b-nav-item
              router-link(to='/workout')
                font-awesome-icon(:icon="['fas', 'dumbbell']")
                span(v-show='!isBurgerShow') Workout
            b-nav-item
              router-link(to='/information')
                font-awesome-icon(:icon="['fas', 'info-circle']")
                span(v-show='!isBurgerShow') About
            b-nav-item
              router-link(to='/timer')
                font-awesome-icon(:icon="['fas', 'stopwatch']")
                span(v-show='!isBurgerShow') Timer
          //-Right aligned nav items
          b-navbar-nav#user-option.mx-auto
            b-nav-item-dropdown(text='' right)
              template(slot='button-content')
                font-awesome-icon(:icon="['fas','user-alt']")
              b-dropdown-item(href='#' v-b-modal.modal-prevent-closing) Log in
              b-dropdown-item(href='#' v-b-modal.modal-prevent-closing1) Sing up
            //- b-nav-item-dropdown(right)
            //-   //-Using 'button-content' slot
            //-   template(v-slot:button-content)
            //-   b-dropdown-item(href='#') Profile
            //-   b-dropdown-item(href='#') Sign Out
        //-登入、註冊、使用者
        b-col.user-options.d-flex.justify-content-center.align-items-center(cols='3')
          //-註冊 button
          div
            input.sign-btn(type='button' value='Sign up' v-if='user.length === 0' v-b-modal.modal-prevent-closing1)
            b-modal#modal-prevent-closing1.d-flex.flex-row(size='lg' :centered='isCenter' footer-class='border-top-0 col-12 mx-auto justify-content-center' hide-footer hide-header)
              b-row.m-3.mt-4
                .col-12.col-md-5.mb-4.pt-3.d-flex.justify-content-center.flex-column.align-items-center(style='background:rgb(255, 227, 224); border-radius:12px;')
                  h3(style='color:rgb(100,100,100);') Nice to meet you!
                  p(style='font-size:12px;color:#aaa;') 歡迎加入我們，一起變健康吧!
                  input.login-btn.m-0.my-3(type='button' value='Log in')

                .col-12.col-md-7
                  b-form(@submit='signUp')
                    h3.text-center 註冊
                    //- 姓名
                    b-form-group(
                      :state="formState('name')"
                      label='Name'
                      label-for='name-input'
                      invalid-feedback='姓名格式不符'
                      description='名字可輸入 1 ~ 30 字'
                    )
                      b-form-input#name-input(
                        v-model='name'
                        :state="formState('name')"
                        required
                      )
                    //- 帳號
                    b-form-group(
                      :state="formState('account')"
                      label='Account'
                      label-for='account-input'
                      invalid-feedback='帳號格式不符'
                      description='帳號可輸入 4 ~ 15 字'
                    )
                      b-form-input#account-input(
                        v-model='account'
                        :state="formState('account')"
                        required
                      )
                    //- 密碼
                    b-form-group(
                      :state="formState('password')"
                      label='Password'
                      label-for='password-input'
                      invalid-feedback='請輸入密碼'
                    )
                      b-form-input#password-input(
                        v-model='password'
                        :state="formState('password')"
                        required type='password'
                      )
                    //- 密碼 again
                    b-form-group(
                      :state="formState('password_again')"
                      label='Password Again'
                      label-for='password-input'
                      invalid-feedback='兩次密碼不相同，請重新確認'
                      )
                      b-form-input#password-input(
                        v-model='password_again'
                        :state="formState('password_again')"
                        required
                        type='password'
                      )
                    b-button(type="submit" variant='info') 註冊

          //- 登入 button
          div
            input.login-btn(type='button' value='Log in' v-if='user.length === 0' v-b-modal.modal-prevent-closing)
            //-  b-button(v-b-modal.modal-prevent-closing) Open Modal
            b-modal#modal-prevent-closing.d-flex.flex-row(size='lg' :centered='isCenter' footer-class='border-top-0 col-12 mx-auto justify-content-center' hide-header hide-footer)
              b-row.m-3.mt-4
                .col-12.col-md-5.mb-4.pt-3.d-flex.justify-content-center.flex-column.align-items-center(style='background:rgb(224, 236, 255); border-radius:12px;')
                  h3(style='color:rgb(47,85,151);') Welcome back!
                  p(style='font-size:12px;color:#aaa;') 歡迎回來，這是歡迎訊息…
                  input.login-btn.m-0.my-3(type='button' value='Sign up')
                .col-12.col-md-7(style='height:400px;')
                  b-form(@submit='login')
                    h3.text-center 登入
                    //-  帳號
                    b-form-group.my-5(
                      :state="formState('user_account')"
                      label='Account'
                      label-for='account-input'
                      invalid-feedback='account is required'
                    )
                      b-form-input#account-input(
                        v-model='user_account'
                        :state="formState('user_account')"
                        required
                      )
                    //-  密碼
                    b-form-group(
                      :state="formState('user_password')"
                      label='Password'
                      label-for='password-input'
                      invalid-feedback='password is required'
                    )
                      b-form-input#password-input(
                        v-model='user_password'
                        :state="formState('user_password')"
                        required type='password'
                      )
                    b-button(type="submit" variant='info') 登入

          //- 使用者按鈕、使用者資訊
          div(v-if='user.length > 0')
            .userBlock.d-flex.justify-content-center.align-items-center
              b-button(v-b-toggle.sidebar-right).bg-light.btn-user.text-dark
                font-awesome-icon(:icon="[ 'fas', 'user-ninja' ]")
              p.m-0.mx-2(style="color:white;") Hello, {{username}}
            b-sidebar#sidebar-right(right)
              .px-3.py-2
                .profile.mx-auto
                  .userImg
                    b-img(:src="this.userSrc").userPhoto
                h4.text-center.my-3 {{username}}
              .user-content.d-flex.justify-content-between
                h5.mb-3 我的常用計時器
                b-button.btn-sm.btn-editList(variant="primary" @click="editUserList") 管理
              .b-row.h-50.overflow-auto.list-wrap
                .userList.col-10(v-for="(item, index) of timerList").bg-light.mx-auto
                  p {{item}}
              div.w-100.text-center
                b-button(variant='info' @click="logout").btn-logout Log out
</template>
<!-- <router-link to="/">
          <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
      </router-link> -->
<script>
import Menu from './components/Menu'

export default {
  data () {
    return {
      side: 'left',
      currentMenu: 'push',
      isBurgerShow: true,
      width: '',
      logoSrc: './img/workout.png',
      name: '',
      account: '',
      password: '',
      password_again: '',
      user_account: '',
      user_password: '',
      isCenter: true,
      userSrc: './img/user.jpg',
      timerModel: []
    }
  },
  components: {
    Menu
  },
  methods: {
    data (data) {
      this.isBurgerShow = data
    },
    formState (type) {
      // 註冊驗證
      if (type === 'name') {
        if (this.name.length === 0) {
          return null
        } else if (this.name.length < 1 || this.name.length > 30) {
          return false
        } else {
          return true
        }
      } else if (type === 'account') {
        if (this.account.length === 0) {
          return null
        } else if (this.account.length < 4 || this.account.length > 15) {
          return false
        } else {
          return true
        }
      } else if (type === 'password') {
        if (this.password.length === 0) {
          return null
        } else if (this.password.length > 0) {
          return true
        } else {
          return false
        }
      } else if (type === 'password_again') {
        if (this.password_again.length === 0) {
          return null
        } else if (this.password_again.length > 0 && this.password_again === this.password) {
          return true
        } else {
          return false
        }
      }

      // 登入驗證
      if (type === 'user_account') {
        if (this.user_account.length === 0) {
          return null
        } else if (this.user_account.length < 4 || this.user_account.length > 15) {
          return false
        } else {
          return true
        }
      } else if (type === 'user_password') {
        if (this.user_password.length === 0) {
          return null
        } else if (this.user_password.length > 0) {
          return true
        } else {
          return false
        }
      }
    },
    signUp (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 15) {
        alert('帳號格式不符')
      } else if (!this.password.length > 0) {
        alert('請輸入密碼')
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/users',
        { name: this.name, account: this.account, password: this.password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('註冊成功')
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    },
    login (event) {
      event.preventDefault()
      if (this.user_account.length < 4 || this.user_account.length > 15) {
        alert('帳號格式不符')
      } else if (!this.user_password.length > 0) {
        alert('請輸入密碼')
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/login',
        { account: this.user_account, password: this.user_password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登入成功')
            this.$store.commit('login', [this.user_account, data.message])
            this.$router.push('/')
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    },
    logout () {
      this.$store.commit('logout')
    },
    editUserList (index) {
      this.$store.commit('editTodo', index)
    }
  },
  watch: {
    changeWidth () {
      if (this.width === 100) { this.$refs.wrap.width = 100 }
    }
  },
  computed: {
    getWidth () {
      return this.$store.getters.sidebarWidth
    },
    user () {
      return this.$store.getters.user
    },
    username () {
      return this.$store.getters.username
    },
    timerList () {
      return this.$store.getters.timerList.map(item => item.name)
      // return this.$store.getters.timerList.map(item => item.name)
    }
  },
  mounted () {
    if (this.$store.getters.user.length > 0) {
      const user = this.$store.getters.user
      this.axios.get(process.env.VUE_APP_APIURL + '/get_timer/' + user)
        .then(response => {
          console.log(response.data.result[0].timerList.map(item => item.name))
          this.$store.commit('setTimerList', response.data.result[0].timerList)
          this.timerModel = response.data.result[0].timerList.map(item => item.name)
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }

    // const width = this.$refs.menu.$refs.sideNav.clientWidth
    // this.width = width
    // console.log(this.width)
    // console.log(this.$refs.menu.$refs.sideNav)
  }
}
</script>
