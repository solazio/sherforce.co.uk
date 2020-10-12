
exports.handler = async (event, context) => {
  import fetch from "node-fetch";

  const API_ENDPOINT =
    "https://fulltime-league.thefa.com/js/cs1.do?cs=758712583&random=0.6788346663396352";

  return fetch(API_ENDPOINT)
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: { tableData: data.split("= '      ")[1].split("       ';")[0] },
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};

// function extractTable() {
//   var data = [];

//   var table = document.getElementById("table");
//   for (var i = 0, row; (row = table.rows[i]); i++) {
//     for (var j = 0, col; (col = row.cells[j]); j++) {
//       data.push(col.innerText);
//     }
//   }

//   document.getElementById("result").innerHTML = JSON.stringify(data, null, 4);
// }

// Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
// fetch("/.netlify/functions/hello")
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum
