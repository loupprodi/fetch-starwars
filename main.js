async function listApi(type) {
  // document.getElementById('openModal').style.top = '0';
  const response = await axios.get(`https://swapi.dev/api/${type}`);
  return response.data.results;
}

async function openModal(type) {
  let resultText = document.getElementById('resultText');
  resultText.innerHTML = '';
  const response = await listApi(type);
  if (type == 'films') {
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      resultText.innerHTML += response[i].title + '<br>';
    }
  } else {
    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      resultText.innerHTML += response[i].name + '<br>';
    }
  }
}

function closeModal() {
  // document.getElementById('closeModal').style.top = '-100%';
}
