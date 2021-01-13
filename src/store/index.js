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
        load(state){
            state.latestBrews = JSON.parse(localStorage.getItem("brews")) ?? [];
        },
        save(state){
            localStorage.setItem("brews", JSON.stringify(state.latestBrews));
        },
        selectBeans(state, payload){
            state.selectedBeans = payload;
        },
        selectRecipe(state, payload){
            state.selectedRecipe = payload;
            console.log(payload);
        },
        brewCoffee(state){
            const beans = state.selectedBeans;
            const recipe = state.selectedRecipe;
            //Check if faulty coffee
            console.log(beans, recipe);
            if(!beans || !recipe){
                alert("Something went wrong");
                return;
            }

            //Brew coffee
            const coffee=recipe;
            coffee.name=beans.name
            coffee.company=beans.company;
            coffee.id = coffee.name + coffee.company + coffee.type;

            //remove any previous duplicate entries
            state.latestBrews = state.latestBrews.filter(function(cof){console.log(cof.id!=coffee.id);return cof.id!=coffee.id});

            //Add coffee to top of latest brews
            state.latestBrews.unshift(coffee);
            this.commit("save")
        }
    },
    actions:{
        load(context){
            context.commit("load");
        },
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