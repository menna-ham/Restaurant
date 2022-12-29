
////////////////////////////// login Logic /////////////////////////


var loginEmail = document.getElementById('loginEmail');
var loginPass = document.getElementById('loginPass');
var LoginBtn = document.getElementById('LoginBtn');

var loginEmailVal = document.getElementById('loginNameVal');
var loginPassVal = document.getElementById('loginPassVal');

var homeWelcome = document.getElementById('homeWelcome');
var welcome = document.querySelector('.welcome');
var logOutBtn = document.getElementById('OutBtn');

var allUsers = [];
var currentUser ={};


// adding localStorage to users array
if(JSON.parse(localStorage.getItem('Users')) !=null )
{
    console.log('displaying members');

    allUsers = JSON.parse(localStorage.getItem('Users'));
    displayUsers();
}

function displayUsers (){
    for(var i=0; i<allUsers.length ; i++)
    {
        console.log(`${allUsers[i].name} + ${allUsers[i].email}  + ${allUsers[i].password}`)
    }
}

//cgheck on var or button exist do all theeventlistener
if (loginEmail){
    loginEmail.addEventListener('focusout' , function(){
        existEmail()
    })
}


function existEmail(){
    var mail = loginEmail.value;
    
    for( var i=0; i < allUsers.length ; i++)
    {
        if( allUsers[i].email ==mail)
        {
            // old user... Exist user

            console.log('Found');
            currentUser = allUsers[i];
            console.log( currentUser);
            sessionStorage.setItem('UserInfo',JSON.stringify( currentUser));

            loginEmail.classList.remove('is-invalid');
            loginEmailVal.classList.add('d-none');

            break;

        }else{

            // new user Not Found

            console.log('User Not Found')
            loginEmail.classList.add('is-invalid');
            loginEmailVal.classList.remove('d-none');
            

        }
    }
}

if (LoginBtn)
{
    LoginBtn.addEventListener('click' , function(){
        samePass();
    })
}

console.log(JSON.parse( sessionStorage.getItem('UserInfo')));
var UserInfo= JSON.parse( sessionStorage.getItem('UserInfo'));
var userName

if(UserInfo!=null)
{
    userName=UserInfo.name;
}


function samePass(){
    
    var pass = loginPass.value;
    if(pass == currentUser.password)
    {
        //pages\home.html
        console.log('password correct')
        window.location.href= './pages/home.html';

    }else{

        console.log('password wrong');
        loginPassVal.classList.remove('d-none');
    }
}

if(userName==null){
    homeWelcome.innerHTML = `Guest`;
    document.querySelector('#OutBtn').innerHTML='Log In'
}else{
    homeWelcome.innerHTML = `  ${userName} `;
}


logOutBtn.onclick= function(){
    window.location.href='../index.html'
    sessionStorage.clear();
    currentUser={};
    homeWelcome.innerHTML=' ';
}
