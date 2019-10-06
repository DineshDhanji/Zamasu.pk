// MATCHONG DATA
function matchData(){
    var emailLog = document.getElementById('emailLogin').value;
    var passLog = document.getElementById('passwordLogin').value;
    if (emailLog === "" || passLog === ""){
        alert("First complete the info in order to proceed to next page.")
    } else if (localStorage.getItem('email1') !== emailLog || localStorage.getItem('password1') !== passLog){
        alert("Sorry, But it look like Your Email or Passowrd is invalid.");
    } else{
        var email0 = document.getElementById('emailLogin').value
        var pass0 = document.getElementById('passwordLogin').value
        localStorage.setItem('email0', email0)
        localStorage.setItem('password0', pass0)
        var a = document.getElementsByClassName('sign-button')[0].parentElement.href = "./Profile.html"
    }
}

// CHANGING PASSWORD
function changePassword(){
    window.open('./Change Password.html', "", "width=900px, height=500px")
}















