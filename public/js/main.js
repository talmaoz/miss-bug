import myRouter from './routes.js'

new Vue({
    el: '#app',
    template: `
        <section>
            <h2>Cars E2E</h2>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/carApp">Cars App</router-link>
            <router-view></router-view>
        </section>
    `,
    router: myRouter

})








// import carService from './services/car.service.js'



// carService.query()
//     .then(cars => {
//         console.log(cars)
//     })
// carService.getById('c102')
//     .then(car => {
//         console.log(car)
//     })