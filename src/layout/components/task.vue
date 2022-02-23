<template>
    <el-drawer
            title="我是哈哈"
            :visible.sync="drawer"
            :modal=true
            :modal-append-to-body=false
            :with-header="false">
        <span>任务测试</span>
    </el-drawer>
</template>

<script>
    import EventBus from "@/../public/EventBus"
    export default {
        name: "task",
        data() {
            return {
                drawer: false,
            };
        },
        mounted() {
            EventBus.$on("message", (messages) => {
                this.drawer = messages
            });
        }
    }
</script>

<style scoped>

</style>