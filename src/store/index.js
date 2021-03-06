import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            username:"",
            isAuthorized:false,
            selectedBeans:{},
            selectedRecipe:{},
            latestBrews:[]
        }
    },
    mutations:{
        signup(_state, payload){
            console.log(payload.username, payload.password);
            fetch(`https://coffee-7411d-default-rtdb.europe-west1.firebasedatabase.app/${payload.username}/password.json`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload.password)
            });
        },
        login(state, payload){
            let password = "";
            const that = this;
            fetch(`https://coffee-7411d-default-rtdb.europe-west1.firebasedatabase.app/${payload.username}/password.json`)
            .then(function(response){
                if(response.ok)
                    return response.json();
                else
                    throw new Error("user not found");
            })
            .then(function(data){
                password = data;

                if(password && password == payload.password){
                    console.log("OKKK");
                    state.username = payload.username;
                    state.isAuthorized = true;
                    that.commit("load");
                }
                else{
                    state.username = "";
                    state.isAuthorized = false;
                }
            })
            .catch(function(error){
                console.log(error.message)
            });

            
        },
        logout(state){
            state.username = "";
            state.isAuthorized = false;
        },
        load(state){
            console.log("loading");
            //state.latestBrews = JSON.parse(localStorage.getItem("brews")) ?? [];
            fetch(`https://coffee-7411d-default-rtdb.europe-west1.firebasedatabase.app/${state.username}/brews.json`)
            .then(function(response){
                if(response.ok)
                    return response.json();
                else
                    throw new Error("bad response");
            })
            .then(function(data){
                state.latestBrews = data ?? [];
            })
            .catch(function(error){
                console.log(error.message)
                state.latestBrews = JSON.parse(localStorage.getItem("brews")) ?? [];
            });
        },
        save(state){
            localStorage.setItem("brews", JSON.stringify(state.latestBrews));
            fetch(`https://coffee-7411d-default-rtdb.europe-west1.firebasedatabase.app/${state.username}/brews.json`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state.latestBrews)
            });
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
        signup(context, payload){
            context.commit("signup", payload)
        },
        login(context, payload){
            context.commit("login", payload);
        },
        logout(context){
            context.commit("logout");
        },
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
        },
        isAuth(state){
            return state.isAuthorized;
        },
        getValidUser(){
            return function(payload){
                let password="";
                fetch(`https://coffee-7411d-default-rtdb.europe-west1.firebasedatabase.app/${payload.username}/password.json`)
                .then(function(response){
                    if(response.ok)
                        return response.json();
                    else
                        throw new Error("user not found");
                })
                .then(function(data){
                    password = data;

                    if(password){
                        return true;
                    }
                    else{
                    return false;
                    }
                })
                .catch(function(error){
                    console.log(error.message)
                    return false;
                });
            }
        }
    }
});

export default store;