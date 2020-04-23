<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link tag="a" to="/main" class="navbar-brand">ZTAVRUZ</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse block_links  center" id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                    <router-link to="/register" class="nav-item nav-link btn_custom_yellow">Регистрация</router-link>
                    <!--                        <router-link @click="userExist()" to="" class="nav-item nav-link btn_custom_green">Войти</router-link>-->
                    <div @click="userExist()" class="nav-item nav-link btn_custom_green">Войти</div>
                    <router-link to="/rules" class="nav-item nav-link btn_custom_red">Прочитай</router-link>
                </div>
            </div>
        </nav>

        <div class="jumbotron">
            <h1 class="display-4 title_custom">Я</h1>
            <img src="../../assets/img/views/guest/joke2.jpg" class="card-img-top img_custom" alt="asdasdas">
            <p class="lead lead_custom">
                тот самый ШАНС</p>
            <hr class="my-1">
            <p class="lead">
                <router-link to="/rules" class="nav-item nav-link btn_custom_red">Правила</router-link>
            </p>
            <hr class="my-1">
        </div>
    </div>


</template>

<script>
    export default {
        name: "Guest",
        data() {
            return {
                error: "",
            }
        },
        methods: {
            userExist() {
                let user = localStorage.getItem("userData");
                if (user) {
                    this.$router.push("/main")
                }else{
                    this.$router.push("/login")
                }
            }
        }
    }
</script>

<style scoped>
    .img_custom {
        max-width: 80%;
    }

    .title_custom {
        margin: 0.5% auto;
        text-shadow: 1px 1px 2px red, 0 0 1em #000, 0 0 0.2em red;
        color: yellowgreen;
        text-align: center;
    }

    .jumbotron {
        padding-top: 0px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*background: radial-gradient(circle, #FF00EC, #C2008D, #000000, #420F37, #000000);*/
        /*background: radial-gradient(circle, #FF00EC, #C2008D, #000000, #420F37, #000000);*/
        background: radial-gradient(circle, #000000, #560745, #560745, #560745, #000000);
        min-height: 500px !important;
        border: 3px solid greenyellow;
    }


    .lead_custom {
        font-size: 30px;
        width: 50%;
        text-align: center;
        margin: 0.5% auto !important;
        text-shadow: 1px 1px 2px red, 0 0 1em #000, 0 0 0.2em red;
        color: yellowgreen;
    }


    body {
        padding: 0;
        margin: 0;
    }

    .border {
        border: 2px solid #000 !important;
    }

    .center {
        align-content: center;
    }

    .navbar-nav {
        margin: 0 auto;
    }

    .btn_custom_green {
        border: 2px solid yellowgreen;
        background: #000000;
        color: yellowgreen !important;
        margin: 0px 10px;
        min-width: 150px !important;
        padding: 0;
        text-align: center;
        align-self: center;
        font-size: 20px !important;
        cursor: pointer;
    }

    .btn_custom_red {
        border: 2px solid yellowgreen;
        background: #000000;
        color: red !important;
        margin: 0px 10px;
        min-width: 150px !important;
        padding: 0;
        text-align: center;
        align-self: center;
        font-size: 20px !important;
    }

    .btn_custom_yellow {
        border: 2px solid yellowgreen;
        background: #000000;
        color: yellow !important;
        margin: 0px 10px;
        min-width: 150px !important;
        padding: 0;
        text-align: center;
        align-self: center;
        font-size: 20px !important;
    }

    .block_links {
        /*margin-left: -80px;*/
    }

</style>
