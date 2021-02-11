//  Date Format in JavaScript




// Get year store it in variable called year
const year = new Date().getFullYear()
console.log(year)

// Get month and store it in variable called month
const month = new Date().getMonth()
console.log(month)

// Get Day and store it in variable called day
const day = new Date().getDate()
console.log(day)


// 1- yyyy-mm-dd
console.log(` Date is : ${year}-${month + 1 < 10 ? "0" + (month +1) : month + 1}-${day} `)

// 2- yyyy/mm/dd

console.log(` Date is : ${year}/${month + 1 < 10 ? "0" + (month +1) : month + 1}/${day} `)


// Thank's for watching plz like and subscribe

// code repo will be in the description :)

