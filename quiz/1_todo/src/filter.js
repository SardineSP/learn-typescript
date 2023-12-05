let arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'amara' },
    { gender: 'male', name: 'jordan' }
]

let filtered = arr.filter(function (item) {
    if (item.gender == 'female') {
        return item;
    }
})
console.log(filtered);