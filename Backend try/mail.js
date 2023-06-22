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

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var buysellDB=firebase.database().ref('buysell');

document.getElementById('stock-form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var stock=getElementVal('stock-symbol');
    var number=getElementVal('number-of-stocks');
    var action=getElementVal('dropdown');
    
    saveDetails(stock,number,action)

    // enable alert
    document.querySelector('.alert').style.display="block";

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display="none";
    }, 3000);

    //reset the form
    document.getElementById("stock-form").reset()
}

const saveDetails = (stock, number, action) => {
    var newStockForm = buysellDB.push();
    newStockForm.set({
      stock: stock,
      number: number,
      action: action,
    });
  }

const getElementVal=(id) =>{
    return document.getElementById(id).value;
}