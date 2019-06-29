



function query() {
    return axios.get('/api/bug')
        .then(res => res.data)
}

function getById(bugId) {
    return axios.get(`/api/bug/${bugId}`)
        .then(res => res.data)
}

function remove(bugId) {
    return axios.delete(`/api/bug/${bugId}`)
        .then(res => res.data)
}
function save(bug) {
    if (bug.id) {
        return axios.put(`/api/bug/${bug.id}`, bug)
        .then(res => res.data)
    } else {
        return axios.post(`/api/bug`, bug)
            .then(res => res.data)
    }

}

export default {
    query,
    getById,
    remove,
    save
}