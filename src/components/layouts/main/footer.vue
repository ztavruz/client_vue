<template>
    <div class="footer">
        <div class="row_in_footer">
            <div class="block_in_footer">
                <div class="title_in_block">
                    <h5>Get started</h5>
                </div>
                <br>
                <div class="item_in_block"><h6>Home</h6></div>
                <div class="item_in_block"><h6>Sign up</h6></div>
                <div class="item_in_block"><h6>Download</h6></div>
            </div>
            <div class="block_in_footer">
                <div class="title_in_block">
                    <h5>About us</h5>
                </div>
                <br>
                <div class="item_in_block"><h6>Company information</h6></div>
                <div class="item_in_block"><h6>Contact us</h6></div>
                <div class="item_in_block"><h6>Reviews</h6></div>
            </div>
            <div class="block_in_footer">
                <div class="title_in_block">
                    <h5>Support</h5>
                </div>
                <br>
                <div class="item_in_block"><h6>FAQ</h6></div>
                <div class="item_in_block"><h6>Help desk</h6></div>
                <div class="item_in_block"><h6>Forums</h6></div>
            </div>
            <div class="block_in_footer">
                <div class="title_in_block">
                    <h5>Legal</h5>
                </div>
                <br>
                <div class="item_in_block"><h6>Terms of Service</h6></div>
                <div class="item_in_block"><h6>Terms of Use</h6></div>
                <div class="item_in_block"><h6>Privacy Policy</h6></div>
            </div>
        </div>
        <div class="row_in_footer row_socseti ">
            <div class="block_in_footer">
                <div class="link_in_footer img_in_footer"></div>
                <div class="link_in_footer ">
                    <img class="img_in_footer" src="https://cdn.shopify.com/s/files/1/0243/3163/files/Icon_twitter-instagram_large.png?7084502420204959006" alt="">
                </div>
                <div class="link_in_footer"></div>
            </div>
        </div>
        <div class="row_in_footer last_linear">
            <div class="row_in_footer ">
                <div class="link_in_footer "><p>© 2020 Copiright Text</p></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    /*footer*/
    .footer {
        display: flex;
        flex-direction: column;
        background: #232222;
    }

    .row_in_footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 15%;
    }

    .block_in_footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 30px;
    }

    .title_in_block {
        color: whitesmoke;
        text-align: center;
    }

    .item_in_block {
        color: #AFA4A4;
        text-align: center;
        line-height: 13px;
    }
    .row_socseti{
        border: 1px solid #000;
        margin: 0 auto;
    }

    .link_in_footer {
        margin-top: auto;
        margin-bottom: auto;

    }

    .last_linear {
        color: #AFA4A4;
        background: #0A0303;
        margin-bottom: 0px !important;
    }

    .img_in_footer{
            width: 40%;
            margin: 0 auto !important;
    }
</style>
