function fetchData(){

  fetch('https://intermiami.herokuapp.com/articles')
  .then(response => response.json() )
  .then(data => displayData(data) )
  .catch(error => console.log(error));
}

function displayData(data){
  console.log(data)
  const html = data.map(article => `
      
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-preview">
              <a href="post.html?id=${article.id}">
                <h2 class="title">
                ${article.title}
                </h2>
                <h3 class="description">
                  ${article.content}
                </h3>
              </a>
              <p class="post-meta">Posted by
                <a href="post.html?id=${article.id}">${article.category == null ? "My Name" : article.category.name }</a>
                on ${article.published_at}
              </p>
            </div>
            <hr>
          </div>
        </div>
      </div>
      `
    ).join('');
  document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
}

fetchData();

function fetchOne(){
  fetch('https://intermiami.herokuapp.com/articles/')
  .then(response => response.json())
  .then(data => console.log(data));
}

 fetchOne();