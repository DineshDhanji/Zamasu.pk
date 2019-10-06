// CHECKING EMAIL 
function checkEmail(){
    var email = document.getElementById("email").value;
    if (email.indexOf(" ") !== -1 || email.indexOf("@") < 1 ){        
        alert("Please correct email address"); }      
    }


// SAVING AND PASSING DATA
function saveData(){
    var userName = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var addr = document.getElementsByClassName('address')[0].value;
    var gender = document.getElementsByName('gender');
    
    if (userName === "" || email === "" || pass === "" || addr === "" || gender === ""){
        alert("First complete the info in order to proceed to Next Page.");
    } else{
        localStorage.setItem('userName1', userName);
        localStorage.setItem('email1', email);
        localStorage.setItem('password1', pass);
        localStorage.setItem('address1', addr);
    }


    // GENDER REFRESHER
    localStorage.removeItem('gender')
    for(var i=0; i < gender.length; i++){
        if(gender[i].checked){
            var a = gender[i].value;
            localStorage.setItem('gender' ,a);
        } else{
            localStorage.setItem('gender'+i, gender[i].value);      
        }
    } if(localStorage.getItem('gender') === null){
        // localStorage.removeItem('gender')
    } else{
        localStorage.removeItem('gender0');
        localStorage.removeItem('gender1');
        localStorage.removeItem('gender2');
    }
    
    
    // DATE
    if (document.getElementById('date').selectedIndex === 0){
        localStorage.removeItem('date1');
    } else{
        localStorage.setItem('date1', document.getElementById('date').selectedIndex);
    }
    
    // MONTH
    if (document.getElementById('month').selectedIndex === 0 ){
        localStorage.removeItem('month1');
    } else{
        localStorage.setItem('month1', document.getElementById('month').value);
    }
    
    // YEAR
    if(document.getElementById('year').selectedIndex === 0){
        localStorage.removeItem('year1');
    } else{
        localStorage.setItem('year1', document.getElementById('year').value) ; 
    }
}


// PROCEDING TO NEXT PAGE
function nextPage(){
    if (localStorage.getItem('userName1', 'email1', 'password1', 'address1', 'gender') !== null){
        alert('Let us check your Info, if there is no mistake then You can continue...');    
    }
    var userName = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var addr = document.getElementsByClassName('address')[0].value;
    // console.log(userName)
    // console.log('')
    if(userName, email, pass, addr !== "" ){
    localStorage.removeItem('pics');
    // alert('a')    
    }
}
