<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ZTAVRUZ</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse block_links  center" id="navbarNavAltMarkup">
            <div class="navbar-nav ">

                <app-nav_button
                    v-for="item in listButton"
                    :nameBtn = "item.name"
                    :linkBtn = "item.link"

                ></app-nav_button>

            </div>
        </div>
    </nav>
</template>

<script>
    import nav_button from "./nav_button";
    export default {
        name: "navbar",
        data(){
            return {
                listButton: [
                    {
                        name: "Главная",
                        link: "/main",
                    },
                    {
                        name: "Аккаунт",
                        link: "/account",
                    },
                    {
                        name: "Правила",
                        link: "/",
                    },
                    {
                        name: "О нас ",
                        link: "/about",
                    },
                    // {
                    //     name: "Админка ",
                    //     link: "/admin",
                    // },
                ],

            }
        },
        components: {
            appNav_button: nav_button,
        }
    }
</script>

<style scoped>
    .block_links{
        justify-content: space-around !important;
    }
    .navbar{
        height: 80px!important;
    }

    .navbar-nav {
        margin: 0 auto;
        width: 70%;
        /*margin-left: 12%;*/
    }



</style>
