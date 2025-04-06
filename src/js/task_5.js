function getAllPropValues(arr, prop) {
    let values = [];
    for(const object of arr) {
        if(prop in object) {
            values.push(object[prop])
        }
    }
    return values
}

const arr = [
    { name: 'Alice', age: 22, city: 'New York' },
    { name: 'Bob', age: 28, city: 'Los Angeles' },
    { name: 'Charlie', age: 32, city: 'Chicago' }
  ];
  console.log(getAllPropValues(arr, "city"))