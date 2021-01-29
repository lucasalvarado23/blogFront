const idPost = new URL( window.location ).searchParams.get("id") || 0;

function getData(){
  fetch(`https://intermiami.herokuapp.com/articles/${idPost}`)
  .then(response => response.json() )
  .then(data => displayData(data) )
  .catch(error => console.log(error));
}

function displayData(data = {}){
  if(data){

    $$("#headerImage").style.backgroundImage = `url('${data.image.url || "img/post-bg.jpg"}')`;
    $$("#title").innerText = data.title;
    $$("#idDate").innerText = `Posted by KNX on ${data.created_at}`;
    $$("#app").innerHTML = data.content;
  }
}

function $$(search){
  return document.querySelector(search);
}

getData();
