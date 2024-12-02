
           
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