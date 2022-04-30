var firebaseConfig = {

    apiKey: "AIzaSyBkAMwT77AkJP4QY5k0MLAcJ-0QpVRVXTw",
  
    authDomain: "project-94-a06f0.firebaseapp.com",
  
    projectId: "project-94-a06f0",
  
    storageBucket: "project-94-a06f0.appspot.com",
  
    messagingSenderId: "296984471149",
  
    appId: "1:296984471149:web:e383470c2779b6d3c84164"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
