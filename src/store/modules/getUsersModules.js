import axios from  'axios'

// const api = 'http://ruletka-server/api/';

export default {
    actions: {

        async GET_USERS_API(ctx)
        {
            axios.get("http://ruletka-server.com/api/user/showAll")
                .then(function (response) {
                    let users = response.data;
                    ctx.commit("UPDATE_USERS", users);
                })


        }

    },
    mutations: {

        UPDATE_USERS:(state, users) => {
            state.users = users;
        }

    },
    state: {

        users: [],
    },
    getters: {

        GET_USERS_STATE(state)
        {
            return state.users;
        }

    }
}
