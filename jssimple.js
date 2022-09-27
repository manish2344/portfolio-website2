const name = ["manish", "robin", "ritik", "rahul", "aman", "manish"];

function getdata(data) {
    return data.filter((value, index) => data.indexOf(value) === index)
}
console.log(getdata(name));
console.log(name);
let unique = [...new Set(name)]
console.log(unique)

const uniques = [];

name.forEach(items => {
    if (!uniques.includes(items)) {
        uniques.push(items);
    }
});

console.log(uniques);