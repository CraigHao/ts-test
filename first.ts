class User {
  firstName: string
  lastName: string
  fullName: string

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}