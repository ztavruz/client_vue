<template>
    <div class="body">
        <h3 class="message" >

            В доступе отказано...<br>
            Необходима авторизация в системе

        </h3>
    </div>
</template>

<script>
    export default {
        name: "Stopped"
    }
</script>

<style scoped>
    .body{
        background: #000;
    }
    .message{
        background: #fff;
        width: 90%;
        margin: 300px auto;
        text-align: center;
        border: 5px solid red;
        padding: 20px;
    }
</style>
