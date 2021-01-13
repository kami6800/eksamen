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
        brewCoffee(state){
            const coffee = state.selectedRecipe;
            coffee.company = state.selectedBeans;
            return coffee;
        }
    }
});

export default store;