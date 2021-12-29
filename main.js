const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  {name: 'Company Five', category: 'Technology', start: 2008, end: 2014 },
  {name: 'Company Six', category: 'Finance', start: 1986, end: 2010 },
  {name: 'Company Seven', category: 'Auto', start: 1987, end: 1996 },
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2017 },
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1983 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// forEach grab all company names
companies.forEach(company => {
  console.log(company.name);
})

// filter ages 21 and over
const twentyOneAndOver = ages.filter(age => {
  return age >= 21;
})
console.log(twentyOneAndOver);

// filter and store all that has a category of retail
const retailArray = companies.filter(company => company.category === 'Retail');
console.log(retailArray);

// filter and store all companies that started in the 80's
const eightiesCompanies = companies.filter(company => company.start > 1979 && company.start < 1990)
console.log(eightiesCompanies)

// filter all companies that lasted at least 10 years
const strongCompanies = companies.filter(company => company.end - company.start >= 10)
console.log(strongCompanies)

// map and create array of all companies names
const companyNames = companies.map(company => company.name)
console.log(companyNames)

// sort companies by start year
const startedFirst = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1)
console.log(startedFirst)

// sort ages
const sortedAges = ages.sort((age1, age2) => age1 - age2)
console.log(sortedAges)

// reduce ageSum
const ageSum = ages.reduce((total, age) => total += age, 0);
console.log(ageSum)

// reduce totalYears from all companies
const totalYearsInOperation = companies.reduce((totalYears, company) => totalYears += company.end - company.start, 0);
console.log(totalYearsInOperation)