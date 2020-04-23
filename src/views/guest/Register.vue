<template>
    <form class="card auth-card" @submit.prevent="registerHandler">
        <div class="card-content card-content_custom">
            <span class="card-title">РЕГИСТРАЦИЯ</span>

            <div class="input-field">
                <input
                    id="name"
                    type="text"
                    v-model="login"

                    :class="{invalid: !$v.login.maxLength ||  ($v.login.$dirty && !$v.login.required)}"
                >
                <label for="name">Логин:</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.login.$dirty && !$v.login.required"

                >Это поле обязательно для заполнения</small>
                <small
                    class="helper-text invalid"
                    v-if="!$v.login.maxLength"

                >Логин не должен превышать {{$v.login.$params.maxLength.max}} символов, сейчас же введено
                    {{login.length}}</small>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    :class="{invalid: !$v.password.minLength || ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >Без пароля не получится зарегистрировать Вас!</small>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.minLength"
                >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов!</small>
            </div>
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
                >Почта требуется для восстановления пароля.</small>
                <small
                    class="helper-text invalid"
                    v-if="$v.email.$dirty && !$v.email.email"
                >Введен не коректный адрес</small>

            </div>
            <div class="error">
<!--                ЗДЕСЬ ОТОБРАЗИТСЯ ОШИБКА ЕСЛИ СЕРВЕР ЕЁ ПРИШЛЁТ-->
            </div>

            <p>
                <label>
                    <input
                        type="checkbox"
                        v-model="agree"
                    />
                    <span>С правилами согласен</span>
                </label>
                <br>
                <small
                    class="helper-text invalid"

                >Требуется согласие</small>
            </p>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
<!--                <a href="/login"></a>-->
                <router-link tag="a" to="/login"> Войти!</router-link>
            </p>
        </div>
    </form>
</template>

<script>
    import {required, email, minLength, maxLength} from "vuelidate/lib/validators";
    import messages from "../../custom_utils/messages";


    export default {
        name: "Register",
        data() {
            return {
                email: "",
                password: "",
                login: "",
                agree: false,
                combatUrl: "https://stavrus2020.site",
                localUrl: "http://ruletka-server.com",
                recorded: true,
                error: ""
            }
        },
        validations: {
            email: {required, email},
            password: {required, minLength: minLength(6)},
            login: {required, maxLength: maxLength(50)},
            agree: {checked: v => v}
        },
        mounted() {
            this.$message("Тестовое сообщение");
        },
        methods: {
            async registerHandler() {


                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }

                let user = {
                    email: this.email,
                    password: this.password,
                    login: this.login
                }
                user = JSON.stringify(user);
                let fd = new FormData();
                fd.append("user", user);

                let data = await this.axios.post(this.combatUrl + '/api/signup', fd)
                    .then(function (response) {
                        let data = response.data;
                        return data

                    })
                    .catch(function (error) {

                    })
                console.log(data.error)

                if (data.error != 0) {
                    let errorField = document.querySelector(".error");
                    errorField.innerHTML = data.error

                } else {
                    let errorField = document.querySelector(".error");
                    errorField.innerHTML = ""
                    let user = data.user;
                    user = JSON.stringify(user);
                    localStorage.setItem("userData", user)
                    this.$router.push("main");
                }


            }
        }
    }
</script>

<style scoped>

    .error {
        /*visibility: hidden;*/
        color: red;
    }

    .card {
        max-width: 90%;
    }

    .card-title {
        text-align: center;
    }

    .button,
    .button::before,
    .button::after,
    .button span,
    .button span::before,
    .button span::after {
        transition: all ease .5s;
    }

    .button {
        position: relative;
        display: inline-block;
        padding: 0.3em;
        margin: 1em;
        border: solid 1px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .button:hover {
        box-shadow: 0 0 5em .5em rgba(50, 50, 150, 0.5);
    }

    .button span {
        display: inline-block;
        width: 100%;
        padding: 0.6em 2em;
    }

    .button:hover span {
        background-color: #fff;
        color: #112;
    }

    .button::before,
    .button::after,
    .button span::before,
    .button span::after {
        content: '';
        position: absolute;
        border: 1px;
    }

    .button::before,
    .button span::before {
        border-style: solid none;
    }

    .button::before,
    .button span::after {
        left: 0;
        top: -0.4em;
        width: 100%;
        height: calc(100% + 0.8em);
    }

    .button::after,
    .button span::after {
        border-style: none solid;
    }

    .button::after,
    .button span::before {
        top: 0;
        left: -0.4em;
        height: 100%;
        width: calc(100% + 0.8em);
    }

    .button:hover::after,
    .button:hover span::after {
        transform: scaleY(0);
    }

    .button:hover::before,
    .button:hover span::before {
        transform: scaleX(0);
    }

    .button:hover span::after,
    .button:hover span::before {
        opacity: 0;
    }

    .card-content_custom {
        max-width: 100% !important;
    }
</style>
