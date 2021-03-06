//Declare default data product
let data = [
  {
    name: "Gaming Mouse",
    price: 1000000,
    images: 'https://cdn.shopify.com/s/files/1/0102/1870/0851/products/8435430614503_00_I0_fdd12ad1-382c-4b35-865b-a62c10e1bd86_1024x1024.jpg?v=1592493088',
    id: 1,
  },
  {
    name: "Keyboard Mechanic",
    price: 2000000,
    images: 'data:image/jpeg;base64,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',
    id: 2,
  },
  {
    name: "Asus ROG",
    price: 3000000,
    images: 'https://www.itgaleri.com/wp-content/uploads/2019/07/Asus-ROG-Strix-G531GD.jpg',
    id: 3,
  },
];

// Menampung data Cart
let cart = [];


// Generate data for view default product in product page
function generateData() {
  let result = '';

  for (let i = 0; i<data.length; i++) {
  result += `<td>
  <div class="img"><img src="${data[i].images}" alt="" /></div>
  <p><div id="productName">Product Name: <br>${data[i].name} </div>
  <p><div id="price"> Price: ${data[i].price} </div>
  <p><p><button type="submit" onclick="addCart(${data[i].id})" class="btn btn-primary">Add to cart</button>
  </td>`;
  }

  document.getElementById('container').innerHTML = result;

  return result;
}

// addCart for push product data to Cart
function addCart(id) {
  let result = data.find(element => element.id === id);

  cart.push(result); // Push ke array

  localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
}

function listCart(){
  let list = JSON.parse(localStorage.getItem('productsInCart'));
  console.log(list);
  let result2 = '';

  for (let i = 0; i<list.length; i++) {
    result2 += '<tr>';
    result2 += `<td>${(i+1)}</td>`;
    result2 += `<td style="width:125px"> <div class="img2"><img src="${list[i].images}" alt="" /></div> </td>`;
    result2 += `<td> <div id="productName">${list[i].name} </div></td>`;
    result2 += `<td> <div id="price">${list[i].price} </div> </td>`;
    result2 += `<td> <p><button type="submit" onclick="deleteCart(${i})" class="btn btn-danger">Delete Item</button> </td>`;
    result2 += '</tr>';
  }

  document.getElementById('listProduct').innerHTML = result2;

  return result2;
} 

function deleteCart(id) {
  let list = JSON.parse(localStorage.getItem("productsInCart"))
  list.splice(id, 1) // Delete dari local storage
  localStorage.setItem('productsInCart', JSON.stringify(list)); // Set local storage
  location.reload();
}
