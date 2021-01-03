var firebaseConfig = {
  apiKey: "AIzaSyAwRE14s_9bTId5aEa5g_Vld3BJpc4NRi0",
  authDomain: "august-now-300601.firebaseapp.com",
  projectId: "august-now-300601",
  storageBucket: "august-now-300601.appspot.com",
  messagingSenderId: "414450817854",
  appId: "1:414450817854:web:8cf42b2dc2084b806c2a6f",
  measurementId: "G-T6KKWPWXKV"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
let date = new Date();

function boxCollection(ip) {
  let boxCollection = {
    ip_address: ip,
    device: getDevice(),
    date: getData(),
    time: getTime()
  };

  return boxCollection;
}

function getTime() {
  let h = date.getHours();
  let m = date.getMinutes();
  return `${h}:${m}`;
}

function getData() {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  return `${y}${m}${d}`;
}

function getDevice() {
  var device =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/Windows/i);

  return device[0];
}
getIPAddress();
function getIPAddress() {
  fetch("https://api.ipify.org/?format=json")
    .then(function(response) {
      return response.json(); // แปลงข้อมูลที่ได้เป็น json
    })
    .then(function(data) {
      database
        .collection(getData())
        .doc(getTime())
        .set(boxCollection(data.ip));
   
    });
}
