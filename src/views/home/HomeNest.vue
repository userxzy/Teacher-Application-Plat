<template>
  <div class="nest">
    <div style="height: calc(100% - 120px)">
      <ul class="menu">
        <li class="menu-cell pic1" @click="test(1)"></li>
        <li class="menu-cell pic2" @click="test(2)"></li>
        <li class="menu-cell menu__placeholder"></li>
      </ul>
      <ul class="menu">
        <li class="menu-cell pic3" @click="test(3)"></li>
        <li class="menu-cell pic4" @click="test(4)"></li>
        <li class="menu-cell pic5" @click="test(5)"></li>
      </ul>
      <ul class="menu">
        <li class="menu-cell pic6" @click="test(6)"></li>
        <li class="menu-cell pic7" @click="test(7)"></li>
        <li class="menu-cell menu__placeholder"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeNest',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    test (val) {
      if (val === 6) {
        this.$router.push('/term/hands')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .nest {
    margin-top: 5%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    max-width: 710px;
    margin: 0 auto;
    padding: 0;
    -webkit-transform: translateY(34.375px);
    transform: translateY(34.375px);
  }
  .menu-cell {
    flex: 0 1 150px;
    max-width: 150px;
    height: 88.5px;
    margin: 30px 10px 30px 10px;
    position: relative;
    padding: 0.5em;
    text-align: center;
    z-index: 1;
    -webkit-transition:all 200ms;
    -moz-transition:all 200ms;
    -o-transition:all 200ms;
  }
  .pic1::before {
    background: url('~@/assets/images/first/pic1.png');
    background-size: cover;
  }
  .pic2::before {
    background: url('~@/assets/images/first/pic2.png');
    background-size: cover;
  }
  .pic3::before {
    background: url('~@/assets/images/first/pic3.png');
    background-size: cover;
  }
  .pic4::before {
    background: url('~@/assets/images/first/pic4.png');
    background-size: cover;
  }
  .pic5::before {
    background: url('~@/assets/images/first/pic5.png');
    background-size: cover;
  }
  .pic6::before {
    background: url('~@/assets/images/first/pic6.png');
    background-size: cover;
  }
  .pic7::before {
    background: url('~@/assets/images/first/pic7.png');
    background-size: cover;
  }
  .menu-cell::before {
    -webkit-transform: scale(1.055);
    transform: scale(1.055);
  }
  .menu-cell::after {
    background-color: #fff;
    opacity: 0;
    transition: opacity 350ms;
  }
  .menu-cell::before, .menu-cell::after {
    content: '';
  }
  .menu-cell:hover::before {
    -webkit-transition:all 200ms;
    -moz-transition:all 200ms;
    -o-transition:all 200ms;
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
  }
  .menu-cell:hover::after {
    -webkit-transition:all 200ms;
    -moz-transition:all 200ms;
    -o-transition:all 200ms;
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
  }
  .menu__placeholder {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
  }
  .menu-cell__image {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    border-style: none;
  }
  .menu-cell__image{
    width: 60px;
    height: 60px;
    margin-top: -10px;
  }
  .menu-cell__title {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 1.35em;
    transition: opacity 350ms;
  }
  .menu-cell::before, .menu-cell::after{
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: relative;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    -moz-box-shadow: 2px 2px 5px #333333;
    -webkit-box-shadow: 2px 2px 5px #333333;
    box-shadow: 2px 2px 5px #333333;
    z-index: -1;
  }
</style>
