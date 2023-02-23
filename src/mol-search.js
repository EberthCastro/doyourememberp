function searchTable() {
  const input = document.getElementById("search-input");
  const filter = input.value.toLowerCase();

  const table = document.getElementById("songs-table");
  const rows = table.getElementsByTagName("tr");

  let foundSong = false;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");

    for (let j = 0; j < cells.length; j++) {
      const cellValue = cells[j].textContent.toLowerCase();
      if (cellValue.indexOf(filter) > -1) {
        foundSong = true;
        cells[j].style.display = "";
      } else {
        cells[j].style.display = "none";
      }
    }

    if (!foundSong) {
      rows[i].style.display = "none";
    }
  }
}

document.getElementById("search-button").addEventListener("click", searchTable);
