/*Q1.) Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

user ={}
user.name="John"
user.surname="Smith"
console.log("Original Object: "+ user.name+"  "+user.surname )
user.name="Pete";
delete user.name;
console.log(" Object after deleting name: "+ user.name )
