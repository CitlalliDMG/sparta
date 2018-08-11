var config = {
    apiKey: "AIzaSyCXYYs22j_nV0uqY6JCcmYaYPVwh1C5QTs",
    authDomain: "citibanamex-cc9e9.firebaseapp.com",
    databaseURL: "https://citibanamex-cc9e9.firebaseio.com",
    projectId: "citibanamex-cc9e9",
    storageBucket: "citibanamex-cc9e9.appspot.com",
    messagingSenderId: "587990770634"
  };
  firebase.initializeApp(config);

  let googleBtn = document.getElementById('login-google-btn');

  googleBtn.addEventListener('click', ()=>{
    //   console.log('diste click')
    const provider = new firebase.auth.GoogleAuthProvider();// google es nuestro proveedor y lo autentifique con firebase
    firebase.auth()  
      .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. parámetro de la variable provider que tiene la autenticación con google
      .then((result)=> { // entonces ejecuta la función que es el resultado (acceder con google)
        location.href = '../src/views/tablero.html';
      });
  });