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
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
