// Paste this into console, then paste CSV into a file, then go to the next page of players and repeat until you reach players with 0% start percentage

(async () => {
  const totalPages = 7; // 7 pages * 50 players = 350
  let allData = [];

  const headers = [
    "player_name","team","position","type","blank","opp","status",
    "proj","points","oprk","start_percent","pct_rostered","plus_minus",
    "fpts","avg","last"
  ];

  for (let page = 1; page <= totalPages; page++) {
    if (page > 1) {
      // find pagination button by its innerText (page number)
      const pageButtons = Array.from(document.querySelectorAll("div.paginationNav ul li a"));
      const pageButton = pageButtons.find(a => a.textContent.trim() === String(page));

      if (pageButton) {
        const currentFirstRow = document.querySelector("table tbody tr td")?.innerText;
        pageButton.click();

        // wait until the table actually updates
        await new Promise(resolve => {
          const check = setInterval(() => {
            const newFirstRow = document.querySelector("table tbody tr td")?.innerText;
            if (newFirstRow && newFirstRow !== currentFirstRow) {
              clearInterval(check);
              resolve();
            }
          }, 500);
        });
      }
    }

    // scrape rows on this page
    const rows = document.querySelectorAll("table tbody tr");
    for (let row of rows) {
      const cols = row.querySelectorAll("td");

      const nameTeamPos = cols[0]?.innerText.split("\n").map(s => s.trim());
      const playerName = nameTeamPos?.[0] || "";
      const team = nameTeamPos?.[1] || "";
      const position = nameTeamPos?.[2] || "";

      const rest = Array.from(cols).slice(1).map(td => td.innerText.trim());

      allData.push([playerName, team, position, ...rest]);
    }
  }

  // dedupe just in case
  const seen = new Set();
  const uniqueData = allData.filter(row => {
    const key = row[0] + "|" + row[1] + "|" + row[2];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // prepend headers
  uniqueData.unshift(headers);

  // 🔑 use tabs instead of commas
  const tsv = uniqueData.map(row => row.join("\t")).join("\n");
  copy(tsv);
  console.log(`✅ TSV copied with ${uniqueData.length - 1} unique players. Paste directly into Excel!`);
})();
