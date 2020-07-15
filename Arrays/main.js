const string=['a','b','c','d'];
console.log(string[2]);
console.log(string);

console.log('push e');
string.push('e');//O(1)
console.log(string);

console.log('pop e');
string.pop();//O(1)
console.log(string);

console.log('pop d');
string.pop();//O(1)
console.log(string);

console.log('push x at beginning');
string.unshift('x');//O(n)
console.log(string);

console.log('push alien at position 2');
string.splice(2,0,"alien");
console.log(string);//O(n)

console.log('Length of string array is '+string.length);
