
import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import carApp from './pages/car-app.cmp.js'
import carDetails from './pages/car-details.cmp.js'
import carEdit from './pages/car-edit.cmp.js'

const routes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutPage },
    { path: '/carApp', component: carApp },
    { path: '/carApp/edit/:id?', component: carEdit },
    { path: '/carApp/:id', component: carDetails },
]

const router = new VueRouter({
    routes 
})
export default router;