console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("response: ", response);
  console.log("data: ", data);
  console.log(data.results[2]);
}
fetchData();
