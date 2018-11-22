<template>
    <div class="sidebar">
      <el-menu
        default-active="onRoutes"
        background-color="#242f42"
        text-color="#fff"
        class="el-menu-vertical-demo" theme="dark" router>

            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '/',
                        title: '菜单一'
                    },
                    {
                        icon: 'el-icon-view',
                        index: 'setting',
                        title: '菜单六'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '菜单二',
                        subs: [
                            {
                                index: 'redpackets',
                                title: '菜单'
                            },
                            {
                                index: 'objectedit',
                                title: '菜单'
                            },
                            {
                                index: 'integraldouble',
                                title: '菜单'
                            },
                            {
                                index: 'reddouble',
                                title: '菜单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '菜单三',
                        subs: [
                            {
                                index: 'redreissue',
                                title: '菜单'
                            },
                            {
                                index: 'appeal',
                                title: '菜单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '4',
                        title: '菜单四',
                        subs: [
                            {
                                index: 'winrecord',
                                title: '菜单'
                            },
                            {
                                index: 'wincount',
                                title: '菜单'
                            },
                            {
                                index: 'integraldetail',
                                title: '菜单'
                            },
                            {
                                index: 'memberdetail',
                                title: '菜单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'member',
                        title: '菜单五'
                    },
                    
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 190px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    .el-menu-item{
      color: #fff;
    }
    .el-menu-item, .el-submenu__title{
      color: #fff;
    }
    .el-menu{
      background: #242f42;
    }
    .el-menu-item{
      background: #242f42;
    }
    .el-submenu__title:hover{
      color:#434c57;
    }
    .el-menu{
      overflow: hidden;
    }
</style>
