<template>
    <div class="left-container">
        <h5>Count 组件</h5>
        <p>count 的值是： {{ count }}</p>

        <button @click="count += 1">+1</button>

        <button @click="show">打印 this</button>
    </div>
</template>

<script>
export default {
    // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
    // 自定义属性的名字，是封装者自己定义的（只要名称合法即可）
    // props中的数据，可以直接在摸板结构中使用
    // 注意：props是只读的，不要直接修改 props 的值，否则终端会报错
    // props: ['init']
    props: {
        //自定义属性A: {配置选项}
        //自定义属性B: {配置选项}
        //自定义属性C: {配置选项}
        init: {
            // 如果外界使用 Count 组件的时候，没有传递 init 属性，则默认值生效
            default: 0,
            // init 的值类型必须是Number数字
            type: Number,
            // 必填项校验，即必传init
            required: true
        },
        

    },
    data() {
        return {
            count: this.init
        }
    },
    methods: {
        show() {
            console.log("调用了show方法");
        }
    }
}
</script>

<style lang="less" >
.left-container {
    padding: 0 20px 20px;
    background-color: orange;
    min-height: 250px;
    flex: 1;
}
</style>