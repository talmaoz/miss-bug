import carService from "../services/bug.service.js";

export default {
    name: 'car-details',
    template: `
    <section class="car-details" v-if="car">
        <h1>Car Details - {{car.vendor}}</h1>
        {{car}}
       
    </section>
    `,
    data() {
        return {
            car: null
        }
    },
    created() {
        const {id} = this.$route.params
        carService.getById(id)
            .then(car => this.car = car)
    }
    
}