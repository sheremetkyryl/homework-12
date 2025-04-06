function countProps(obj) {
    return Object.keys(obj).length;
}
const cat = {
    name: "Мурчик",
    age: 3,
    isCute: true
  };

console.log(countProps(cat))