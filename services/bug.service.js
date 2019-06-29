const fs = require('fs') 


module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

var bugs = _createBugs();

function query() {
    return Promise.resolve(bugs);
}

function add(bug) {
    bug._id = _makeId()
    bugs.push(bug)
    _saveBugsToFile();
    return Promise.resolve(bug)
}

function update(bug) {
    var bugIdx = bugs.findIndex(currbug => currbug._id === bug._id);
    bugs.splice(bugIdx, 1, bug);
    _saveBugsToFile();
    return Promise.resolve(bug)
}

function getById(id) {
    var bug = bugs.find(bug => bug._id === id);
    if (bug)  return Promise.resolve(bug);
    else return Promise.reject('Unknown bug');
}

function remove(id) {
    var bugIdx = bugs.findIndex(bug => bug._id === id);
    bugs.splice(bugIdx, 1)
    _saveBugsToFile();
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

function _createBugs() {
    bugs = require('../data/bugs.json')
    if (bugs && bugs.length) return bugs;
    return ['Fiag', 'Subali'].map(_createBug)
}

function _createBug(vendor) {
    return {
        _id: _makeId(),
        vendor,
    }
}

function _saveBugsToFile() {
    fs.writeFileSync('data/bugs.json', JSON.stringify(bugs, null, 2));
}
