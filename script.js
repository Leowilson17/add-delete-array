// 7. shift()
//  This method used to remove first element in the array
var rest = [20,30,10,'ant'];
var restore = rest . shift(); 
console.log(restore);    // return deleted element
console.log(rest); // return remaining element

// 8. unshift()
// It is used to add one or more element in beginning of an array
let test = [20,30,50,'Erumai'];
var test_case = test . unshift('ReactJS');
console.log(test_case);  // return array length
console.log(test);  // return array element

//  9. pop()
// This methods remove the last element
let remove = ['Keyboard' , 'Mouse', 'Monitor', 'CPU'];
let remove_element = remove . pop();
console.log(remove_element);  // return deleted element
let remove_element_1 = remove . pop();
console.log(remove);    // return remaining element

//  10. push()
//  This method used to add one or more element in last element
let add = ['HTML', 'CSS', 'Javascript', 'ReactJs'];
var addition =  add . push('NodeJs');
console.log (addition);  // return array length
console.log(add);  // retrun array element

// 11. concat() method
//  To display concatnate two string element
let firstLine = ["Hai!,"]
let secondLine = ["How are you? "];
var concatLine = firstLine.concat(secondLine);
console.log(concatLine);  // return length and concat array

//  12. join()
// To Join the  array Element
let string = ["Improve", "your", "communication", "skills"];
let show = string . join();  // return joined array
let show_1 = string . join('');
let show_2 = string . join('-');
console.log(show_2);  
console.log(string);  // return length and array
