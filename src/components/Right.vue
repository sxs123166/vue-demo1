<template>
    <div class="right-container">
        <p>Right组件</p>
        <h3>Right组件 --- {{ countRight }}</h3>
        <button @click="add">+1</button>
        <MyCount :init="6"></MyCount>

        <hr>
        <p>{{ msgFromLeft }}</p>
    </div>
  
</template>

<script>
// 1.导入eventBus模块
import bus from './eventBus.js'
export default {
    data() {
        return {
            // 子组件自己的数据，将来希望把 count 值传给父组件
            countRight: 0,
            msgFromLeft: ''
        }
    },

    created() {
        // 2. 为bus绑定自定义事件
        bus.$on('share', val => {
            console.log('在Right组件中定义的share被触发了', val);
            this.msgFromLeft = val
        })
    },
  
    methods: {
        add() {
            this.countRight += 1
            this.$emit('numchange', this.countRight)
        }
    }
}

</script>

<style>
.right-container {
    margin: 0 10px;
    padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

</style>