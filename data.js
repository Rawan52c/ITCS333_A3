// Define the API URL with specific query parameters to fetch filtered data
const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data && data.results) {
            
            const table = document.createElement('table');
            table.classList.add('table', 'table-bordered'); 

            
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>The Programs</th>
                    <th>Nationality</th>
                    <th>Colleges</th>
                    <th>Number of students</th>
                </tr>
            `;
            table.appendChild(thead);
           
            const tbody = document.createElement('tbody');
            data.results.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.year ?? 'N/A'}</td>
                    <td>${student.semester ?? 'N/A'}</td>
                    <td>${student.the_programs ?? 'N/A'}</td>
                    <td>${student.nationality ?? 'N/A'}</td>
                    <td>${student.colleges ?? 'N/A'}</td>
                    <td>${student.number_of_students ?? 'N/A'}</td>
                `;
                tbody.appendChild(row);
            });
            table.appendChild(tbody);

                        const dataContainer = document.getElementById('data-container');
            dataContainer.appendChild(table);
        } else {
                       alert("Something went wrong, Output (data) not found");
        }
    })
    .catch(error => {
               console.error("Error fetching data:", error);
        alert("An error occurred while fetching the data.");
    });