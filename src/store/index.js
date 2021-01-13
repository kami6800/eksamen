import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            selectedBeans:"",
            selectedRecipe:{}
        }
    },
    mutations:{
        selectBeans(state, payload){
            state.selectedBeans = payload;
        },
        selectRecipe(state, payload){
            state.selectedRecipe = payload;
            console.log(payload);
        }
    },
    actions:{
        selectBeans(context, payload){
            context.commit("selectBeans", payload);
        },
        selectRecipe(context, payload){
            context.commit("selectRecipe", payload);
        }
    },
    getters:{
        getSelectedRecipe(state){
            return state.selectedRecipe;
        }
    }
});

export default store;