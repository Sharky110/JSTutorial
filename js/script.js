// Examples of code
"use strict"; // Using modern style
//document.write(1,2,3);

const oldCode = false;
if (oldCode) {
    const confirmResult = confirm('Are you here?'); // message box with OK and Cancel button

    if(confirmResult) {
        alert('Hello'); // message box with text
    }
    else {
        alert('I see you!');
    }
    

    let num = 4.555;
    const answer = +prompt('your age?', '12'); // message box with ansver, + is return num format

    const ff = {
        name: 'John',
        age: 24,
        isMarried: false
    };
    alert(ff);

    let ffe = ['ddd', 'ddde', 123];

    const leftBorderWidth = 1;

    const obj = {
        a: 32
    };
    obj.a = 30;

    console.log(obj);

    console.log(name);
    var name = 'Ivan';
    name = 'Alex';

    {
        var result = 50;
    }

    console.log(result);
}