<template>
   <div class="left-container">
      <p>Left组件</p>
      <p>msg的值是：{{ msg }}</p>
     <!-- Left组件 -->
     <!-- 注意此处传过去的是一个数字，不加：传过去的是一个字符串，如果再加v-bind的情况下想传过去一个字符串，要加引号 -->
     <MyCount :init="9"></MyCount>

     <hr>
     <button @click="send">把诗发送给Right</button>
   </div>
</template>

<script>
import bus from './eventBus.js'
export default{
   props: ['msg'],
   data() {
      return {
         str: '黑云压城城欲摧，渚清沙白鸟飞回。'
      }
   },
   methods: {
      send() {
         // 通过eventBus来发送数据
         bus.$emit('share', this.str)
      }
   }
}
</script>

<style lang="less" scoped>
   .left-container {
    margin: 0 10px;
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
p {
    color: red;
}
</style>