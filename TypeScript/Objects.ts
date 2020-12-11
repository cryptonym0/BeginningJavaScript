const person = {
    name: 'Jeff',
    age: 30,
    hobbies: ['reading', 'cooking'];
}

const { name, age } = person;
console.log(name, age);

const { name: firstName } = person;
console.log(firstName);

const numbers = [0, 1, 2];
const [a] = numbers;
console.log(a);

//APis

const response1 = {
    count: 10,
    data: [{
        name: 'Luke Skywalker',
        films: ['Empire Strikes Back', 'The Force Awakens']
    }]
};
const { count, data: [{ name, films }]} = response1;
console.log(films);
console.log(films[0]);


const response2 = {
    count: 10,
    data: [{
        name: 'Luke Skywalker',
        films: ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi']
    },
    {
        name: 'Han Solo',
        films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Force Awakens']
    }]
};

response2.data.forEach(r => {
    let {name} = r;
    console.log(name);
})

    // [LOG]: "Luke Skywalker"
    // [LOG]: "Han Solo"