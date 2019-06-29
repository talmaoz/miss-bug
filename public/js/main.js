import myRouter from './routes.js'

new Vue({
    el: '#app',
    template: `
        <section>
            <h2>Miss Bug</h2>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/bugApp">Miss Bug</router-link>
            <router-view></router-view>
        </section>
    `,
    router: myRouter

})








// import bugService from './services/bug.service.js'



// bugService.query()
//     .then(bugs => {
//         console.log(bugs)
//     })
// bugService.getById('c102')
//     .then(bug => {
//         console.log(bug)
//     })