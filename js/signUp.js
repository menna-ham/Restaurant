
var passRegex =/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&-+=()._])[a-zA-Z0-9@#$%^&-+=()._]{8,10}/;
var emailRegex =/^[a-zA-Z0-9@#$%^&-+=()._]+@[A-Za-z0-9.-]+(.com)$/;
var nameRegex =/^[A-Z][a-z][a-zA-Z ]{4,}/;
///^[A-Za-z ]{8,15}/

var signName= document.getElementById('signName');
var signEmail = document.getElementById('signEmail');
var signPass = document.getElementById('signPass');
var signBtn = document.getElementById('signBtn');

var signNameVal = document.getElementById('signNameVal');
var signEmailVal = document.getElementById('signEmailVal');
var signPassVal = document.getElementById('signPassVal');
var mailChecker = document.getElementById('mailChecker');
var successSign = document.getElementById('success-sign');

var loginLink = 'login.html';
var allUsers = [];

// adding localStorage to users array
if(JSON.parse(localStorage.getItem('Users')) !=null )
{
    console.log('displaying members');

    allUsers = JSON.parse(localStorage.getItem('Users'));
    displayUsers();
}


// checking on the users inside array
function displayUsers (){
    for(var i=0; i<allUsers.length ; i++)
    {
        console.log(`${allUsers[i].name} + ${allUsers[i].email}  + ${allUsers[i].password}`)
    }
}

// Validation on signName

// signName.onkeyup = function(){
//     validName();
// }
signName.addEventListener('keyup' , function(){
    validName();
})
function validName (){
    var name = signName.value;
    if( !nameRegex.test(name))
    { //false mode
        
        signName.classList.add('is-invalid');
        signNameVal.classList.remove('d-none');
        signNameVal.classList.add('d-block');
        return false

    }else{ 
        // true mode
        signName.classList.remove('is-invalid');
        signName.classList.add('is-valid');
        signName.classList.remove('d-block');
        signNameVal.classList.add('d-none');
        return true

    }
    //console.log(nameRegex.test(name));
}


// Validation on signEmail
signEmail.onkeyup = function (){
   validEmail();
   checkEmail();

}

function validEmail(){
    var mail = signEmail.value;

    if(!emailRegex.test(mail))
    { //false mode
        
        signEmail.classList.add('is-invalid');
        signEmailVal.classList.remove('d-none');
        signEmailVal.classList.add('d-block');
        return false

    }else{ 
        // true mode
        signEmail.classList.remove('is-invalid');
        signEmail.classList.add('is-valid');
        signEmail.classList.remove('d-block');
        signEmailVal.classList.add('d-none');
        return true
    }
    
}

//validation on Password
signPass.onkeyup = function (){
    validPass();
 
 }
 function validPass(){
     var pass = signPass.value;
 
     if(!passRegex.test(pass))
     { //false mode
         
         signPass.classList.add('is-invalid');
         signPassVal.classList.remove('d-none');
         signPassVal.classList.add('d-block');
         return false
 
     }else{ 
         // true mode
         signPass.classList.remove('is-invalid');
         signPass.classList.add('is-valid');
         signPass.classList.remove('d-block');
         signPassVal.classList.add('d-none');
         return true

     }
     //console.log(emailRegex.test(mail))
 }


 // disabled checking 
 signBtn.addEventListener('click', function(){
    disabledChecker();    
})

function disabledChecker(){

//validName() && validEmail() &&validPass() && checkEmail() &&checkEmptyInputs()
    if(nameRegex.test(signName.value) &&emailRegex.test(signEmail.value) && passRegex.test(signPass.value) ){
        //true mode 
        console.log('removing disabled');

        addingUser();
        console.log('adding user');
        successSign.classList.remove('d-none');
        successSign.classList.add('d-block');
        window.location.href='../index.html';

        // alert('true from disabled');


    }else{

        console.log('setting disabled');
        //signBtn.setAttribute('disabled');
        alert('Please Try Again');
        //signBtn.classList.add('disabled');
    }
}


// adding user to local storage and array of users
function addingUser (){
 var user = {
    name:signName.value,
    email:signEmail.value,
    password:signPass.value
}
 allUsers.push(user);
 localStorage.setItem('Users', JSON.stringify(allUsers));

 //console.log(user)
}

// check if email exsit or not 
function checkEmail(){
    var checkMail = signEmail.value;
    for ( var i =0; i< allUsers.length ; i++)
    {
        if( allUsers[i].email == checkMail )
        {
            // exsist mode

            mailChecker.classList.remove('d-none');
            mailChecker.classList.add('d-block');
            signEmail.classList.add('is-invalid');
            
            return false;
        }
        else{

            // new email  mode
            mailChecker.classList.remove('d-block');
            mailChecker.classList.add('d-none');

            return true;

        }
    }
}


// check empty inputs or not
function checkEmptyInputs(){
    var name = signName.value;
    var mail = signEmail.value;
    var pass = signPass.value;

    if(name =='' && mail =='' && pass =='')
    { // lw hya fadya;
        console.log('fadya')
        return false
    }
    else{
        console.log('mlyana')
        return true;
    }
}











