import axios from 'axios'

// const api = 'http://jsonplaceholder.typicode.com/posts?_limit=5';


export default {
    actions: {
        async GET_POSTS_API(ctx){

            const res =  await fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
            const posts = await res.json();

            ctx.commit('UPDATE_POSTS', posts)

        }
    },

    mutations: {
        UPDATE_POSTS(state, posts){
            state.posts = posts
        }
    },
    state: {
        posts:[],
    },
    getters: {
        GET_POSTS_STATE(state){
            return state.posts
        }
    },

}
