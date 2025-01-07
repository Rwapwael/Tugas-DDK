function generateMultiplicationTable() {
    // Mengambil nilai input dari pengguna
    const startNumber = parseInt(document.getElementById("startNumber").value);
    const endNumber = parseInt(document.getElementById("endNumber").value);
    const tableContainer = document.getElementById("multiplicationTable");

    // Memastikan input valid
    if (isNaN(startNumber) || isNaN(endNumber) || startNumber > endNumber) {
        tableContainer.innerHTML = "<p>Mohon masukkan angka yang valid!</p>";
        return;
    }

    // Membuat tabel perkalian
    let tableHTML = "<table><tr><th>Angka</th><th>Hasil</th></tr>";

    for (let i = startNumber; i <= endNumber; i++) {
        for (let j = 1; j <= 10; j++) {
            tableHTML += `<tr><td>${i} x ${j}</td><td>${i * j}</td></tr>`;
        }
    }

    tableHTML += "</table>";
    
    // Menampilkan tabel di div
    tableContainer.innerHTML = tableHTML;
}
document.getElementById('generateTable').addEventListener('click', function() {
    // Ambil nilai input dari form
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);

    // Cek validitas input
    if (isNaN(start) || isNaN(end) || start < 1 || end < 1 || start > end) {
        document.getElementById('errorMessage').textContent = "Harap masukkan nilai yang valid.";
        return; // Jika input tidak valid, berhenti
    }

    // Kosongkan container tabel sebelumnya
    document.getElementById('tableContainer').innerHTML = '';

    // Buat elemen tabel
    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');

    // Buat header tabel
    let headerRow = document.createElement('tr');
    for (let i = start; i <= end; i++) {
        let th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    // Buat isi tabel
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement('tr');
        for (let j = start; j <= end; j++) {
            let td = document.createElement('td');
            td.textContent = i * j; // Hasil perkalian
            row.appendChild(td);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);

    // Tambahkan tabel ke container
    document.getElementById('tableContainer').appendChild(table);

    // Kosongkan pesan error jika input valid
    document.getElementById('errorMessage').textContent = '';
});
