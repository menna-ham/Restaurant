
var zoomPics = document.getElementById('zoom-pics');
var sliderBox = document.querySelector('.sliderBox');
var itemSlide = document.querySelector('.item-slide');
var zoomIcon = Array.from( document.querySelectorAll('.zoom-icon'));

var closeBtn= document.getElementById('closeBtn')
var PrevBtn= document.getElementById('PrevBtn')
var nextBtn= document.getElementById('nextBtn')

var allImgs =Array.from( document.querySelectorAll('.zoom-item img'));
var allSrcs=[];

var currentIndex=0;


for (let i = 0; i < allImgs.length; i++) {
    allSrcs.push(allImgs[i].src);    
}



if(zoomIcon)
{
    for (let i = 0; i < zoomIcon.length; i++) {

        zoomIcon[i].addEventListener('click', function(eventInfo){

            var parent = eventInfo.path[2];
            var currentImg= parent.querySelector('img');

            sliderBox.classList.remove('d-none');
            sliderBox.classList.add('d-flex');
            itemSlide.style.cssText=`background-image:url(${currentImg.src})`;

           // console.log(allImgs);

            for(var i=0; i<allImgs.length ; i++)
            {
                if (allSrcs[i]==currentImg.src)
                {
                    // console.log('Found'+ i);
                    currentIndex= i;
                    break;
                }else{
                    // console.log('Not Found');
                }
            }
        })

    }

}



if(closeBtn){
    closeBtn.onclick= function(){

        sliderBox.classList.remove('d-flex');
        sliderBox.classList.add('d-none');
    }
}

if(nextBtn){
    nextBtn.onclick= function(){

        currentIndex++;
        if(currentIndex==allSrcs.length)
        {
            currentIndex=0;
        }
        itemSlide.style.cssText=`background-image:url(${allSrcs[currentIndex]})`;
    
    }
}


if(PrevBtn)
{
    PrevBtn.onclick = function(){

        currentIndex--;
    
        if(currentIndex<0)
        {
            currentIndex=allSrcs.length-1;
        }
        itemSlide.style.cssText=`background-image:url(${allSrcs[currentIndex]})`;
    
    }
}



////////////////////////////////////////////////////////////////////////////////////

var phoneRegex= /^(010|011|012|015)[0-9]{8}$/;
var MessageRegex = /[a-zA-Z0-9]{5,}/;

var userNameIn = document.getElementById('userNameIn');
var userEmailIn = document.getElementById('userEmailIn');
var userPhoneIn = document.getElementById('userPhoneIn');
var userMesgIn = document.getElementById('userMesgIn');
var MesgBtn = document.getElementById('MesgBtn');

var phoneval= document.querySelector('#phoneval');
var Messgval = document.querySelector('#Messgval')

var currentInfo = JSON.parse(sessionStorage.getItem('UserInfo'));
var newMsg ={};
var allMesgs = [];


if(JSON.parse(localStorage.getItem('Messages')) !=null )
{
    console.log('displaying Messages');

    allUsers = JSON.parse(localStorage.getItem('Messages'));
    displayMessages();
}


if(currentInfo!=null){
    userNameIn.value = currentInfo.name;
    userEmailIn.value = currentInfo.email;
}


if(MesgBtn){

    MesgBtn.addEventListener('click', function(){

        checkBeforeSend();
    })

}
function sendingMessg(){

    newMsg = {
        name: currentInfo.name,
        email: currentInfo.email,
        phone: userPhoneIn.value,
        message: userMesgIn.value
    }
    allMesgs.push(newMsg);
    localStorage.setItem('Messages', JSON.stringify(allMesgs))
}


function displayMessages(){

    for (let i = 0; i < allMesgs.length; i++) {
        console.log(` 
        ${allMesgs[i].name} +
        ${allMesgs[i].email} +
        ${allMesgs[i].phone} +
        ${allMesgs[i].message}`);
        
    }
}

if(userPhoneIn)
{
    userPhoneIn.addEventListener('keyup', function(){
        checkPhone();
    })
}

function checkPhone(){

    if(phoneRegex.test(userPhoneIn.value)!= true)
    {
        phoneval.classList.remove('d-none');
        phoneval.classList.add('d-block');
        userPhoneIn.classList.add('is-invalid');
        return false
    }else{
        userPhoneIn.classList.remove('is-invalid');
        userPhoneIn.classList.add('is-valid');
        phoneval.classList.remove('d-block');
        phoneval.classList.add('d-none');
        return true
    }

}

function checkEmpty(){
    var phone= userPhoneIn.value;
    var mesg= userMesgIn.value
    if(phone=='' && mesg =='')
    {
        console.log('mynf34');
        return false
    }else{
        console.log('ynf3 .. eb3t yasta');
        return true
    }

}
function checkBeforeSend(){

    if( checkEmpty() && checkMessg() && checkPhone()){
        sendingMessg();
        userPhoneIn.value='';
        userMesgIn.value='';
        document.querySelector('#thank').classList.remove('d-none');
        document.querySelector('#thank').classList.add('d-block');

        //alert('true from checking')
        
    }else{
        document.querySelector('#thank').classList.add('d-none');
        alert('false from checking')
    }
}

if(userMesgIn)
{
    userMesgIn.addEventListener('keyup',function(){
        checkMessg()
    })
}

function checkMessg()
{
    if(MessageRegex.test(userMesgIn.value)!=true)
    {
        Messgval.classList.remove('d-none');
        Messgval.classList.add('d-block');
        userMesgIn.classList.add('is-invalid');
        return false
    }else{
        userMesgIn.classList.remove('is-invalid');
        userMesgIn.classList.add('is-valid');
        Messgval.classList.remove('d-block');
        Messgval.classList.add('d-none');
        return true
    }
}



/////////////////////////////////////////////////////////////////







