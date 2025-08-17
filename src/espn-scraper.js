(async () => {
  let totalPages = 7; // adjust for how many pages ESPN shows
  let allData = [];
  
  // headers
  let headers = [
    "player_name","team","position","type","blank","opp","status",
    "proj","points","oprk","start_percent","pct_rostered","plus_minus",
    "fpts","avg","last"
  ];

  for (let page = 1; page <= totalPages; page++) {
    // click page button if not on first page
    if (page > 1) {
      let pageButton = document.querySelector(`div.paginationNav ul li:nth-child(${page}) a`);
      if (pageButton) {
        pageButton.click();
        await new Promise(r => setTimeout(r, 2000)); // wait for load
      }
    }

    // scrape rows
    let rows = document.querySelectorAll('table tbody tr');
    let pageData = [];
    for (let row of rows) {
      let cols = row.querySelectorAll('td');

      // first col has player name/team/pos stacked
      let nameTeamPos = cols[0]?.innerText.split("\n").map(s => s.trim());
      let playerName = nameTeamPos?.[0] || "";
      let team = nameTeamPos?.[1] || "";
      let position = nameTeamPos?.[2] || "";

      // rest of the columns
      let rest = Array.from(cols).slice(1).map(td => td.innerText.trim());

      pageData.push([playerName, team, position, ...rest]);
    }

    allData = allData.concat(pageData);
  }

  // format CSV
  allData.unshift(headers);
  let csv = allData.map(row => row.join(",")).join("\n");
  copy(csv);
  console.log("✅ CSV copied to clipboard");
})();
