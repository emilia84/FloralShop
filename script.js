
//Function for nav bar
function dropDown() {
  document.getElementById("myDropdown").style.display ="block"
}
  //hide products sub div
window.onclick = function(e) {
    if (!e.target.matches('.dropButton')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.style.display =="block") {
        myDropdown.style.display = "none";
      }
    }
}

//Functions for add item functionality

let removeItemButton = document.getElementById('removeItem')
removeItemButton.addEventListener('click',removeAll)

let addItemButtons = document.getElementsByClassName('additem')
for (let i = 0; i < addItemButtons.length; i++) {
  let button = addItemButtons[i]
  button.addEventListener('click', addToCartClicked)
}

let totalCount = document.getElementById("totalCount")


  //function for remove all items
function removeAll() {
 totalCount.innerText = 0 
 localStorage.clear();
 document.getElementById("removeItem").style.backgroundColor ="white"
}
  //function for when click add to cart
function addToCartClicked(event){
  let title = event.target.parentElement.getElementsByTagName('span')[0].innerText
  console.log(title)
  localStorage.setItem(event.target.parentElement.id,title)
  console.log(localStorage)
  totalCount.innerText = localStorage.length
  document.getElementById("removeItem").style.backgroundColor = "rgba(195, 42, 149, 0.336)"
}

  //make the cart appear the same accross the web page
window.onload = function(){
  totalCount.innerText = localStorage.length
  if(localStorage.length > 0){
    document.getElementById("removeItem").style.backgroundColor = "rgba(195, 42, 149, 0.336)"
  }
}