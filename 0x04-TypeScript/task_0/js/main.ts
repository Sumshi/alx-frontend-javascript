// write an interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create two students
const student1: Student = {
    firstName: 'Sumaya',
    lastName: 'Somow',
    age: 22,
    location: 'Kenya'
};

const student2: Student = {
    firstName: 'Mike',
    lastName: 'Smith',
    age: 42,
    location: 'Los Angeles'
};

// create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "purple";
table.appendChild(tbody);

// append a new row to the table
studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const tableCell = document.createElement('td');
    const locationCell = document.createElement('td');

    tableCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tableCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    tableCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(tableCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});


document.body.appendChild(table);
