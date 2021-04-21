
auth.onAuthStateChanged(user=>{
    if(user){
        const userName = document.querySelector('#userName');
        db.collection('users').doc(user.uid).get().then(snapshot=>{
            userName.innerHTML = `Welcome ${snapshot.data().Name}`
        })
    }
})


// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log('user is signed in at users.html');
//     }
//     else {
//         alert('your login session has expired or you have logged out, login again to continue');
//         location = "index.html";
//     }
// })


// userName.innerHTML = 



