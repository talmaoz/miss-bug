
import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import bugApp from './pages/bug-app.cmp.js'
import carDetails from './pages/car-details.cmp.js'
import carEdit from './pages/car-edit.cmp.js'

const routes = [
    { path: '/', component: homePage },
    { path: '/about', component: aboutPage },
    { path: '/bugApp', component: bugApp },
    { path: '/bugApp/edit/:id?', component: carEdit },
    { path: '/bugApp/:id', component: carDetails },
]

const router = new VueRouter({
    routes 
})
export default router;