// 1. Создайте объект animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Одолжите метод eat() из объекта animal для
// объекта dog, чтобы вывести сообщение о том, что собака ест.

// dog.eat(); // "Rex eating."

// const animal = {
//   name: "Rex",
//   eat(product1, product2) {
//     console.log(`${this.name} eating ${product1}, ${product2}!`);
//   },
// };

// const dog = {
//   name: "Sharik",
//   bark() {
//     console.log(`${this.name} is barking`);
//   },
//   eat: animal.eat
// };

// animal.eat.call(dog, "apple", "Salt");
// animal.eat.apply(dog, ["apple", "Salt"]);

// const fn = animal.eat.bind(dog);
// fn();

// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета,
// withdraw(amount) для снятия денег со счета и метод printBalance,
// который отобразит в консоль текущий баланс счета. Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое
// содержит название банка.

function checkBalance(balance) {
  if (!Number.isFinite(balance)) {
    throw new Error("Must be a number");
  }
  if (balance < 0) {
    throw new Error("Must be a positive number");
  }
  if ((balance * 100) % 1 !== 0) {
    throw new Error("Must be 2 digits after dot");
  }
}

class BankAccount {
  static bankName = "GBank";
  constructor(accountNumber, balance) {
    if (accountNumber.length != 10) {
      throw new Error("Wrong account number length");
    }
    checkBalance(balance);
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    checkBalance(amount);
    this.balance += amount;
  }

  withdraw(amount) {
    checkBalance(amount);
    if (this.balance < amount) {
      throw new Error(`Insufficient funds in account ${this.accountNumber}`);
    }
    this.balance -= amount;
  }

  printBalance() {
    console.log(
      `${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`
    );
  }
}

const account1 = new BankAccount("1234567890", 1000.1111111111);

// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
// account1.printBalance(); // GBank account "1234567890" balance: 1300
