0x02-ES6_classes

valueOf vs toString
<p>These methods are used to convert objects to primitive values.</p>
<p>The valueOf method is a built-in JavaScript method.
It is used on objects, and it returns the primitive value of the specified object.
For most objects, the default valueOf method returns the object itself. However, for objects like Date, Number, String, and Boolean, valueOf returns a primitive value (the date, the number, the string, or the boolean value, respectively).

```
let str = new String('Hello');
console.log(str.valueOf()); // Outputs: Hello
```
<p>The toString method, on the other hand, is used to convert a value to a string. Every object in JavaScript has a toString method. The default toString method for an object returns a string in the format: [object type]. However, the toString method is often overridden in custom objects to provide a more meaningful string representation.</p>

```
let num = new Number(10);
console.log(num.toString()); // Outputs: "10"
```