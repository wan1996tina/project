<template>
<!-- 子元件 -->
    <div>
        <div ref="sideNav" class="bm-menu">
            <nav class="bm-item-list">
                <slot></slot>
            </nav>

            <!-- <h2 class="logo">Logo</h2> -->
            <img :src="this.logoSrc" alt="" width="40px" class="logo">

            <!-- x鈕 hidden 要不要 display:none -->
            <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
                <span v-for="(x, index) in 2" :key="x" class="bm-cross" :style="{ position: 'absolute', width: '2px', height: '28px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}">
                </span>
            </span>

            <!-- 漢堡鈕 -->
            <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
            <span class="bm-burger-bars line-style" :style="{top:20 * (index * 2) + '%'}" v-for="(x, index) in 3" :key="index"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      isSideBarOpen: false,
      winWidth: 1920,
      burgerIcon: true,
      crossIcon: false,
      logoSrc: './img/logo.png'
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    width: {
      type: [String],
      required: false,
      default: '300'
    },
    disableEsc: {
      type: Boolean,
      required: false
    },
    noOverlay: {
      // 不要覆蓋
      type: Boolean,
      required: false
    },
    onStateChange: {
      type: Function,
      required: false
    }, // ,
    // burgerIcon: {
    //   type: Boolean,
    //   required: false,
    //   default: true
    // },
    // crossIcon: {
    //   // x icon
    //   type: Boolean,
    //   required: false,
    //   default: true
    // }

    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false
    },
    closeOnNavigation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    openMenu () {
      this.$emit('openMenu')
      this.isSideBarOpen = true
      this.$refs.sideNav.style.width = (this.winWidth * 0.15) + 'px'

      if (!this.noOverlay) {
        // 讓螢幕其他部分變暗
        document.body.classList.add('bm-overlay')
      }
      if (this.right) {
        // 改成靠右側的欄位樣式
        this.$refs.sideNav.style.left = 'auto'
        this.$refs.sideNav.style.right = '0px'
      }
      this.crossIcon = !this.crossIcon
      this.burgerIcon = !this.burgerIcon

      // this.$nextTick(function() {
      //   this.$refs.sideNav.style.width = this.width
      //     ? this.width + 'px'
      //     : '300px';
      // });
    },

    closeMenu () {
      this.crossIcon = !this.crossIcon
      this.burgerIcon = !this.burgerIcon

      this.$emit('closeMenu')
      this.isSideBarOpen = false
      document.body.classList.remove('bm-overlay')
      this.$refs.sideNav.style.width = (this.winWidth * 0.05) + 'px'
    },

    closeMenuOnEsc (e) {
      e = e || window.event
      if (e.key === 'Escape' || e.keyCode === 27) {
        this.closeMenu()
      }
    },
    documentClick (e) {
      const element = this.$refs.bmBurgerButton
      let target = null
      if (e && e.target) {
        target = e.target
      }

      if (
        element &&
            element !== target &&
            !element.contains(target) &&
            !this.hasClass(target, 'bm-menu') &&
            this.isSideBarOpen &&
            !this.disableOutsideClick
      ) {
        this.closeMenu()
      } else if (
        element &&
            this.hasClass(target, 'bm-menu') &&
            this.isSideBarOpen &&
            this.closeOnNavigation
      ) {
        this.closeMenu()
      }
    },
    hasClass (element, className) {
      do {
        if (element.classList && element.classList.contains(className)) {
          return true
        }
        element = element.parentNode
      } while (element)
      return false
    }
  },
  mounted () {
    if (!this.disableEsc) {
      document.addEventListener('keyup', this.closeMenuOnEsc)
    }
  },
  created: function () {
    document.addEventListener('click', this.documentClick)
  },
  destroyed: function () {
    document.removeEventListener('keyup', this.closeMenuOnEsc)
    document.removeEventListener('click', this.documentClick)
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler (newValue, oldValue) {
        this.$nextTick(() => {
          if (!oldValue && newValue) {
            this.openMenu()
          }
          if (oldValue && !newValue) {
            this.closeMenu()
          }
        })
      }
    },
    right: {
      deep: true,
      immediate: true,
      handler (oldValue, newValue) {
        if (oldValue) {
          this.$nextTick(() => {
            this.$refs.bmBurgerButton.style.left = 'auto'
            this.$refs.bmBurgerButton.style.right = '36px'
            this.$refs.sideNav.style.left = 'auto'
            this.$refs.sideNav.style.right = '0px'
            document.querySelector('.bm-burger-button').style.left = 'auto'
            document.querySelector('.bm-burger-button').style.right = '36px'
            document.querySelector('.bm-menu').style.left = 'auto'
            document.querySelector('.bm-menu').style.right = '0px'
            document.querySelector('.cross-style').style.right = '250px'
          })
        }
        if (newValue) {
          if (
            this.$refs.bmBurgerButton.hasAttribute('style')
          ) {
            this.$refs.bmBurgerButton.removeAttribute('style')
            this.$refs.sideNav.style.right = 'auto'
            document
              .querySelector('.bm-burger-button')
              .removeAttribute('style')
            document.getElementById('sideNav').style.right = 'auto'
            document.querySelector('.cross-style').style.right = '0px'
          }
        }
      }
    },
    burgerIcon () {
      this.$emit('data', this.burgerIcon)
    }
  }
}
</script>

<style>
    html {
      height: 100%;
    }

    .logo{
      /* width: 100%; */
      text-align: center;
      position: absolute;
      top: 0;
      color: white;
      /* font-size: 25px; */
      padding-top: 20px;
      left: 30px;
    }

    .bm-burger-button {
      position: absolute;
      width: 24px;
      height: 20px;
      left: 50%;
      transform: translateX(-50%);
      top: 90px;
      cursor: pointer;
    }

    .bm-burger-button :nth-child(2){
      right: 5px;

    }
    .bm-burger-button:hover :nth-child(2){
      right: 0px;
    }
    .bm-burger-button.hidden {
      display: none;
    }
    /* 漢堡鈕顏色 */
    .bm-burger-bars {
      background-color: #FC8F19;
    }
    .line-style {
      position: absolute;
      height: 10%;
      left: 0;
      right: 0;
      transition: 0.3s ease-in;
    }
    .cross-style {
      position: absolute;
      width: 24px;
      height: 20px;
      left: 48%;
      top: 90px;
      cursor: pointer;
    }
    .bm-cross {
      background: #fff;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-cross-button.hidden {
      display: none;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 100px; /* 0 width - change this with JavaScript */
      position: absolute; /* Stay in place */
      z-index: 1000; /* Stay on top */
      background-color: rgb(47,85,151);
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      font-size: 20px;
      margin-top: 80px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
      display: block;
      width: 45%;
    }
</style>
