<template>
    <div>
        <h2 class="title_vue">我是vue标题</h2>
        <p class="content_vue"> 我是内容</p>
        <div>{{ title }}</div>
        <div>加油华为加油china</div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            title:"我是vue的标题"
        }
    }
}
</script>

<style scoped>
.title_vue{
    color: red;
}
.content_vue{
    color: blue;
    font-size: 20px;
}
</style>