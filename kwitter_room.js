

var firebaseConfig = {
      apiKey: "AIzaSyDeOO35HeF45CsuWp6VP7ZY3qtO5i_1Y6A",
      authDomain: "kwitter-55a34.firebaseapp.com",
      projectId: "kwitter-55a34",
      storageBucket: "kwitter-55a34.appspot.com",
      messagingSenderId: "493569241910",
      appId: "1:493569241910:web:a5bbfb0e37bebff3393997",
      measurementId: "G-M0TW0B04XJ"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
