// GOOD LUCK!!
var familyMembers = [

    {
        name: 'Kalen',
        age: 37
    },

    {
        name: 'Eleen',
        age: 31
    },

    {
        name: 'Kenneth',
        age: 59
    },

    {
        name: 'Kim',
        age: 57
    },

    {
        name: 'Keara',
        age: 34
    },

    {
        name: 'Keylee',
        age: 29
    },

    {
        name: 'Rylee',
        age: 8
    },

    {
        name: 'Kennedy',
        age: 3
    },

    {
        name: 'King',
        age: 1
    }
];

console.log(familyMembers);


function familyData () {
    var oldestNow = 0;
    var oldest;
    for (var i = 0; i < familyMembers.length; i++) {
        console.log(familyMembers[i].name + ' is ' + familyMembers[i].age + ' years old.');
        if(familyMembers[i].age >= 21) {
            console.log(familyMembers[i].name + ' is old enough to drink, yay!!!');
        }
        if(familyMembers[i].age <= 21) {
            console.log(familyMembers[i].name + ' is not old enough to drink, too little!');
        }
        else if(familyMembers[i].age > oldestNow) {
            oldest = familyMembers[i];
            oldestNow = familyMembers[i].age
        }
    }
    return oldest.name + ' you are the oldest member of this family!';
}

var oldestMember = familyData();
console.log(oldestMember);
