window.addEventListener("load", function () {
  console.log("Script loaded");
  init();
});
function init() {
  console.log("in init()");
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
  //TODO: set up event listeners for buttons, etc.
}
//TODO: display the list of wines {GET, 'api/wines'}

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
  li.textContent = wine.type;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = wine.color;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = wine.flavor;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = wine.rating;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = wine.cost;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = wine.yearProduced;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = wine.review;
  ul.appendChild(li);
  dataDiv.appendChild(ul);

  var img = document.createElement('img');
  img.src = wine.image;
  img.width = 300;
  img.height = 300;
  dataDiv.appendChild(img);
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
//xhr.open('PUT', api/winetracker/wineId);
// xhr.send(JSON.stringify(updatedWine))

// xhr.open('DELETE', api/winetracker/' + wineId);
