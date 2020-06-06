<template>
    <div class="body">
        <app-navbar class="header"></app-navbar>
        <router-view class="router-view"></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import footer from "../components/layouts/main/footer";

    export default {
        name: "MainLayout",
        data() {
            return {}
        },
        computed: {},
        components:{
            appFooter:footer
        }
    }
</script>

<style scoped>
    .router-view {
        margin-top: 70px;
    }

    .header {
        position: fixed;
    }

</style>
