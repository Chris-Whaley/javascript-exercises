const findTheOldest = function(obj) {

    let inputObject = obj;

    // loop through object adding current year if no death date
    inputObject.map((person) => {
        if (person.hasOwnProperty('yearOfDeath')) {
            person.yearOfDeath = person.yearOfDeath;
        } else {
            person.yearOfDeath = new Date().getFullYear();
        }
    })

    const oldest = inputObject.sort((personA, personB) => {
        const youngerPerson = personA.yearOfDeath - personA.yearOfBirth;
        const olderPerson = personB.yearOfDeath - personB.yearOfBirth;

        return youngerPerson < olderPerson ? 1 : - 1;

    });

    return oldest[0];

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1000,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

console.log (findTheOldest(people) );
// Do not edit below this line
module.exports = findTheOldest;
