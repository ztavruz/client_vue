<template>
    <router-link tag="a" :to="linkBtn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {{nameBtn}}
    </router-link>
</template>

<script>
    export default {
        name: "nav_button",
        props: [
          "nameBtn",
            "linkBtn"
        ],
    }
</script>

<style scoped>
    a {
        position: relative;
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/
        margin: 0 auto;
        width: 180px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 6px;
        border: 2px solid greenyellow;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 900 !important;
        color: yellowgreen;
        transition: 0.5s;
        overflow: hidden;
        /*background: radial-gradient(circle, #ff0000, #c20023, #820327, #420f1d, #000000);*/
        background: radial-gradient(circle, #FF00EC, #C2008D, #820380, #420F37, #000000);


    }

    a:hover {
        color: #fff;
        transition: .5s linear;
        background-position: -200% 0, 0 0;
    }
    a span {
        position: absolute;
        width: 100%;
        height: 100%;
        /*background: rgba(161, 51, 180, 0.5);*/
        background-image: radial-gradient(circle, #ff0000, #c20023, #820327, #420f1d, #000000);
        transition: 0.5s;
        z-index: -1;
    }
    a span:nth-child(1) {
        top: -100%;
        left: -100%;
    }
    a:hover span:nth-child(1) {
        top: 0;
        left: 0;
    }
    a span:nth-child(2) {
        bottom: -100%;
        left: -100%;
    }
    a:hover span:nth-child(2) {
        bottom: 0;
        left: 0;
    }
    a span:nth-child(3) {
        top: -100%;
        right: -100%;
    }
    a:hover span:nth-child(3) {
        top: 0;
        right: 0;
    }
    a span:nth-child(4) {
        bottom: -100%;
        right: -100%;
    }
    a:hover span:nth-child(4) {
        bottom: 0;
        right: 0;
    }
</style>
