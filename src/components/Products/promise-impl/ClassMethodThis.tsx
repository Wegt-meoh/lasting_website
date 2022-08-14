import React from "react";

export default function ClassMethodThis () {
    // class method this 指向问题
    class Animal {
        name: string = "pipixia";
    }

    class Person {
        readonly name: string = "person";
        getName () {
            console.log(this.name);
        }

        getName2 = () => {
            console.log(this.name);
        };
    }

    setTimeout(() => {
        const name: string = "setTimeout name";
        const p = new Person();
        p.getName();
        p.getName2();
        const getName = p.getName;
        const getName2 = p.getName2;
        // getName()
        getName2();
    }, 3000);

    return (
        <div>ClassMethodThis</div>
    );
}
