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
            <label class="edit-bug-title">
                Title: 
                <input v-model="bug.title" type="text" placeholder="Add Title" autofocus>
            </label>
            <label>
                Description: 
                <textarea 
                    v-model="bug.description" type="text" placeholder="Add Description" rows="8" cols="72">
                </textarea>
            </label>
            <label class="edit-bug-severity">
                Severity: 
                <input
                    v-model="bug.severity" type="number" placeholder="severity" min="1" max="3"
                >
            </label>
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