class Creduce {
  constructor() {
    this.people= [
        {name: "John", age: 30, city: "New York"},
        {name: "Jane", age: 25, city: "Los Angeles"},
        {name: "Jim", age: 35, city: "Chicago"},
        {name: "Jill", age: 28, city: "Houston"}
    ];
  }
  static get array1() {
    return [
      {name: "John", age: 30, city: "New York"},
      {name: "Jane", age: 25, city: "Los Angeles"},
      {name: "Jim", age: 35, city: "Chicago"},
      {name: "Jill", age: 28, city: "Houston"}
    ];
  }
  groupByAge= this.people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) { acc[age] = []; }
    acc[age].push(person);
    return acc;
  },{
    // previous value of accumulator
  });
  static printAcc= ()=> { console.log("acc=", this.groupByAge); }
}
export { Creduce };