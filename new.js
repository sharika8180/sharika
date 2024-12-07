// Define the data
const students = [
    { name: "Aswathi", mark: 20 },
    { name: "Fathima", mark: 25 },
    { name: "Nandhana", mark: 18 }
];

// Calculate the total of marks
const totalMarks = students.reduce((total, student) => total + student.mark, 0);

// Calculate the number of letters in each name
const nameLengths = students.map(student => ({
    name: student.name,
    length: student.name.length
}));

// Find the biggest mark
const highestMark = Math.max(...students.map(student => student.mark));

// Output the results
console.log("Total Marks:", totalMarks);
console.log("Name Lengths:", nameLengths);
console.log("Highest Mark:", highestMark);