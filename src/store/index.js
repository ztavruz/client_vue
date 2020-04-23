import Vue from 'vue';
import Vuex from 'vuex';
import posts from "./modules/getPostsModule";
import users from "./modules/getUsersModules";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        posts: posts,
        users: users,
    }
})
