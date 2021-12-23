const app = Vue.createApp({

data() {
    return {
        confirmedUserInputKeyDown: "", 
        confirmedUserInputEnter: ""
    }
},
methods: {

    showAlert(){
        retr alert("i've been clicked!")
    },

    userInput(event){
        this.confirmedUserInputKeyDown = event.target.value
        
    }, 

    userInputEnter(event){
        this.confirmedUserInputEnter = event.target.value
    }


},

})

app.mount("#assignment")