<template>
    <div class="black darken-1 empty-layout">
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "EmptyLayout"
    }
</script>

<style scoped>
    .empty-layout{
        background: #000 !important;
    }
</style>
