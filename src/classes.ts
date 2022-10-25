class department{
    name:string;

    constructor(n:string){
        this.name=n

    }
    describe(){
    console.log("Deparment :"+this.name)
    }
}
  const  Accounting=new department("Accounting")
  console.log(Accounting)
  Accounting.describe()

  