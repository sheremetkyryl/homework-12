function findBestEmployee(employees) {
    let mostProductiveEmployee = '';
    let maxTasks = 0;
  
    for (const name in employees) {
      if (employees[name] > maxTasks) {
        maxTasks = employees[name];
        mostProductiveEmployee = name;
      }
    }
  
    return mostProductiveEmployee;
}

const team = {
    Ann: 29,
    David: 35,
    Helen: 1,
    Lorence: 99
};
console.log(findBestEmployee(team));