<template>
  <div id="app">
    <h1>App根组件</h1>
    <p>{{ countFromSon }}</p>
    <hr>

    <button @click="flag = !flag">Tuggle flag</button>
    <Test info="你好" v-if="flag"></Test>
    <hr>

    <div class="box">
      <!-- 渲染Left和Right组件 -->
      <!--3. 以标签形式，使用注册好的组件 -->
      <Left :msg="message">Left组件</Left>
     <Right @numchange="getNewCount">Right组件 {{ countFromSon }}</Right>
    </div>


  </div>

  

</template>


<script>

// 1.导入需要使用的.vue组件
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      flag: true,
      message: 'hello',
      userinfo: {name: 'wsc', age: 18},
      //定义 countFromSon接收子组件传递过来的值
      countFromSon: 0,
    }
  },
  methods: {
    //获取子组件传递过来的数据
    getNewCount(val) {
      console.log('numchange 事件被触发了', val);
      this.countFromSon = val
    }
  },
  name: 'App',
  //注册组件
  components: {
    // 标准形式应为：  'Left': 'Left'
    // 若属性名和属性值一样，可简写为如下形式：
    Left,
    Right
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  display: flex;
}
</style>
