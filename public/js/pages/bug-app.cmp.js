import bugService from "../services/bug.service.js";
import utilService from "../services/util.service.js";

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
                    <th>Creator</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Severity</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bug in bugs">
                    <td>{{bug._id               }}</td>
                    <td>{{bug.creator.name      }}</td>
                    <td>{{bug.title             }}</td>
                    <td>{{bug.description       }}</td>
                    <td>{{bug.severity          }}</td>
                    <td>{{getDate(bug.createdAt)}}</td>
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
        },
        getDate(createdAt) {
            return utilService.getTime(createdAt)
        },
    },
}
