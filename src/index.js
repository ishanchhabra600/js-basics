let ishanObj = {
  firstName: "ishan",
  lastName: "chhabra",
  age: 27,
  isGraduate: true,
  getIshanDetails: function() {
    console.log(this);
    console.log(this.firstName, this.lastName);
    console.log("person" + this.firstName);
    //console.log(`person ${this.age}`)
  }
};
//ishanObj.getIshanDetails()

ishanObj.getIshanDetails();

function getIshanAge() {
  return ishanObj.age;
}
console.log(`person ${getIshanAge()}`);
