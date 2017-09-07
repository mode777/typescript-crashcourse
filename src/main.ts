import { MyClass, Greeter } from "./myclass";

const variable: string = "Hallo Welt";
const a1: number = 100.00;
const a2: boolean = false;

function test(): number {
    return 0;
}

console.log(variable);

const myclass = new MyClass("Alex");
myclass.sayHello();
myclass.sayGoodbye();
myclass.funnyName = "test";
myclass.callMeLater((name) =>  {
    console.log("Thanks for the call, " + name)
});

