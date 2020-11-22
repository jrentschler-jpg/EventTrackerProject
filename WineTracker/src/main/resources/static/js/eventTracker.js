window.addEventListener("load", function () {
  // console.log("Script loaded");
  init();
});
function init() {
  // console.log("in init()");
  document.findAllWines.getAllWines.addEventListener('click', function(e){
    e.preventDefault();
    getAllWines();
    
  });

  document.wineForm.lookup.addEventListener('click', function(e){
    e.preventDefault();
    var id = document.wineForm.id.value;
    console.log(id);
    if(!isNaN(id) && id > 0){
      getWinesById(id);
    }
  });
  document.newWineForm.lookupNewWine.addEventListener('click', function(e){
    e.preventDefault(e);
    postNewWine(e);
  });
  document.searchWinesByName.lookupByKeyword.addEventListener('click', function(e){
    e.preventDefault();
    var keyword = document.searchWinesByName.keyword.value;
    searchByKeyword(keyword);
  });
  //TODO: set up event listeners for buttons, etc.
}
//display the list of wines {GET, 'api/wines'}
function getAllWines(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/wines');
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        let wines = JSON.parse(xhr.responseText);
        displayAllWines(wines);
      }
      else {
        console.error('Wine not found');
        let divWine = document.getElementById('wineData');
        divWine.textContent = 'Wine not found';
      }
    }
  };
  xhr.send();
}
//Gets the wines by their ID
function getWinesById(id){
  console.log('getWinesById(): id=' + id);
  let xhr = new XMLHttpRequest();
  xhr.open('GET','api/wines/' + id);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 ){
      if(xhr.status === 200){
        let wine = JSON.parse(xhr.responseText);
        console.log(wine.name);
        displayWine(wine);
      }
      else {
        console.error('Wine not found');
        let div = document.getElementById('wineData');
        div.textContent = "Wine not found";
      }
    }
  };
  xhr.send();
}
//display list of all the wines
function displayAllWines(wines){
  var wineDiv = document.getElementById('wineData');
  wineDiv.textContent = '';

  var table = document.createElement('table');
  table.style.border = 'solid';
  var tableHead = document.createElement('thead');
  var tableRow = document.createElement('tr');
  var wineHeader = document.createElement('th');
  var typeHeader = document.createElement('th');
  var colorHeader = document.createElement('th');
  var flavorHeader = document.createElement('th');
  var descriptionHeader = document.createElement('th');
  var ratingHeader = document.createElement('th');
  var costHeader = document.createElement('th');
  var yearProducedHeader = document.createElement('th');
  var reviewHeader = document.createElement('th');
  var imageHeader = document.createElement('th');
  var tableBody = document.createElement('tbody');

  wineHeader.textContent = 'Name';
  typeHeader.textContent = 'Type';
  colorHeader.textContent = 'Color';
  flavorHeader.textContent = 'Flavor';
  descriptionHeader.textContent = 'Description';
  ratingHeader.textContent = 'Rating';
  costHeader.textContent = 'Cost';
  yearProducedHeader.textContent = 'Year Produced';
  reviewHeader.textContent = 'Review';
  imageHeader.textContent = 'Image';
  wineDiv.appendChild(table);

  table.appendChild(tableHead);
  tableHead.appendChild(tableRow);
  tableRow.appendChild(wineHeader);
  tableRow.appendChild(typeHeader);
  tableRow.appendChild(colorHeader);
  tableRow.appendChild(flavorHeader);
  tableRow.appendChild(descriptionHeader);
  tableRow.appendChild(ratingHeader);
  tableRow.appendChild(costHeader);
  tableRow.appendChild(yearProducedHeader);
  tableRow.appendChild(reviewHeader);
  tableRow.appendChild(imageHeader);
  table.appendChild(tableBody);

  wines.forEach((wine, i) => {
    var wineRow = document.createElement('tr');
    var wineName = document.createElement('td');
    var wineType = document.createElement('td');
    var wineColor = document.createElement('td');
    var wineFlavor = document.createElement('td');
    var wineDescription = document.createElement('td');
    var wineRating = document.createElement('td');
    var wineCost = document.createElement('td');
    var wineYearProduced = document.createElement('td');
    var wineReview = document.createElement('td');
    var wineImageBox = document.createElement('td');
    var wineImage = document.createElement('img');
    
    wineName.textContent = wine.name;
    wineType.textContent = wine.type;
    wineColor.textContent = wine.color;
    wineFlavor.textContent = wine.flavor;
    wineDescription.textContent = wine.description;
    wineRating.textContent = wine.rating;
    wineCost.textContent = wine.cost;
    wineYearProduced.textContent = wine.yearProduced;
    wineReview.textContent = wine.review;
    wineImage.src = wine.image;
    wineImage.height = 100;
    wineImageBox.appendChild(wineImage);


    wineRow.appendChild(wineName);
    wineRow.appendChild(wineType);
    wineRow.appendChild(wineColor);
    wineRow.appendChild(wineFlavor);
    wineRow.appendChild(wineDescription);
    wineRow.appendChild(wineRating);
    wineRow.appendChild(wineCost);
    wineRow.appendChild(wineYearProduced);
    wineRow.appendChild(wineReview);
    wineRow.appendChild(wineImageBox);

    tableBody.appendChild(wineRow);
  });

}
//displays the wine by id 
function displayWine(wine){
  var dataDiv = document.getElementById('wineData');
  dataDiv.textContent = '';

  let h1 = document.createElement('h1');
  h1.textContent = wine.name;
  dataDiv.appendChild(h1);

  let bq = document.createElement('blockquote');
  bq.textContent = wine.description;
  dataDiv.appendChild(bq);

  let ul = document.createElement('ul');

  let li = document.createElement('li');
  li.textContent = 'Type: ' + wine.type;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'Color:' + wine.color;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'Flavor: '+ wine.flavor;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'Rating: ' + wine.rating;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'Cost: ' + wine.cost;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'Year Produced: ' + wine.yearProduced;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'Review: ' + wine.review;
  ul.appendChild(li);
  dataDiv.appendChild(ul);

  var img = document.createElement('img');
  img.src = wine.image;
  img.width = 300;
  img.height = 300;
  dataDiv.appendChild(img);

  let br = document.createElement('br');
  dataDiv.appendChild(br);

  let btn = document.createElement('button');
  btn.innerHTML = 'Update Wine';
  // btn.addEventListener('click', wineInfo(wine));
  btn.addEventListener('click', function(e){
    e.preventDefault();
    wineInfo(wine);
    document.updateWineForm.name.focus();
  });
  dataDiv.appendChild(btn);

  document.updateWineForm.updateWine.addEventListener('click', function(e){
    e.preventDefault();
    //might have to comment out later.
    updatedWine();
  });
  let btn2 = document.createElement('button');
  btn2.innerHTML = 'Delete Wine';
  btn2.addEventListener('click', function(e){
    e.preventDefault();
    wineInfo(wine);
    // deleteWine(id);
    // document.updateWineForm.name.focus();
    document.deleteWineForm.deletedWine.value;
  });
  dataDiv.appendChild(btn2);

  document.deleteWineForm.delete.addEventListener('click', function(e){
      e.preventDefault();
    deleteWineById(wine.id);

    });
  
}
//create a new Wine 'POST';
function postNewWine(event){
  let addForm = document.newWineForm;
  let newWine = {
      name : addForm.name.value,
      type : addForm.type.value,
      color: addForm.color.value,
      flavor : addForm.flavor.value,
      description : addForm.description.value,
      rating : addForm.rating.value,
      cost : addForm.cost.value,
      yearProduced : addForm.yearProduced.value,
      review : addForm.review.value,
      image : addForm.image.value
  };
  console.log(newWine);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/wines');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 201){
        let savedWine = JSON.parse(xhr.responseText);
        displayWine(savedWine);
      }
      else {
        console.log('POST request failed');
        console.error(xhr.status + ': ' + xhr.responseText);
      }
    }
  };
    xhr.send(JSON.stringify(newWine));
    addForm.reset();
}
function wineInfo(wine){
  var updateForm = document.updateWineForm;
  updateForm.id.value = wine.id;
  updateForm.name.value = wine.name;
  updateForm.type.value = wine.type;
  updateForm.color.value = wine.color;
  updateForm.flavor.value = wine.flavor;
  updateForm.description.value = wine.description;
  updateForm.rating.value = wine.rating;
  updateForm.cost.value = wine.cost;
  updateForm.yearProduced.value = wine.yearProduced;
  updateForm.review.value = wine.review;
  updateForm.image.value = wine.image;
}
//xhr.open('PUT', api/winetracker/wineId);
// xhr.send(JSON.stringify(updatedWine))
//update the wine
function updatedWine(){
  var updateForm = document.updateWineForm;
  var updatedWine = {
    name : updateForm.name.value,
    type : updateForm.type.value,
    color : updateForm.color.value,
    flavor : updateForm.flavor.value,
    description : updateForm.description.value,
    rating : updateForm.rating.value,
    cost : updateForm.cost.value,
    yearProduced : updateForm.yearProduced.value,
    review : updateForm.review.value,
    image : updateForm.image.value
  };
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'api/wines/' + updateForm.id.value);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        var updatedWine = JSON.parse(xhr.responseText);
        displayWine(updatedWine);
      }
      else {
        console.log('PUT request failed.');
        console.log(xhr.status + ': ' + xhr.responseText);
      }
    }
  };
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(updatedWine));
  updateForm.reset();
}

// xhr.open('DELETE', api/winetracker/' + wineId);
// xhr.send();
function deleteWineById(id){
  var xhr = new XMLHttpRequest();
  // let div = document.getElementById('wineData');
  // div.textContent = '';
  xhr.open('DELETE', 'api/wines/' + id);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 204){
        var div = document.getElementById('wineData');
        div.textContent = '';
        // div.textContent = 'Wine Deleted';
        var deleted = document.createElement('h2');
        deleted.textContent = 'Wine Deleted';
        div.appendChild(deleted);
        // let wine = JSON.parse(xhr.responseText);
        // displayWine(wine);
      }
      else {
        console.error('Wine Not Found');
        // let div = document.getElementById('wineData');
        div.textContent = 'Wine Not Found';
      }
    } 
  };
  xhr.send();
}

function searchByKeyword(keyword){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/wines/search/' + keyword);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        let wine = JSON.parse(xhr.responseText);
        displayWine(wine);
      }
      else {
        console.error('Wine Not Found');
      }
    }
  };
  xhr.send();
}
