// this code takes two arrays of numbers and compares their differences, then adds them into one number

// var dataA = [5, 4, 3];
// var dataB = [2, 4, 5];


// console.log(dataA, dataB);

// var differences = [];
// var comparison;


// for (var i = 0; i < dataA.length; i++) {
//     comparison = dataA[i] - dataB[i];

//     comparison = Math.abs(comparison)

//     differences.push(comparison);

// }
// console.log(differences)
// differencesAdd = differences.reduce((a, b) => a + b, 0);
// console.log(differencesAdd);

// how can we get it to compare to multiple arrays? In our project, we will have more than 2 arrays.

var demo = [
    {
        name: "Blob",
        phone_number: 633,
        scores: [2, 4, 5]

    },
    {
        name: "Pam",
        phone_number: 444,
        scores: [3, 1, 2]
    }
];

var user = [
    {
        name: "Toby",
        phone_number: 310,
        scores: [5, 4, 3]
        //3, 0, 2
        //2, 3, 1
    }
]

// in our data, we'll take the scores element out.
// var userScores = req.body.scores

var userScores = [5, 4, 3];



var demoDiff = 1000;
var demoMatch = {};

//connection query:
for (var i = 0; i < demo.length; i++) {
    // console.log(demo[i].scores);
    var demoScores = demo[i].scores;
    demoScores = demoScores.split(",")
    console.log(demoScores);
    var demoCompare = 0;
    for (var j = 0; j < userScores.length; j++) {
        demoCompare += Math.abs(parseInt(userScores[j]) - parseInt(demoScores[j]));

        console.log(demoCompare);

    }
    if (demoCompare < demoDiff) {
        demoDiff = demoCompare;
        demoMatch = demo[i];
    }

    console.log(demoMatch)

}
return res.json(demoMatch);




