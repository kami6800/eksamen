import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            test:"teeest"
        }
    },
    getters:{
        gettest(state){
            return state.test;
        }
    }
});

export default store;