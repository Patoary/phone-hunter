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
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    

    datas.forEach(data => {
         //console.log(data)
        const div = document.createElement('div');
    div.innerHTML = `
    <div  class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.brand}</h5>
              <p class="card-text">${data.phone_name}</p>
              <button onclick ='loadDetailsss("${data.slug}")' class="btn" >Details</button>
            </div>
          </div>
    `;
    searchResult.appendChild(div);
    });
};

//display details

const loadDetailsss = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    

    fetch(url)
        .then(res => res.json())
        .then(deta => displayPhoneDetail(deta.data));
};
const displayPhoneDetail = details => {
    console.log(details)
    const phonDdetails = document.getElementById('phone-details');
    phonDdetails.textContent = '' ;
    const div = document.createElement('div');
    div.innerHTML = `
    <img  src="${details.image}" class="card-img-top" alt="...">
        <div class="card-body text-center">
        <h2 class="card-title">Brand : ${details.brand}</h2>
        <h3 class="card-text">Name : ${details.name}</h3>
        <h3 class="card-text">Chipset : ${details.mainFeatures.chipSet}</h3>
        
        <h5 class="card-text">Release Date : ${details.releaseDate}</h5>
        
        </div>
    `;
    
    phonDdetails.appendChild(div);

// if("${details.releaseDate} == ''"){
//         document.getElementId('releaseDate').style.display = block;
//     }
};



