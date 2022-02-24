<template>
    <el-menu
            :default-active="activeIndex"
            router mode="horizontal"
            class="el-menu-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
    >
        <el-submenu v-for="item in novel2(this.$router.options.routes)" :key="item.children[0].id" :index="item.children[0].path" style="float: right">
            <template slot="title">{{username}}</template>
            <el-menu-item v-for="items in novel2_1(item.children)" :key="items.id" :index="items.path">
                {{items.name}}
            </el-menu-item>
        </el-submenu>
        <el-menu-item v-for="(item,i) in novel(this.$router.options.routes)" v-on:click="drawer = true" :id="item.children[0].path.slice(1)" :key="i" :index="item.children[0].path" style="float: right">
            {{ item.children[0].name }}
        </el-menu-item>
    </el-menu>
</template>

<script>
    import EventBus from "@/../public/EventBus"
    import {UserLoginOut} from "@/api/user";
    export default {
        data() {
            return {
                activeIndex:"3",
                username: localStorage.getItem("UserName")
            }
        },
        methods:{
            novel:function (nav) {
                return nav.filter(function (navs){
                    return navs.message && navs.children.length<2
                })
            },
            novel2:function (nav) {
                return nav.filter(function (navs){
                    return navs.message && navs.children.length>1
                })
            },
            novel2_1:function (children) {
                return children.filter(function (children2){
                    return !children2.hidden
                })
            },
            handleSelect(keyPath){
                if(keyPath.slice(1)==="Notification"){
                    this.openNotification()
                }
                if(keyPath.slice(1)==="message"){
                    this.openMessage()
                }
                if(keyPath.slice(1)==="Logout"){
                    UserLoginOut().then(response => {
                        if(response.code===0){
                            window.sessionStorage.clear();
                            this.$router.push('/login').catch(() =>{})
                            return true
                        }else {
                            this.$message.error(response.error);
                            return false
                        }
                    })
                }
            },
            openNotification() {
                EventBus.$emit('message',true)
            },
            openMessage() {
                const h = this.$createElement;
                this.$notify({
                    title: '通知测试',
                    position:'bottom-right',
                    message: h('i', { style: 'color: teal'}, '你是个大笨蛋！！！')
                });
            },
        },
    }

</script>

<style scoped>
    .el-menu-demo{
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }
    .el-menu--collapse .el-menu .el-submenu .el-menu--popup{
        min-width: 100px;
    }
</style>