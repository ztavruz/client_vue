<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Авторизация</span>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                    :class="{invalid: !$v.email.email || ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.email.$dirty && !$v.email.required"
                >Это поле обязательно для заполнения</small>
                <small
                    class="helper-text invalid"
                    v-else-if="$v.email.$dirty && !$v.email.email"

                >Введен не коректный еmail адрес </small>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    :class="{invalid: !$v.password.minLength || ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)} "
                >
                <label for="password">Пароль</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >Пароль введи!</small>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.minLength"
                >Пароль должен быть не короче {{$v.password.$params.minLength.min}} символов! Сейчас {{password.length}}
                    введено.</small>
            </div>
            <div class="error">
                <!--                ЗДЕСЬ ОТОБРАЗИТСЯ ОШИБКА ЕСЛИ СЕРВЕР ЕЁ ПРИШЛЁТ-->
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
    import {email, required, minLength} from "vuelidate/lib/validators"
    import messages from "../../custom_utils/messages";
    // const axios = require('axios');

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                combatUrl: "https://stavrus2020.site",
                localUrl: "http://ruletka-server.com",
            }
        },
        validations: {
            email: {required, email},
            password: {required, minLength: minLength(6)},
        },
        computed: {},
        mounted() {
            let userData = localStorage.getItem("userData");

            if (userData) {
                this.$router.push("main")
            }

            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message]);
            }
        },
        methods: {

            async submitHandler() {

                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }

                let user = {
                    email: this.email,
                    password: this.password
                }

                user = JSON.stringify(user);
                let fd = new FormData();
                fd.append("user", user);

                let data = await this.axios.post(this.combatUrl + '/api/login', fd)
                    .then(function (response) {
                        let data = response.data;
                        return data;

                    })
                    .catch(function () {

                    })


                if (data.error != 0) {
                    // console.log(data.error);
                    let err = document.querySelector(".error");
                    err.innerHTML = data
                } else {

                    let err = document.querySelector(".error");
                    err.innerHTML = "";
                    let user = JSON.stringify(data.user)
                    console.log(user)
                    localStorage.setItem("userData", user);
                    this.$router.push("main");
                }

            },
        }
    }
</script>

<style scoped>
    .error {
        /*visibility: hidden;*/
        color: red;
    }
    .card-title {
        text-align: center;
    }
    .card{
        max-width: 90%;
    }

</style>
