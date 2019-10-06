if(localStorage.getItem('email0') == null){
    window.location.href='./Login.html'
}

document.addEventListener("DOMContentLoaded", function check(){
    if(localStorage.getItem('pics') !== null){
    updatePic()}})
    
    function updatePic(){
        console.log(document.getElementsByTagName('img')[1].src = localStorage.getItem('pics'))
    }

// CHANGING PICTURE BUT NOT WORKING 
function changePic(){
    var a = window.open("./Change Picture.html", "", "width=1000px, height=500px")
}

// UPDATING DATA    
function updatingData(){
    document.getElementsByClassName('name')[0].innerText = " " + localStorage.getItem('userName1')
    document.getElementsByClassName('email')[0].innerText =  localStorage.getItem('email0')
    document.getElementsByClassName('address')[0].innerText = localStorage.getItem('address1')
    checkGender()
    checkBirthday()
}

// CHECKING GENDER
function checkGender(){
    if(localStorage.getItem('gender') === null){
    } else {
        document.getElementsByClassName('gender')[0].innerText = localStorage.getItem('gender')
    }
}

// CHECKING BIRTHDAY
function checkBirthday(){
    if(localStorage.getItem('date1') === null || localStorage.getItem('month1') === null || localStorage.getItem('year1') === null){
    } else {
        var dd = localStorage.getItem('date1')
        var mm = localStorage.getItem('month1')
        var yy = localStorage.getItem('year1')
        var birthDay = dd+" - "+mm+" - "+yy
        document.getElementsByClassName('birthday')[0].innerText = birthDay
    }
}

// LOGGING OUT
function logOut(){
    localStorage.removeItem('email0');
    localStorage.removeItem('password0');
    // localStorage.removeItem('userName0');
    location.reload()
    window.location.href='./Login.html'
}

// CHANGING PASSWORD
function changePassword(){
    window.open('./Change Password.html', "", "width=900px, height=500px")
}



































































