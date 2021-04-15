/* Create a function "taggedTemplate" that will return a regular string (not template literal).

Use appropriate method of the function definition and needed amount of arguments.

Use all knowledge gained in the previous sections.

IMPORTANT: Input template literal may have *ANY* quantity of the expressions. 
____________________________________________________________________________________________________

1."arrayOfStrings - first parameter

2.get all arguemnts and extract all results to a seperate array, "vals"

 (quantity of the expressions in the template literal is equal to the quantity of strings in the array -1 )

3. "arrayOfStrings" . length -1 = vals.length

4. Concate elements in "arrayOStrings" and "valse" by using reduce(, "")


*/
function taggedTemplate (arrayOfStrings){/// "arrayOfStrings - first parameter
const vals = Array.from(arguments).slice(1);//get all arguemnts and extract all results to a seperate array, "vals"
return arrayOfStrings.reduce((concateStr, str, index) => {//Concate elements in "arrayOStrings" and "valse" by using reduce(, "") 
  return concateStr + str + (vals[index] !== "undefined" ? vals[index]: "");
},"") 
}

// FIRST test case
const a = 10;
const b = 5;
const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${a +
  b}`;

console.log(sum);
/* Sum of the two variables a(10) and b(5) is 15 */

// SECOND test case
const girl = "Alice";
const boy = "Bob";
const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;

console.log(friendsInfo);
/* Alice and Bob are friends! */

