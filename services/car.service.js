const fs = require('fs') 


module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

var cars = _createCars();

function query() {
    return Promise.resolve(cars);
}

function add(car) {
    car.id = _makeId()
    cars.push(car)
    _saveCarsToFile();
    return Promise.resolve(car)
}

function update(car) {
    var carIdx = cars.findIndex(currCar => currCar.id === car.id);
    cars.splice(carIdx, 1, car);
    _saveCarsToFile();
    return Promise.resolve(car)
}

function getById(id) {
    var car = cars.find(car => car.id === id);
    if (car)  return Promise.resolve(car);
    else return Promise.reject('Unknown Car');
}

function remove(id) {
    var carIdx = cars.findIndex(car => car.id === id);
    cars.splice(carIdx, 1)
    _saveCarsToFile();
    return Promise.resolve();
}

function _makeId(length=3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _createCars() {
    cars = require('../data/car.json')
    if (cars && cars.length) return cars;
    return ['Fiag', 'Subali'].map(_createCar)
}

function _createCar(vendor) {
    return {
        id: _makeId(),
        vendor,
    }
}

function _saveCarsToFile() {
    fs.writeFileSync('data/car.json', JSON.stringify(cars, null, 2));
}
