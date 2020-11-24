// var num1 = 5;
// var num2 = 10;
// if(num1> num2){
//     alert("this is the first condition")
// }
// else{
// alert("this is the second condition");
// }
// var name = prompt('Enter your name');
// alert("hello, " + name);

// var day = prompt('enter a number');
// if (day==1){
// alert("sunday");
// }else if(day==2);
// alert("monday");

// var digit = prompt('enter any number');
// if (digit%2==0){
//     alert("even number");
// }else{
//     alert('odd number');
// }
// var digit = prompt("enter any year");
// if (year.length==4){
//     if (year%4==0);
//     alert("leap year");
// }else{
//     alert("not a leap year");
     
// }else{
//     alert("invalid input");
// }
// var x = 1;
// switch(x){
//     case 1:
//         document.write(x);
//         break;
//     case 2:
//         document.write(x+2);
//         break;
//     default:
//         document.write(x+5);
//         break;}

// var name = "Ehis";
// var age = "17"

// function nameage(){
//     var name = "Ehis";
//     var age = "17"

//     document.write("my name is "+name+ " and I am"+ age+"years old.");
// }


// nameage();

// function anotherf(){
//     document.write(age);
// }    
// anotherf();
    
//   function sayhello(name){
//       alert("Hi, " + name);
//   }
//   sayhello('David');
//   sayhello('Sarah');
//   sayhello('John');
  

alert("Welcome to UBA ATM center");
var pin = prompt("Input pin");
if (pin.length==4){
 if (pin%4==0);
        alert("Correct");
}else{
        alert("invalid pin");   
    }
        // alert("invalid input");

function display (){
   var x = prompt("Select an option\n1. Withdraw\n 2. Transfer\n 3. Airtime");
   if (x==1){
         withdraw();
    }else if (x==2){
         Transfer();
    }else if (x==3){
         airtime();
    }else{
     alert("invalid Option");
     display();
    }
}
display();

function amount(){
    var amt = prompt ("Select Amount\n1. 500\n2. 500\n3.1000\n4.1500")
    if (amt==1 || amt==2 || amt==3 || amt==4);
    alert("Processing")
    alert("Withdrawal Successful");
    alert("Thank You For Banking With Us");
}
function withdraw(){
    var withdraw = prompt("Select bank type\n1. Savings\n2. Current");
    if (withdraw==1 ||  withdraw==2 ||  withdraw==3){
        amount();
    }else{
        alert("ivalid input");
        withdraw();
    }
}
function savings(){
    var savings = prompt("Select bank type\n1. Savings\n2. Current");
    if (withdraw==1 ||  withdraw==2 ||  withdraw==3){
        alert("processing.....");
    }   
}
function recharge(){
    var charge = prompt("enter number");
    var network = prompt("Select amount\n1. 200\n2.500\n3.1000");
    if (network==1 || network==2 ||network==3){
    alert("processing");
    alert("Successful");
    alert("Thank You For Banking With Us");
   }else{
        alert("invalid input");
        recharge();
    }
}
function airtime(){
    var airtime = prompt("Select Network\n1. Glo\n2. Mtn\n3.Airtel");
    if (airtime==1 ||  airtime==2 ||  airtime==3){
        recharge();
    }else{
        alert("invalid input");
        airtime();
    }
}


// function Transfer(){
//     var bank = prompt("Select Bank")
// }

// function withdraw()
//     // var bank = prompt("Select account type\n 1. Savings\n 2.Current")