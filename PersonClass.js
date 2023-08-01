//Write a “person” class to hold all the details

class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getEmail() {
      return this.email;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setGender(gender) {
      this.gender = gender;
    }
  
    setEmail(email) {
      this.email = email;
    }
  }
  
  // Example using Parameter:
  const person1 = new Person("Nithish", "Kumar", 20, "Male", "officialnithish13@gmail.com");
  console.log(person1.getFullName()); // Output: "Nithish Kumar"
  console.log(person1.getAge()); // Output: 20
  console.log(person1.getGender()); // Output: "Male"
  console.log(person1.getEmail()); // Output: "officialnithish13@gmail.com"
  // Example :
  person1.setFirstName("Nithya");
  person1.setLastName("Sri")
  person1.setAge(18);
  person1.setGender("Female");
  person1.setEmail("nithyasri13@gmail.com");
  console.log(person1.getFullName()); // Output: "Nithya Sri"
  console.log(person1.getAge()); // Output: 18
  console.log(person1.getGender()); // Output: "Female"
  console.log(person1.getEmail()); // Output: "nithyasri13@gmail.com"