const app = Vue.createApp({
    data() {
        return {
            myName: "Diana Beatriz Tinoco",
            myAge:32,
            someImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTmGSKs1Vrtl80YlFj1e2IcKnl9sY9catUZG9-kaPKItt10Y9glsxS4ZWvmuZrBV-DjU&usqp=CAU"
        }
    },
    methods: {

        futureAge(){
            return this.myAge + 5
        },
        randomNumber(){
            return Math.random()
        }
        
    },


})

app.mount("#assignment")