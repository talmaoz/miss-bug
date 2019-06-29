import carService from "../services/bug.service.js";

export default {
    name: 'car-edit',
    template: `
    <section class="car-edit">
        <h1>Car Edit</h1>
        <form @submit.prevent="saveCar">
            <input v-model="car.vendor" type="text" placeholder="Car Vendor" autofocus>
            <button>Save</button>
        </form>
    </section>
    `,
    data() {
        return {
            car: { vendor: '' }
        }
    },
    created() {
        const {id} = this.$route.params;
        if (id) {
            carService.getById(id)
                .then(car => this.car = car)
        }
    },
    methods: {
        saveCar() {
            carService.save(this.car)
            .then(car => {
                console.log('Saved Car:', car);
                this.$router.push('/carApp');
            })
        }
    }

}