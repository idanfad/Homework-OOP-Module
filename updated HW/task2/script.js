let googleServer = [{
    userName: 'Idan',
    ID: 301
},
{
    userName: 'Yaron',
    ID: 401
},
{
    userName: 'Elad',
    ID: 923
}
];

function callGoogleUsers(userIdInput, callback1, callback2) {

googleServer.forEach((user)=>{
    if(user.ID == userIdInput){
        callback1(user.ID,user.userName);
    } else  {
        callback2();
    }
});

}

function onSuccess(userID,userName) {
console.log('The user '+userName+' and his ID: '+userID+' Has been found');
}

function onFailure() {
console.log('Failure');
}

callGoogleUsers(401, onSuccess, onFailure);