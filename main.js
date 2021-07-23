//Exercise 1

var user = {};
user.name = 'John';
user.surname = 'Mike';
console.log(user.name);
user.name = 'Peter';
console.log(user.name);
user.name = null;
console.log(user.name);

//Exercise 2

var fruit = {
apple: 20,
pear: 20,
peach: 10
};

Total = 0;
Fruits = Object.getOwnPropertyNames(fruit);
for(i = 0;i<Fruits.length;i++)
 Total += fruit[Fruits[i]];
console.log(Total);
