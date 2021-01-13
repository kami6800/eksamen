import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            selectedBeans:{},
            selectedRecipe:{},
            latestBrews:[]
        }
    },
    mutations:{
        selectBeans(state, payload){
            state.selectedBeans = payload;
        },
        selectRecipe(state, payload){
            state.selectedRecipe = payload;
            console.log(payload);
        },
        brewCoffee(state){
            const coffee=state.selectedRecipe;
            coffee.name=state.selectedBeans.name
            coffee.company=state.selectedBeans.company;
            coffee.id = coffee.name + coffee.company + coffee.type;
            console.log(coffee);
            state.latestBrews.unshift(coffee);
        }
    },
    actions:{
        selectBeans(context, payload){
            context.commit("selectBeans", payload);
        },
        selectRecipe(context, payload){
            context.commit("selectRecipe", payload);
        },
        brewCoffee(context){
            context.commit("brewCoffee");
        }
    },
    getters:{
        getSelectedRecipe(state){
            return state.selectedRecipe;
        },
        getLatestBrews(state){
            return state.latestBrews;
        }
    }
});

export default store;