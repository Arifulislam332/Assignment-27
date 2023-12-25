"use strict";

/* class Student {
  constructor(firstName, lastName, gender, bithYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.bithYear = bithYear;
  }
  studentFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getGender() {
    return this.gender;
  }
  getAge() {
    return new Date().getFullYear() - this.bithYear;
  }
}

class info extends Student {
  constructor(firstName, lastName, gender, bithYear, level, contact, idNum) {
    super(firstName, lastName, gender, bithYear);
    this.level = level;
    this.contact = contact;
    this.idNum = idNum;
  }
  getLevel() {
    return this.level;
  }
  getContact() {
    return this.contact;
  }
  getIdNum() {
    return this.idNum;
  }
}

const student1 = new Student("Abir", "Ahmed", "Male", 2005);

const student2 = new info("Ariful", "Islam", "Male", 2004, "HSC", "019xxxx999");

console.log(student1.getAge());
console.log(student1.studentFullName());
console.log(
  `Iam ${student1.studentFullName()}(${student1.getGender()}).And Iam ${student1.getAge()} years old`
);

console.log(`
Name: ${student2.studentFullName()}
Academic Year: ${student2.getLevel()}
Age: ${student2.getAge()}
Gender: ${student2.getGender()}
Contact: ${student2.getContact()}`); */

const nameInput = document.querySelector(".name__input");
const amountInput = document.querySelector(".amount__input");
const btnAdd = document.querySelector(".btn__add");
const donarNames = document.querySelector(".donars__container");

class FundCamp {
  name;
  amount;
  li;
  constructor() {
    btnAdd.addEventListener("click", this.getDonation.bind(this));
  }

  getDonation() {
    this.name = nameInput.value;
    this.amount = amountInput.value;

    if (!this.name || !this.amount) {
      return alert("Please valid input.");
    }

    this.createList(this.name, this.amount);
  }

  createList(name, amount) {
    this.li = document.createElement("li");
    this.li.textContent = `${name} - ${amount} taka`;

    this.appendItem(this.li);
  }
  appendItem(item) {
    donarNames.append(item);
    nameInput.value = "";
    amountInput.value = "";
  }
}
new FundCamp();
