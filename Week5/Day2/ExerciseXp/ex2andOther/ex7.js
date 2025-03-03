const userImg=document.createElement('img');
const usrerName= document.createElement('div');

(function start (name){
        name="Rex"
        usrerName.textContent=`Welcome to cite mr/ms ${name}`
        userImg.src = 'dog.jpg';
        userImg.alt = 'User Image';
        document.getElementById('nvId').appendChild(usrerName);
        document.getElementById('nvId').appendChild(userImg);

})();
