<template>
    <el-tabs v-model="activeTab" type="border-card" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabsItem"
                     :key="item.name"
                     :label="item.title"
                     :name="item.name"
                     :closable="item.closable"
                     :ref="item.ref"
        >
            <component :is="item.content"></component>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import home from '@/page/home/home'
    import automation from '@/page/interface/automation'
    import single from '@/page/interface/single'
    import user from '@/page/user/user'
    import scenarioRun from '@/page/performance/scenarioRun'
    import upload from '@/page/performance/upload'
    import report from '@/page/report/report'
    import novel from '@/page/novel/novel'
    import cueList from "@/page/performance/cueList";
    import EventBus from "@/../public/EventBus"

    export default {
        data() {
            return {
                isCollapse: false,
                activeTab: '首页',
                tabIndex: 1,
                tabsItem: [{
                    title: '首页',
                    name: '首页',
                    closable: false,
                    ref: 'tabs',
                    content: home
                }]
            }
        },
        components:{
            "home":home,
            "user":user,
            "automation":automation,
            "single":single,
            "scenarioRun":scenarioRun,
            "upload":upload,
            "report":report,
            "novel":novel,
            "cueList":cueList,
        },
        mounted() {
            EventBus.$on("menuTabs", (tabsItem) => {
                const tab = {
                    title: tabsItem.name,
                    name: tabsItem.name,
                    closable: true,
                    ref: 'tabs',
                    content: tabsItem.path
                }
                const n = this.tabsItem.findIndex(item => {
                    return item.name === tabsItem.name;
                })
                if(n===-1){
                    this.tabsItem.push(tab)
                }
                this.activeTab=tabsItem.name
            });
        },
        methods:{
            tabRemove:function (tab){
                const n = this.tabsItem.findIndex(item => {
                    return item.name === tab;
                })
                this.tabsItem.splice(n,1);
                if(this.activeTab===tab){
                    this.activeTab=this.tabsItem[this.tabsItem.length-1].name
                }
                return this.tabsItem
            }
        }
    }
</script>

<style scoped>
    .el-tabs--border-card{
        position: relative;
        left: -1%;
        top: -2%;
        width: 100%;
        height: 100%;
    }
</style>