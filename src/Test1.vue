<template>
    <!-- template下只能有一个根div -->
    <div>
    <div class="test-box">
        <h3>自定义 {{ username }}</h3>
        <button @click="changeName">修改名字</button>
    </div>
    <div>
        123
    </div>
</div>
</template>


<script>
// 默认导出，这是固定写法
export default {
//data数据源
// 注意：.vue组件中的data不能像之前一样，不能指向对象
// 注意：组件中的 data 必须是一个函数
data() {
    // 这个return出去的( )中，可以定义数据
    return {
        username: 'admin'
    }
},
methods: {
    changeName() {
        // 在组件中，this就表示当前组件的实例对象
        console.log(this);
        this.username = '名称改变'
    }
},
// 当前组件的侦听器
watch: {},
// 当前组件的计算属性
computed: {},
// 当前组件中的过滤器
filters:{}
}
</script>


<!-- 支持css语法需要加上lang="less" -->
<style lang="less">
  .test-box {
    background-color: pink;
    h3 {
        color: red;
    }
}
</style>