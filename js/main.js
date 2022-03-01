const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
    
};
const displaySearchResult = datas => {
    console.log(datas)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    

    datas.forEach(data => {
        const div = document.createElement('div');
    div.innerHTML = `
    <div class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.brand}</h5>
              <p class="card-text">${data.phone_name}</p>
            </div>
          </div>
    `;
    searchResult.appendChild(div);
    });
    
   
};

//display details