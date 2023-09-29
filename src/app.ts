// intersection types
// allow us to combine other types
// equivalent  to interface extends
// usefull when working with multiole types

type Admin={
   name:string
   prividge:string
}

type employee={
   name:string
   startDate:Date
}

type elevatedEmployee=Admin & employee

const el:elevatedEmployee={
   name:'test',
   prividge:'user',
   startDate: new Date()
}

// combinable types
// ensures code flexibility and that code runs coorrectly at runtime

type combinable=string|number
type numeric=number|boolean

function addTest(a:string,b:string):string
function addTest(a:number,b:number):number
function addTest(a:combinable,b:combinable){
   if (typeof a=='string'||typeof b=='string'){
      console.log(' a.toString()+b.toString()', a.toString()+b.toString())
      return  a.toString()+b.toString()
   }
    console.log(a+b)
   return a+b
}
 addTest('winnie',"seniorEngineer")

// typeGuards

type unKnownEmployee=employee|Admin

function UnknownEmployeeInfo(employee:unKnownEmployee){
   if ('prividge' in employee){
      console.log('employee',employee.prividge)
   }
}
// type Casting

interface ErrorContainer{
   [prop:string]:string //This affirms that all items here will be of this type
}

const errorBag:ErrorContainer={
   email:'Not a valid Email'
}

console.log(errorBag)