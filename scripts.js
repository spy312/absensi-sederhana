document.getElementById('absensi-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nama = document.getElementById('nama').value;
    const nip = document.getElementById('nip').value;
    const waktu = document.getElementById('waktu').value;
    const absensi = document.querySelector('input[name="absensi"]:checked').value;
  
    const tableBody = document.getElementById('absensi-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow(-1);
  
    const noCell = newRow.insertCell(0);
    noCell.textContent = tableBody.rows.length;
  
    const namaCell = newRow.insertCell(1);
    namaCell.textContent = nama;
  
    const nipCell = newRow.insertCell(2);
    nipCell.textContent = nip;
  
    const waktuCell = newRow.insertCell(3);
    waktuCell.textContent = waktu;
  
    const absensiCell = newRow.insertCell(4);
    absensiCell.textContent = absensi;
  
    // Reset form
    document.getElementById('absensi-form').reset();
  });