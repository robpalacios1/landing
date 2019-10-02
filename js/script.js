let carousel = document.querySelector('#carousel');
const getInitialData = async () => {
  let BASE_URL = 'https://jsonplaceholder.typicode.com';
  try {
    let [reqUsers,reqPost ] = await Promise.all([
      fetch(`${BASE_URL}/users`),
      fetch(`${BASE_URL}/posts`)
    ]);

    let [dataUsers, dataPost] = await Promise.all([
      reqUsers.json(),
      reqPost.json()
    ]);
    
    let html = '';
    
    dataUsers.some((element, index) => {
      var active = index == 0 ? 'active' : '';
      html += `
        <div class="carousel-item ${active}">
          <img class="user" src="./images/person_${index+1}.jpg" alt="${element.name}">
          <h5>${element.name}</h5>
          <p class="placework">${element.company.name}</p>
          <p class="testimonial">"${dataPost[index].title}"</p>
        </div>
      `;
      console.log(html)
      return index == 3;
    });

    carousel.innerHTML = html;

  } catch(e) {
    console.log('error al traer datos');
  }
}

getInitialData()