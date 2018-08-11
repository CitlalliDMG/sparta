var config = {
    apiKey: "AIzaSyCXYYs22j_nV0uqY6JCcmYaYPVwh1C5QTs",
    authDomain: "citibanamex-cc9e9.firebaseapp.com",
    databaseURL: "https://citibanamex-cc9e9.firebaseio.com",
    projectId: "citibanamex-cc9e9",
    storageBucket: "citibanamex-cc9e9.appspot.com",
    messagingSenderId: "587990770634"
  };
  firebase.initializeApp(config);
let profileContainer = document.getElementById('profile-container')

// observador estamos o no logueados
firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // estamos logueados
      mandarUsuarioDatabase(user);
      printPost();
    } else {
      console.log('not logged in ');
    }
  });
  
  const mandarUsuarioDatabase = (user) => {
    firebase.database().ref('users').set({
      username: user.displayName,
      email: user.email,
      profPicture: user.photoURL
    });
    pintarUsuario(user);
  };
  
  const pintarUsuario = (user) => {
    let photoProfile = (user.photoURL);
    if (user.displayName !== null) {
      profileContainer.innerHTML =
      `<div class="container center">
         <div class="row">
         <p>${user.displayName}</p>
         <p> ${user.email}</p>
         <div> <img class= "circle photoProfile" src= ${photoProfile}></div>
         </div>
         </div>`;
    } else {
      profileContainer.innerHTML =
      `<div class="container center">
         <div class="row">
         <p> ${user.email}</p>
         <div> <img class= "circle photoProfile" src= ${photoProfile}></div>
         </div>
         </div>`;
    }
  };