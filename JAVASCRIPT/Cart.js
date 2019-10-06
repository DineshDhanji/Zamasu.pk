function myTotal(){
    var p = document.getElementsByClassName('cart-item-price')
    var total = 0;
    if(p.length == 0){
        var d = document.getElementsByClassName('total')[0].innerHTML = `<h4>Rs.${total}</h4>`
    } else{
        for (var i=0; i < p.length; i++ ){
    
        // getting prices 
        var a = p[i].innerText.replace('Rs.', '')
        a = parseFloat(a);
        
        // getting quntities
        var q = document.getElementsByClassName('cart-item-quantity')[i].childNodes[3].innerText
        var w = a*q
        total = total + w 
        
        // updating total
        var d = document.getElementsByClassName('total')[0].innerHTML = `<h4>Rs.${total}</h4>`
        }
    }
    }
    // // GETTING DATA 
    for(var i=0;i<=localStorage.getItem('productCount');i++){
        if (JSON.parse(localStorage.getItem("product"+i)) === null){
    }else{
        myFunction()
        }
    }
        
    function myFunction(){
        
        // getting data from LocalStorage 
        var title = JSON.parse(localStorage.getItem('product'+i)).pName
        var img = JSON.parse(localStorage.getItem('product'+i)).pImage
        var price = JSON.parse(localStorage.getItem('product'+i)).pPrice
        var quan = JSON.parse(localStorage.getItem('product'+i)).pQuantity
        
        // creating and updating elements
        var cartItems = document.createElement('div');
        var cartCont = document.getElementsByClassName('cart-container')[0];
        var cartMaal = `
        <div class="row cart-item">
        <span class="cart-item-img col-lg-4 col-md-4 col-sm-4 col-4">
            <img src="${img}" class="item-img"><br/>
            <span class="aa"style="font-size: 19px;">${title}</span>
            </span>
        <span class="cart-item-price col-lg-4 col-md-4 col-sm-4 col-4"><span>${price}</span></span>
        <span class="cart-item-quantity col-lg-4 col-md-4 col-sm-4 col-4">
        <button type="button" class="btn btn-secondary " onclick="increaseMe()">+</button>
        <span class="q">${quan}</span>
        <button type="button" class="btn btn-secondary" onclick="decreaseMe()">-</button>
        <button type="button" name="${i}"class="btn btn-danger">REMOVE</button>
        </span>
        </div>`
        cartItems.innerHTML = cartMaal
        cartCont.append(cartItems)
        
    }
        
    
    // // PLUS BUTTON FUNCTION
    function increaseMe(){
        var a = event.target.parentElement
        var b = a.getElementsByTagName('span')[0].innerText
        var b = parseFloat(b)
        var plus = b+1
        var c = a.getElementsByTagName('button')[2].name
        
        var x = a.getElementsByTagName('span')[0].innerHTML ='<span class="q" id="Q">'+plus+'</span>';
        
        var title = JSON.parse(localStorage.getItem('product'+c)).pName;
        var img = JSON.parse(localStorage.getItem('product'+c)).pImage;
        var price = JSON.parse(localStorage.getItem('product'+c)).pPrice;
       
        myProduct = {
            pName : title,
            pImage: img, 
            pPrice:price,
            pQuantity: plus
        };
        localStorage.setItem('product'+c, JSON.stringify(myProduct));
        myTotal()  
    }
    
    
    // // MINUS BUTTON FUNCTION
    function decreaseMe(){
        var a = event.target.parentElement
        var b = a.getElementsByTagName('span')[0].innerText
        var b = parseFloat(b)
        var minus = b-1
        var c = a.getElementsByTagName('button')[2].name
        if(minus <= 0){
            minus=0;
            alert('You have to select atleast one quantity, or else you can remove it then.')
        } else{
            var x = a.getElementsByTagName('span')[0].innerHTML ='<span class="q" id="Q">'+minus+'</span>';
            var title = JSON.parse(localStorage.getItem('product'+c)).pName
            var img = JSON.parse(localStorage.getItem('product'+c)).pImage
            var price = JSON.parse(localStorage.getItem('product'+c)).pPrice
            myProduct = {
                pName : title,
                pImage: img, 
                pPrice:price,
                pQuantity: minus
            }
            localStorage.setItem('product'+c, JSON.stringify(myProduct))
    
        }
        myTotal()
    }
    

    //  // REMOVE ALL DATA BUTTON 
    function removeAll(){
        var a = document.getElementsByClassName('cart-item')

        for (var i=0; i <= localStorage.getItem("productCount"); i++){
            localStorage.removeItem('product'+i)
            if(a[0] !== undefined){
            localStorage.removeItem('product'+i)
            a[0].remove()
            myTotal()}
        }
        localStorage.setItem('productCount', 0)
        window.location.href='./Zamasu.pk.html'
    }
    
    
    // // REMOVE BUTTON 
    var removeCartItemsButton = document.getElementsByClassName('btn-danger')
    for (var i=0; i < removeCartItemsButton.length;i++){
    var button = removeCartItemsButton[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        
        var a = buttonClicked.parentElement.parentElement
        var b = a.getElementsByTagName('button')[2].name
        localStorage.removeItem('product'+b)
        myTotal()
        var c =localStorage.getItem('productCount')
        c=c-1
        localStorage.setItem('productCount', c)
    })
    }
    


    // // CHECKING ACCOUNT
    function checkAccount(){
        if(localStorage.getItem('product0') !== null){
            if (localStorage.getItem('email0') === null || localStorage.getItem('password0') === null){
               alert('In order to continue you have to Log in first.');
               window.location.href='./Login.html'
            } else{
                alert('Thanks For Choosing Us, your items will be at your given address ASAP ;)')
                for (var z=0;z<=localStorage.getItem('productCount');z++){
                    localStorage.removeItem('product'+z)
                }
                window.location.href='./Zamasu.pk.html'
                localStorage.setItem('productCount', 0)
            }
        } else{
           alert("Why your Cart is empty ?")
       }
    }

























































