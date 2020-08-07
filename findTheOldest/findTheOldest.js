let findTheOldest = function(people) {
  const theDate = new Date();
  const year = theDate.getFullYear();
  
  // sort by age
  const oldest = people.sort((prev, curr) => {
    // if person is still alive set "death" to current year
    if (!curr.yearOfDeath){ 
      curr.yearOfDeath = year;
    }
    // push older ages to top, younger to bottom (1, -1)
    return ((curr.yearOfDeath - curr.yearOfBirth) > (prev.yearOfDeath - prev.yearOfBirth)) ? 1 : -1;
  });
  // first person on list will be oldest
  return oldest[0]; 
}

module.exports = findTheOldest
