class Person {
    constructor
    (private readonly firstName:string,
     private lastName:string) {}

     get name(){
        return `${this.firstName} ${this.lastName}`
     }
}