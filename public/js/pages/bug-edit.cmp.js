import bugService from "../services/bug.service.js";
import utilService from "../services/util.service.js";

export default {
    name: 'bug-edit',
    template: `
    <section class="bug-edit" v-if="bug._id">
        <h1>Bug Edit</h1>
        <h2>Bug Id: {{bug._id}}</h2>
        <h2>Bug Creator: {{bug.creator.name}}</h2>
        <h2>Created at: {{getDate(bug.createdAt)}}</h2>
        <form @submit.prevent="saveBug">
            <input v-model="bug.title" type="text" placeholder="Add Title" autofocus>
            <input v-model="bug.description" type="text" placeholder="Add Description" >
            <input v-model="bug.severity" type="number" placeholder="severity" >
            <button>Save</button>
        </form>
    </section>
    `,
    data() {
        return {
            bug: {}
        }
    },
    created() {
        const {id} = this.$route.params;
        if (id) {
            bugService.getById(id)
                .then(bug => {
                    console.log('bug in bug-edit: ', bug)
                    return this.bug = bug
                })
        }
    },
    methods: {
        saveBug() {
            bugService.save(this.bug)
            .then(bug => {
                console.log('Saved Bug:', bug);
                this.$router.push('/bugApp');
            })
        },
        getDate(createdAt) {
            return utilService.getTime(createdAt)
        },
    }

}