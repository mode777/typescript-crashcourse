export interface Greeter {
    sayHello(): void;
    sayGoodbye(): void;
    surname?: string;
}

export interface User {
    name: string;
    surname?: string;
    middlename?: string;
}

export class MyBaseClass {

    sayGoodbye(){
        console.log("Goodbye");
    }
}

export class MyClass extends MyBaseClass implements Greeter  {

    constructor(meinName: string){
        super();
        this.name = meinName;
    }

    get funnyName(): string {
        return this.name + " trottel";
    }

    set funnyName(value: string) {
        this.name = value;
    }

    public name: string;

    sayGoodbye(){
        super.sayGoodbye();
        console.log("Goodbye auch von " + this.name);
    }

    sayHello(): void{
        console.log("Hello my name is " + this.name);
    }

    getUser(): User{
        return {
            name: this.name
        }
    }

    callMeLater(callback: (name: string) => void){
        callback(this.name);
    }

}