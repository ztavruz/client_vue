<template>
    <div class="body">
        <app-navbar></app-navbar>
        <div class="content">
            <div class="left_content">
                <div class=" btn-group dropright menu_list">
                    <!--  кнопка начало-->
                    <div class="btn-group dropright">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            Пользователи
                        </button>
                        <div class="dropdown-menu">
                            <div class="list-group">
                                <button @click="showAllUsers()" type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                            </div>
                        </div>
                    </div>
                    <!--  кнопка конец-->
                    <!--  кнопка начало-->
                    <div class="btn-group dropright">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            Новости
                        </button>
                        <div class="dropdown-menu">
                            <div class="list-group">
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                            </div>
                        </div>
                    </div>
                    <!--  кнопка конец-->
                    <!--  кнопка начало-->
                    <div class="btn-group dropright">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                            Касса
                        </button>
                        <div class="dropdown-menu">
                            <div class="list-group">
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Показать всех</button>
                            </div>
                        </div>
                    </div>
                    <!--  кнопка конец-->
                </div>
            </div>
            <div class="right_content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminLayout",
        data() {
            return {}
        },
        computed: {},
        methods:{
            showAllUsers(){
                this.axios("http://ruletka-server.com/api/admin/getAllUsers")
                .then(function (response) {
                    console.log(response);
                })
            }
        }
    }
</script>

<style scoped>
    .body {

    }

    .content {
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        min-height: 850px;
    }

    .left_content {
        display: flex;
        flex-direction: row;
        width: 20%;
        /*height: 100%;*/
        justify-content: space-between;
        border: 5px solid yellowgreen;
    }

    .menu_list {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #000;
        justify-content: flex-start;
    }

    .link_a {
        text-align: center;
    }


    .right_content {
        width: 80%;
    }
    .dropdown-toggle{
        height: 70px;
        min-width: 20%;
    }

</style>
