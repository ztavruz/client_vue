<template>
    <div>

        <div class="content">
            <div class="card">
                <div class="card-header">
                    <h4>
                        Банк: <span class="cost">100р</span>
                    </h4>
                </div>
                <img src="../../assets/img/views/ruletka/silver_1.png" class="card-img-top сhance_img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Билет: 10р</h5>
                    <p id="cart_text_10" class="card-text card-text_custom">Ты уже участник этого банка, он ещё не
                        разыгран!</p>
                    <div @click="choise()" data-sum="10" class="button1 ">ВОЙТИ</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Банк: <span class="cost">1000р</span>
                    </h4>
                </div>
                <img src="../../assets/img/views/ruletka/gold_1.png" class="card-img-top сhance_img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Билет: 50р</h5>
                    <p id="cart_text_50" class="card-text card-text_custom">Ты уже участник этого банка, он ещё не
                        разыгран!</p>
                    <div @click="choise()" data-sum="50" class="button1 ">ВОЙТИ</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Банк: <span class="cost">10 000р</span>
                    </h4>
                </div>
                <img src="../../assets/img/views/ruletka/gold_2.png" class="card-img-top сhance_img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Билет: 250р</h5>
                    <p id="cart_text_250" class="card-text card-text_custom">Ты уже участник этого банка, он ещё не
                        разыгран!</p>
                    <div @click="choise()" data-sum="250" class="button1 ">ВОЙТИ</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Банк: <span class="cost">100 000р</span>
                    </h4>
                </div>
                <img src="../../assets/img/views/ruletka/gold_3.png" class="card-img-top сhance_img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Билет: 1000р</h5>
                    <p id="cart_text_1000" class="card-text card-text_custom">Ты уже участник этого банка, он ещё не
                        разыгран!</p>
                    <div @click="choise()" data-sum="1000" class="button1 ">ВОЙТИ</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Банк: <span class="cost">1000 000р</span>
                    </h4>
                </div>
                <img src="../../assets/img/views/ruletka/gold_4.jpg" class="card-img-top сhance_img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Билет: 5000р</h5>
                    <p id="cart_text_5000" class="card-text card-text_custom">Ты уже участник этого банка, он ещё не
                        разыгран!</p>
                    <div href="" @click="choise()" data-sum="5000" class="button1">ВОЙТИ</div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Банк: <span class="cost">10 000 000р</span>
                    </h4>
                </div>
                <img src="../../assets/img/views/ruletka/gold_5.jpg" class="card-img-top сhance_img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Билет: 25 000р</h5>
                    <p id="cart_text_25000" class="card-text card-text_custom">Ты уже участник этого банка, он ещё не
                        разыгран!</p>
                    <div @click="choise()" data-sum="25000" class="button1 ">ВОЙТИ</div>
                </div>

<!--                <form id="interkassa" name="payment" method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">-->
<!--                    <input type="hidden" name="s" value="8L8hRzeXOH" />-->
<!--                    <input type="hidden" name="ik_co_id" value="5ea0ac481ae1bd2f008b4568"/>-->
<!--                    <input id="label"  type="hidden" name="ik_pm_no" value=""/>-->
<!--                    <input id="sum" type="hidden" name="ik_am" value=""/>-->
<!--                    <input type="hidden" name="ik_cur" value="RUB"/>-->
<!--                    <input type="hidden" name="ik_desc" value="БИЛЕТ в ЖИЗНЬ"/>-->
<!--                </form>-->

                <form id="yandexPay" method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                    <input id="receiver" type="hidden" name="receiver" value="410014728468421">
                    <input id="label" type="hidden" name="label" value="">
                    <input id="quickpay-form" type="hidden" name="quickpay-form" value="donate">
                    <input id="targets" type="hidden" name="targets" value="Взнос">
                    <input id="sum" type="hidden" name="sum" value="" data-type="number">
                    <input id="pc" type="radio" name="paymentType" value="PC">
                </form>
            </div>
        </div>

    </div>
</template>

<script>

    export default {

        name: "Main",
        data() {
            return {
                combatUrl: "https://stavrus2020.site",
                localUrl: "http://ruletka-server.com",
                recorded: true
            }
        },
        methods: {

            async choise() {

                let item = function (id) {
                    return document.getElementById(id);
                }

                let userData = JSON.parse(localStorage.getItem("userData"));

                let prepareFd = {
                    userId: userData.id,
                    sum: event.target.getAttribute("data-sum")
                }
                prepareFd = JSON.stringify(prepareFd);

                let fd = new FormData();
                fd.append("pay", prepareFd)

                let data = await this.axios.post(this.combatUrl + "/api/payRegister", fd, {
                    headers: {
                        'Content-Type': ' multipart/form-data',
                    }
                }).then(function (response) {
                        let data = response.data;

                        console.log(data)
                        item('label').value = data.timePoint;
                        item('sum').value = data.sum;

                    }).then(() => {
                    item('yandexPay').submit();
                    // item('interkassa').submit();
                })

            },
        }
    }
</script>

<style scoped>

    .card {
        margin: 10px 10px;
        border-radius: 15px;
        border: 2px solid chartreuse;
        color: yellowgreen;

        text-shadow: 1px 1px 2px black, 0 0 1em black;
        /*background-color: #e61f59;*/
        background-image: radial-gradient(ellipse farthest-corner at right bottom, #000 -20%, #850C90 50%, #000 120%);
    }

    .card-text {

    }

    .card-text_custom {
        font-size: 18px;
        font-weight: 600;
        color: red;
        visibility: hidden;
    }

    .button1 {
        position: relative;
        color: yellow;
        font-weight: bold !important;
        text-decoration: none;
        text-shadow: -1px -1px #000;
        user-select: none;
        padding: .8em 2em;
        outline: none;
        background-color: #000;
        background-image: linear-gradient(45deg, rgba(255, 255, 255, .0) 30%, rgba(255, 255, 255, .8), rgba(255, 255, 255, .0) 70%), radial-gradient(190% 100% at 50% 0%, rgba(255, 255, 255, .7) 0%, rgba(255, 255, 255, .5) 50%, rgba(0, 0, 0, 0) 50%);
        background-repeat: no-repeat;
        background-size: 200% 100%, auto;
        background-position: 200% 0, 0 0;
        box-shadow: rgba(0, 0, 0, .3) 0 2px 5px;
        border-radius: 5px;
        width: 50%;
        margin: 0 auto !important;
        text-align: center;
        cursor: pointer;
    }

    .button1:active {
        top: 1px;
        box-shadow: none;
    }

    .button1:hover {
        transition: .5s linear;
        background-position: -200% 0, 0 0;
    }

    .content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around !important;
        background: #000 !important;

        padding-top: 20px;
    }

    .сhance_img {
        max-width: 250px;
        border: 1px solid #000;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 10px;
        background-color: #e61f59;
        background-image: radial-gradient(ellipse farthest-corner at right bottom, #000 0%, gold 50%, #000 100%);

        background-color: #e61f59;
        background-image: radial-gradient(ellipse farthest-corner at right bottom, #000 0%, #fff 50%, #000 100%);
    }

    .card-body {

        text-align: center;
    }

    .btn:hover .pay {
        display: block;
    }

    .card-header {
        text-align: center;
        font-weight: 800 !important;
    }

    .card-header h4 {
        text-align: center;
        font-weight: 700;
    }

</style>
