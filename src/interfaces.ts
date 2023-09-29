function add(n1:number|string,n2:number,showResult:boolean){
    if (showResult){
       console.log(n2+n2)
       let result
       if (typeof n1==="number"&& typeof n2=== "number"){
          result=n1+n2;
          return result
       }else{
         result=n1.toString()+n2.toString() 
         return result
       }
       
    }
    
 }
 
 
 
  const resulttr= add("12",20,true)
 console.log("result",resulttr)
 
 enum Role{ADMIN,READONLY,OWNER};
 
 // objects
 const person 
 : {name:string;age:number|string; hobbies:string[];role:(string|number)[],userTuple:[number,string]}
 ={
    name:"winfred",
    age:23,
    hobbies:["swinning","travelling","reading"],
    // roles:Role.ADMIN,
    role:[1,"owner"],
    userTuple:[15,"users"]
    
 }
 person.role.push("admin")
 
 console.log(person)
 
 // arrays
 let newArr:string[]
 newArr=["winnie"]
 
 // for (const hobby of person.hobbies){
 //    console.log(hobby.toUpperCase())
 // }
 // person.roles===0?console.log("is Admin"):
 // person.roles===1?console.log("is read Only"):
 // person.roles===2?console.log("is Owner"):
 // console.log("does not exist")
 enum operrators{SUM,MULTIPLICATION,SUBTRACTION,DIVISION}
 // colon afetr the functions shows the return type of the function
 function calculator(number1:number,number2:number):number {
    
    return  number1+number2
    console.log("resulttt", number1+number2)
 
 }
 const p=calculator(10,20)
 
 console.log("resultttp", p)