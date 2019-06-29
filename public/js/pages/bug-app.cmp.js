import bugService from "../services/bug.service.js";

export default {
    name: 'bug-app',
    template: `
    <section class="bug-app">
        <h1>Bug App</h1>
        <router-link to="/bugApp/edit">Add Bug</router-link>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Vendor</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in cars">
                    <td>{{car.id}}</td>
                    <td>{{car.vendor}}</td>
                    <td>
                        <router-link :to="'/bugApp/'+car.id">Details</router-link> |
                        <router-link :to="'/bugApp/edit/'+car.id">Edit</router-link>
                        <button @click="removeCar(car.id)">x</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `,
    data() {
        return {
            cars: []
        }
    },
    created() {
        bugService.query()
            .then(cars => this.cars = cars)
    },
    methods: {
        removeCar(carId) {
            bugService.remove(carId)
                .then(res => {
                    console.log('DELETE SUCCESFULY');
                    const idx = this.cars.findIndex(car => car.id === carId)
                    this.cars.splice(idx, 1)
                    // swal()
                })
        }
    }

}