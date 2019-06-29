



function query() {
    return axios.get('/api/car')
        .then(res => res.data)
}

function getById(carId) {
    return axios.get(`/api/car/${carId}`)
        .then(res => res.data)
}

function remove(carId) {
    return axios.delete(`/api/car/${carId}`)
        .then(res => res.data)
}
function save(car) {
    if (car.id) {
        return axios.put(`/api/car/${car.id}`, car)
        .then(res => res.data)
    } else {
        return axios.post(`/api/car`, car)
            .then(res => res.data)
    }

}

export default {
    query,
    getById,
    remove,
    save
}