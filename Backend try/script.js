var tbody = document.getElementById("table-body");
var stdNo = 0;

function additemtotable(number, stock) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  td1.innerHTML = number;
  td2.innerHTML = stock;
  td3.innerHTML = ++stdNo;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);

  tbody.appendChild(trow);
}

function addallitems(h) {
  stdNo = 0;
  tbody.innerHTML = "";
  h.forEach((element) => {
    additemtotable(element.number, element.stock);
  });
}

const firebaseConfig = {
    apiKey: "AIzaSyCEzYAVjKOEvAW3e0HKcojYahWcSrERKjc",
    authDomain: "virtual-investa-agam.firebaseapp.com",
    databaseURL: "https://virtual-investa-agam-default-rtdb.firebaseio.com",
    projectId: "virtual-investa-agam",
    storageBucket: "virtual-investa-agam.appspot.com",
    messagingSenderId: "536392988527",
    appId: "1:536392988527:web:a43768eb1a4deadece5a9a",
    measurementId: "G-3EETJTNRTF",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

function getall() {
  const dbref = db.ref();

  dbref.child("buysell").on("value", (snapshot) => {
    var students = [];

    snapshot.forEach((childSnapshot) => {
      students.push(childSnapshot.val());
    });

    addallitems(students);
  });
}

window.onload = getall;
