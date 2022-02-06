let employees = [
    {
        name: "Sathish K",
        age: 36,
        empId: 23164273,
        designation: "Team lead"
    },
    {
        name: "Karthik",
        age: 32,
        empId: 23164455,
        designation: "Senior developer"
    },
    {
        name: "Supriya",
        age: 26,
        empId: 24557273,
        designation: "Junior developer"
    },
    {
        name: "Arul Murugan",
        age: 29,
        empId: 25001555,
        designation: "full stack developer"
    },
    {
        name: "Rohini",
        age: 25,
        empId: 28226475,
        designation: "Engineer"
    }
]


// for loop

console.log("for loop")

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i]
    console.log(`
    Name: ${employee.name},
    Age: ${employee.age},
    ID: ${employee.empId},
    Designation: ${employee.designation}
    `)
}

// for of loop

console.log("for of loop")

for (const prop in employees) {
    let employee = employees[prop]
    console.log(`
    Name: ${employee.name},
    Age: ${employee.age},
    ID: ${employee.empId},
    Designation: ${employee.designation}
    `)
}


// for in loop 

console.log("for in loop")

for (const employee of employees) {
    console.log(`
    Name: ${employee.name},
    Age: ${employee.age},
    ID: ${employee.empId},
    Designation: ${employee.designation}
    `)
}


// for each loop

console.log("forEach loop")
employees.forEach(employee => {
    console.log(`
    Name: ${employee.name},
    Age: ${employee.age},
    ID: ${employee.empId},
    Designation: ${employee.designation}
    `)
})









//  // output

// script.js:37 for loop
// script.js:41 
//     Name: Sathish K,
//     Age: 36,
//     ID: 23164273,
//     Designation: Team lead
    
// script.js:41 
//     Name: Karthik,
//     Age: 32,
//     ID: 23164455,
//     Designation: Senior developer
    
// script.js:41 
//     Name: Supriya,
//     Age: 26,
//     ID: 24557273,
//     Designation: Junior developer
    
// script.js:41 
//     Name: Arul Murugan,
//     Age: 29,
//     ID: 25001555,
//     Designation: full stack developer
    
// script.js:41 
//     Name: Rohini,
//     Age: 25,
//     ID: 28226475,
//     Designation: Engineer
    
// script.js:51 for of loop
// script.js:55 
//     Name: Sathish K,
//     Age: 36,
//     ID: 23164273,
//     Designation: Team lead
    
// script.js:55 
//     Name: Karthik,
//     Age: 32,
//     ID: 23164455,
//     Designation: Senior developer
    
// script.js:55 
//     Name: Supriya,
//     Age: 26,
//     ID: 24557273,
//     Designation: Junior developer
    
// script.js:55 
//     Name: Arul Murugan,
//     Age: 29,
//     ID: 25001555,
//     Designation: full stack developer
    
// script.js:55 
//     Name: Rohini,
//     Age: 25,
//     ID: 28226475,
//     Designation: Engineer
    
// script.js:66 for in loop
// script.js:69 
//     Name: Sathish K,
//     Age: 36,
//     ID: 23164273,
//     Designation: Team lead
    
// script.js:69 
//     Name: Karthik,
//     Age: 32,
//     ID: 23164455,
//     Designation: Senior developer
    
// script.js:69 
//     Name: Supriya,
//     Age: 26,
//     ID: 24557273,
//     Designation: Junior developer
    
// script.js:69 
//     Name: Arul Murugan,
//     Age: 29,
//     ID: 25001555,
//     Designation: full stack developer
    
// script.js:69 
//     Name: Rohini,
//     Age: 25,
//     ID: 28226475,
//     Designation: Engineer
    
// script.js:80 forEach loop
// script.js:82 
//     Name: Sathish K,
//     Age: 36,
//     ID: 23164273,
//     Designation: Team lead
    
// script.js:82 
//     Name: Karthik,
//     Age: 32,
//     ID: 23164455,
//     Designation: Senior developer
    
// script.js:82 
//     Name: Supriya,
//     Age: 26,
//     ID: 24557273,
//     Designation: Junior developer
    
// script.js:82 
//     Name: Arul Murugan,
//     Age: 29,
//     ID: 25001555,
//     Designation: full stack developer
    
// script.js:82 
//     Name: Rohini,
//     Age: 25,
//     ID: 28226475,
//     Designation: Engineer
    
