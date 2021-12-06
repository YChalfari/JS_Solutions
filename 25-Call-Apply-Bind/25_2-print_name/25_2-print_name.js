const person = {
  firstName: "yitz",
  printName() {
    console.log(this.firstName);
  },
  waitToPrint() {
    setTimeout(this.printName.bind(this), 1000);
  },
};

person.waitToPrint();
