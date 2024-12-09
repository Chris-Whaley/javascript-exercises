const findTheOldest = function(obj) {

    const oldest = obj.sort((personA, personB) => {
        const youngerPerson = personA.yearOfDeath - personA.yearOfBirth;
        const olderPerson = personB.yearOfDeath - personB.yearOfBirth;

        return youngerPerson < olderPerson ? 1 : - 1;

    });

    return oldest[0];

};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ];

// console.log (findTheOldest(people) );
// Do not edit below this line
module.exports = findTheOldest;
