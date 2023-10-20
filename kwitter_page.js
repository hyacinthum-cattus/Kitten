//TUS ENLACES DE FIREBASE

//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
      apiKey: "AIzaSyASwQT3QaTQi_oOarljcV-EJOag0VxIQRQ",
      authDomain: "kitten2-c1679.firebaseapp.com",
      databaseURL: "https://kitten2-c1679-default-rtdb.firebaseio.com",
      projectId: "kitten2-c1679",
      storageBucket: "kitten2-c1679.appspot.com",
      messagingSenderId: "746063098925",
      appId: "1:746063098925:web:1a8d6f4c23d779ca65f4a4"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              like: 0
       });

       document.getElementById("msg").value = "";
}

function getData() {
   firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                 childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                      
                        //End code
                 }
          });
   });
}
getData();