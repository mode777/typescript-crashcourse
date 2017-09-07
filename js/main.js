"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myclass_1 = require("./myclass");
const variable = "Hallo Welt";
const a1 = 100.00;
const a2 = false;
function test() {
    return 0;
}
console.log(variable);
const myclass = new myclass_1.MyClass("Alex");
myclass.sayHello();
myclass.sayGoodbye();
myclass.funnyName = "test";
myclass.callMeLater((name) => {
    console.log("Thanks for the call, " + name);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQTZDO0FBRTdDLE1BQU0sUUFBUSxHQUFXLFlBQVksQ0FBQztBQUN0QyxNQUFNLEVBQUUsR0FBVyxNQUFNLENBQUM7QUFDMUIsTUFBTSxFQUFFLEdBQVksS0FBSyxDQUFDO0FBRTFCO0lBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXRCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUFDLENBQUMifQ==