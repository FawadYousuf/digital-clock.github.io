// var arr1 = ["egg", "salt", "suger"];
// var arr2 = ["water", "milk", "egg"];
// var arr3 = ["flour", "milk", "suger"];
// var allarr = [];
// function mergearr(array1, array2, array3) {
//     for (var i = 0; i < array1.length; i++) {
//         if (allarr.indexOf(array1[i]) == -1) {
//             allarr.push(array1[i]);
//         }
//     }

//     for (var i = 0; i < array2.length; i++) {
//         if (allarr.indexOf(array2[i]) == -1) {
//             allarr.push(array2[i]);
//         }
//     }

//     for (var i = 0; i < array3.length; i++) {
//         if (allarr.indexOf(array3[i]) == -1) {
//             allarr.push(array3[i]);
//         }
//     }
//     console.log(allarr);

// }
// mergearr(arr1, arr2, arr3);

// var rotator = function(){
//   widget.Rotator.rotate();
//   setTimeout(rotator,5000);

// };
// rotator();


// function greet(greeting){
//   document.write(greeting);
// }

// function getRandom(arr){
//   var rand = Math.random();
//   return arr[Math.floor(rand *arr.length)];
// }

// var greetings = [
//         "Hello", 
//         "Bonjour", 
//         "Guten Tag"
//     ],
//     randomGreeting = getRandom(greetings);

// setTimeout(function(){
//   greet(randomGreeting);
// }, 100);

// score = 0
// function myFunc(){

//     // var name = alert("hi");  
//     document.write()  
// }
// // myFunc();
// setInterval(myFunc,1000)

// var d = setDate(12);
// var s = d.setSeconds(01);
// score = s;

// function myFunc(){

//     // var name = alert("hi");  
//     document.write(score++)  
// }
// // myFunc();
// setInterval(myFunc,1000)


// function timer() {
//     var cd = new Date();
//     var h = cd.getHours();
//     var m = cd.getMinutes();
//     var s = cd.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
//     var t = setTimeout(timer, 500);
// }
// function checkTime(i) {
//     if (i < 10)
//     { i = "0" + i };
//     return i;
// }

function startTime() {
    var cd = new Date();
    var diem = "AM"
    var h = cd.getHours();
    var m = cd.getMinutes();
    var s = cd.getSeconds();

    if (h == 0) {
    h = 12;
    }
    else if (h > 12) {
        h = h - 12;
        diem = "PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var myClock =  h + " : " + m + " : " + s + " " + diem;
    document.getElementById("show").innerHTML = myClock;
    setTimeout("startTime()" , 1000);
}
startTime();
startTime();
// ======
// setInterval(function(){
// }


