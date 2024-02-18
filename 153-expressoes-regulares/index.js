function PhoneNumber (PhoneNumberString){
    const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.contryCode = fixedString.match(/(?<=\+)\d(1,3)/)
}

console.log(new PhoneNumber('+55 (22) 9 9876-5432'))
console.log(new PhoneNumber('+1 (55) as555-999-8888'))