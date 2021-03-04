 export class User {

    readonly id: string;
    private _firstName: string;
    private _lastName: string;
    public email: string;


     constructor(firstName: string, lastName: string, email: string) {
         this._firstName = firstName;
         this._lastName = lastName;
         this.email = email;
     }

     get fullName() : string {
         return '${this.firstName}  ${this.lastName}';
     }

     checkMail( email:string): boolean {
         return email === this.email;
    }


     get firstName(): string {
         return this._firstName;
     }

     get lastName(): string {
         return this._lastName;
     }
 }

 class Admin extends User{
     constructor(firstName: string, lastName: string, email: string) {
         super(firstName, lastName, email);
     }




     private getMail(): string {
         return this.email;
     }
 }

 admin = new Admin('frank', 'booh','booh@gm.ae');
user = new User('a','b','c');





