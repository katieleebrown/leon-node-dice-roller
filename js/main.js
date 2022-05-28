document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {

  // const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api`)
  //?student=${userName} query parameter for future use
  const data = await res.json()

  console.log(data);
  document.querySelector("#diceOutcome").textContent = data.name
}