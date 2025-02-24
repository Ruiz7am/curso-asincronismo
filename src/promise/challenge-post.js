import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "New Product",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://onmuseums.com/assets/img/news/_200x200_crop_center-center_75/squareLSD.jpeg"
  ]
}

postData (`${API}/products`, data)
  .then (response => response.json())
  .then (data => console.log(data))

  