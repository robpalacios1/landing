let content = document.querySelector('#content')
function traer(){
    try{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data['0'])
            content.innerHTML = `
            <p>Name: ${data['0'].name}</p>
            <p>City: ${data['0'].address.city}</p>
            <p>Address: ${data['0'].company.name}</p>
            `
        })
    } catch(e) {
      console.log('mensaje de error');
    }
}