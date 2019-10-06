function addMe(){
    var button = document.getElementById('a')
    getData();
    updateCartValue();
}

var t = localStorage.getItem('productCount');
if(t === null){
    t = 0;
    localStorage.setItem('productCount',t)
} 



function getData(){ 

var buttonClicked = event.target;
var z = buttonClicked.parentElement

// Getting Needed Things

var name = z.getElementsByClassName('title')[0].innerText;
var img = z.getElementsByTagName('img')[0].src;
var price=z.getElementsByTagName('span')[0].innerText; 

// Saving This Info

var myProduct = {
        pName : name,
        pImage: img, 
        pPrice:price,
        pQuantity: 1
    }
// Saving First Time
if(JSON.parse(localStorage.getItem('product'+ 0)) === null){
var myProduct = {
    pName : name,
    pImage: img, 
    pPrice:price,
    pQuantity: 1
}
localStorage.setItem('product'+0, JSON.stringify(myProduct));
t++;
localStorage.setItem('productCount',t)
}
// Saving Second Time
else{
    var myProduct = {
        pName : name,
        pImage: img, 
        pPrice: price,
        pQuantity: 1
    }
// Made A Flag
    var aa = true
for(var a=0; a<localStorage.getItem('productCount');a++){
    if(localStorage.getItem('product'+a) !== null && myProduct.pName === JSON.parse(localStorage.getItem('product'+a)).pName){
        var b = JSON.parse(localStorage.getItem('product'+a)).pQuantity;
        var myProduct = {
            pName : name,
            pImage: img, 
            pPrice:price,
            pQuantity: b + 1
        }
        localStorage.setItem('product'+a, JSON.stringify(myProduct));
        aa = false
        break;    
    }
    
}
// Checking Values Needed To Be Saved Or Not
    if(aa == true){
        var myProduct = {
            pName : name,
            pImage: img, 
            pPrice:price,
            pQuantity: 1
        }
        localStorage.setItem('product'+a, JSON.stringify(myProduct))
    t++;
    localStorage.setItem('productCount',t)
    }
}


}
// CART NUMBER SHOW
function updateCartValue(){
var a =document.getElementsByClassName('fixed-container')[0].getElementsByTagName('p')[0].innerHTML = `<p>${t}</p>`
}























    