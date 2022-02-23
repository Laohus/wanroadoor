<template>
    <el-row class="tac">
        <el-col :span="3">
            <el-menu
                    @select="handleSelect"
                    default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
            >
                <el-menu-item v-for="item in novel(this.$router.options.routes)" :key="item.children[0].id" :index="item.children[0].path">
                    <i :class="item.children[0].meta.icon" ></i>
                    <span slot="title">{{item.children[0].name}}</span>
                </el-menu-item>
                <el-submenu v-for="item in novel2(this.$router.options.routes)" :key="item.children[0].id" :index="item.children[0].id">
                    <template slot="title">
                        <i :class="item.children[0].meta.icon"></i>
                        <span>{{item.children[0].name}}</span>
                    </template>
                    <el-menu-item-group v-for="items in novel2_1(item.children)" :key="items.id" :index="items.path">
                        <el-menu-item :index="items.path">{{items.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    import EventBus from "@/../public/EventBus"
    export default {
        data() {
            return {}
        },
        methods: {
            handleSelect(keyPath) {
                const MenuItem = this.$router.options.routes
                for(const i in MenuItem){
                    const MenuChildren = MenuItem[i].children
                    if(!MenuItem[i].hidden){
                        for(const j in MenuChildren){
                            if(!MenuChildren[j].hidden && keyPath===MenuChildren[j].path){
                                const menu = {
                                    "name":MenuChildren[j].name,
                                    "path":keyPath.slice(1),
                                }
                                EventBus.$emit('menuTabs',menu)
                                break
                            }
                        }
                    }
                }
            },
            handleOpen() {},
            handleClose() {},
            novel:function (nav) {
                return nav.filter(function (navs){
                    return !navs.hidden && navs.children.length===1
                })
            },
            novel2:function (nav) {
                return nav.filter(function (navs){
                    return !navs.hidden && navs.children.length>1
                })
            },
            novel2_1:function (children) {
                return children.filter(function (children2){
                    return !children2.hidden
                })
            },
        }
    }
</script>

<style scoped>
    .tac{
        position: relative;
    }
    .el-menu-vertical-demo{
        height: 100%;
        position: fixed;
        width: 12.5%;
    }
    .el-submenu .el-menu-item{
        min-width: 0;
    }
</style>