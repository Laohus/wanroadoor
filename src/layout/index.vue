<template>
    <el-container>
        <el-header>
            <TopMenu>
            </TopMenu>>
        </el-header>
        <el-container>
            <el-aside style="width: 12.5%">
                <LeftMenu></LeftMenu>
            </el-aside>
                <el-main>
                    <PageHeader></PageHeader>
                    <task></task>
                </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import topMenu from "@/layout/components/topmenu";
    import leftMenu from "@/layout/components/leftmenu";
    import pageHeader from "@/layout/components/pageheader";
    import task from "@/layout/components/task";
    export default {
        name:"layout",
        components:{
            "TopMenu": topMenu,
            "LeftMenu": leftMenu,
            "PageHeader": pageHeader,
            "task": task
        },
    }
</script>

<style scoped>
    .el-header{
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }
    .el-aside{
        height: 100%;
        position: fixed;
        width: 12.5%;
    }
    .el-container{
        width: 100%;
        height: 100%;
        left: 0;
        top: 60px;
        position: fixed;
    }
    .el-aside{
        height: 100%;
        width: 12.5%;
        left: 0;
        top: 60px;
    }
    .el-main{
        width: 100%;
        height: 100%;
        left: 12.5%;
        top: 60px;
        position: fixed;
    }
</style>