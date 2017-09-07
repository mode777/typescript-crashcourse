"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyBaseClass {
    sayGoodbye() {
        console.log("Goodbye");
    }
}
exports.MyBaseClass = MyBaseClass;
class MyClass extends MyBaseClass {
    constructor(meinName) {
        super();
        this.name = meinName;
    }
    get funnyName() {
        return this.name + " trottel";
    }
    set funnyName(value) {
        this.name = value;
    }
    sayGoodbye() {
        super.sayGoodbye();
        console.log("Goodbye auch von " + this.name);
    }
    sayHello() {
        console.log("Hello my name is " + this.name);
    }
    getUser() {
        return {
            name: this.name
        };
    }
    callMeLater(callback) {
        callback(this.name);
    }
}
exports.MyClass = MyClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXljbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9teWNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBWUE7SUFFSSxVQUFVO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFMRCxrQ0FLQztBQUVELGFBQXFCLFNBQVEsV0FBVztJQUVwQyxZQUFZLFFBQWdCO1FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksU0FBUztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBSUQsVUFBVTtRQUNOLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFPO1FBQ0gsTUFBTSxDQUFDO1lBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCLENBQUE7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdDO1FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUVKO0FBcENELDBCQW9DQyJ9