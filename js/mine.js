var contacts;

if(localStorage.getItem("OurContacts") == null){
    contacts=[];    
}

else{
    contacts=JSON.parse(localStorage.getItem("OurContacts"));
}










displayData()


function Search(){
    var userSearch = document.getElementById("ItemSearch").value;
    var usermwgood =false;
    for(var i=0; i<contacts.length ; i++){
        if( userSearch == contacts[i].UName){
            usermwgood = true;
        }
        
    }
    
    
    if(usermwgood == true){
        alert("User is Exist and ID is "+i+" ")
    }
    
    else{
        
        alert("User NOT Exist")

    }
}





function DeleteItem(indexItem){
    contacts.splice(indexItem,1);
    localStorage.setItem("OurContacts",JSON.stringify(contacts));
    displayData();
}



function add(){
    
    var UserNameValue = document.getElementById("UserName").value;
    var UserPhoneValue = document.getElementById("Userphone").value;
    var UserAddressValue = document.getElementById("UserAddress").value;
    var UserEmailValue = document.getElementById("UserEmail").value;
    
    if(UserNameValue=="" || UserPhoneValue=="" || UserAddressValue=="" || UserEmailValue==""){
        alert(" Pleaes Fill Data");
    }
    
    else{
        var person ={UName:UserNameValue , UPhone:UserPhoneValue , UAddress:UserAddressValue ,UEmail:UserEmailValue};
    
    contacts.push(person);
        
        localStorage.setItem("OurContacts",JSON.stringify(contacts) );
        
        
        
        clearData()
        displayData()
        
    }
    
    

    
}


function displayData(){
    
    var allTrs ="";
    
    for(var i=0 ; i< contacts.length ; i++){
         
        allTrs = allTrs + "<tr><td>"+i+"</td><td>"+contacts[i].UName+"</td><td>"+contacts[i].UPhone+"</td><td>"+contacts[i].UAddress+"</td><td>"+contacts[i].UEmail+"</td><td><button onclick='DeleteItem("+i+")' class='btn btn-danger'>Delete</button></td></tr>";
    }
    
    document.getElementById("MyBody").innerHTML= allTrs;
}

function clearData(){
   document.getElementById("UserName").value ="";
   document.getElementById("Userphone").value ="";
   document.getElementById("UserAddress").value ="";
   document.getElementById("UserEmail").value="";
    
}















//var emps =[{name:"Ahmed", age:20 , salary:4000},
//           {name:"mohamed", age:24 , salary:5540},
//           {name:"Mohsen", age:25 , salary:11000},
//           {name:"Emad", age:69 , salary:20000},
//           {name:"soheir", age:55 , salary:18000}
//          
//          ];
//
//
//
//var allTrs ="";
//
//for(var i =0; i<emps.length;i++){
//    
//    allTrs = allTrs +"<tr><td>"+emps[i].name+"</td><td>"+emps[i].age+"</td><td>"+emps[i].salary+"</td></tr>"
//}
//
//document.getElementById("mybody").innerHTML = allTrs;
//

























//var emps = ["Ahmed","Mohamed","Mohsen","Emad","soheir"];
//
//for(var i=0; i< emps.length ; i++){
//    console.log(emps[i])
//}













//function cutUser(){
//    var useremail = document.getElementById("UserEmail").value;
//    var indexat = useremail.indexOf("@");
//    var usernamevalue = useremail.substring( 0 , indexat);
//    document.getElementById("UserName").value = usernamevalue;
//    
//    var domainvalue = useremail.substring(indexat+1);
//
//    document.getElementById("UserDomain").value = domainvalue;
//    
//    
//    
//
//}