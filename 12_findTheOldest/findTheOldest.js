function findTheOldest(people) {
    return people.reduce((oldest, current) => {
      const currentYear = new Date().getFullYear();
      const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
      const currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : currentYear - current.yearOfBirth;
  
      return oldestAge < currentAge ? current : oldest;
    });
}
// Do not edit below this line
module.exports = findTheOldest;
