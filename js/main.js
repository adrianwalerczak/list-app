
const form = document.getElementById('filterForm');
const userList = document.getElementById('usersList');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const sortSelect = document.getElementById('sortSelect').value;

    // Pobranie danych z API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Filtrowanie danych
    const filteredData = data.filter(user => user.name.toLowerCase().includes(searchInput));

    // Sortowanie danych
    const sortedData = sortData(filteredData, sortSelect);

    // Wyświetlanie danych na liście
    displayUsers(sortedData);
});

function sortData(data, order) {
    return data.sort((a, b) => {
        if (order === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
}

function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
    });
}
