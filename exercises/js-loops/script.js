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
    },
    {
        name: 'Thore',
        age: 'jshbjlashbd'
    }
];


function familyData () {
    var message;
    var intro;
    for (var i = 0; i < familyMembers.length; i++) {
        intro = familyMembers[i].name + ' is ' + familyMembers[i].age + ' years old.';
        
        if(familyMembers[i].age >= 21) {
        message = familyMembers[i].name + ' is old enough to drink, yay!!!';
        }
        
        if(familyMembers[i].age < 21) {
        message = familyMembers[i].name + ' is not old enough to drink, too little!';
        }
        else 
        {
        message ='You are too underdressed to join us at the bar this evening.';
        }
        console.log(intro);
        console.log(message);
    }

}

familyData();
var oldest = {
    name: '',
    age: 0
};

function whoIsOlder(family) {
        for (i = 0; i < family.length; i++) {
            
            if (family[i].age > oldest.age) {
                oldest = family[i]; 
            }

        }
        console.log(oldest.name + ' is ' + oldest.age + ' and the oldest member of this family.');
}

whoIsOlder(familyMembers);