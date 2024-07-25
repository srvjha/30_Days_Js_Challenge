
export const person = {
    name: 'Saurav Jha',
    age: 24,
    gender: 'Male',
    address: {
        city: 'Silvassa',
        state: 'Dadra and Nagar Haveli',
        country: 'India'
     },
     hobbies: ['Cricket', 'Football', 'Gaming'],

     bio(){
        return `My name is ${this.name} and I am ${this.age} years old
            and I live in ${this.address.city}, ${this.address.state}, ${this.address.country}.
            My hobbies are ${this.hobbies[0]}, ${this.hobbies[1]} and ${
            this.hobbies[2]}.`
     }
}