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
                <tr v-for="bug in bugs">
                    <td>{{bug.id}}</td>
                    <td>{{bug.vendor}}</td>
                    <td>
                        <router-link :to="'/bugApp/'+bug.id">Details</router-link> |
                        <router-link :to="'/bugApp/edit/'+bug.id">Edit</router-link>
                        <button @click="removeBug(bug.id)">x</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `,
    data() {
        return {
            bugs: []
        }
    },
    created() {
        bugService.query()
            .then(bugs => this.bugs = bugs)
    },
    methods: {
        removeBug(bugId) {
            bugService.remove(bugId)
                .then(res => {
                    console.log('DELETED SUCCESSFULLY');
                    const idx = this.bugs.findIndex(bug => bug.id === bugId)
                    this.bugs.splice(idx, 1)
                    // swal()
                })
        }
    }
}
