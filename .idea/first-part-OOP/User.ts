 export class User {

    private _firstName: string;
    private _lastName: string;
    private _email: string;


     constructor(firstName: string, lastName: string, email: string) {
         this._firstName = firstName;
         this._lastName = lastName;
         this._email = email;
     }

     get fullName() : string {
         return '${this._firstName}  ${this.lastName}';
     }

     checkMail( email:string): boolean {
         if (email === this.email) {return true;}
         return false;
    }
 }

