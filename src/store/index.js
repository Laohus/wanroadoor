import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ?localStorage.getItem('Authorization') : '',
        Timeout: localStorage.getItem('Timeout') ?localStorage.getItem('Timeout') : '',
        UserName: localStorage.getItem('UserName') ?localStorage.getItem('UserName') : ''
    },
    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            state.Timeout = user.Timeout;
            state.UserName = user.UserName;
            localStorage.setItem('Authorization', user.Authorization);
            localStorage.setItem('Timeout', user.Timeout);
            localStorage.setItem('UserName', user.UserName);
        }
    }
});

export default store;
