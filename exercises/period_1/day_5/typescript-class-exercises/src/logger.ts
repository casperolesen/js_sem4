// V2
 
function loggerV1(a:any,b:any){
    console.log(`Value-1: ${a}, Value-2: ${b}`)
  }
   
  let n1 = 45
  let s1 = "Hello Class"
  //loggerV1(n1,s1);
   
  function loggerV2(a:number,b:string){
    console.log(`Value-1: ${a}, Value-2: ${b}`)
  }
  function loggerV2Return(a:number,b:string):string{
    return `Value-1: ${a}, Value-2: ${b}`
  }
   
  loggerV2(n1,s1);

  //V3
 
interface IPerson {name:string}
interface IAddress {street:string}
 
function loggerV3(a:IPerson,b:IAddress){
  console.log(`Value-1: ${a.name}, Value-2: ${b.street}`)
}
 
// Duck typing
loggerV3({name:"Kurt Wonnegut"},{street: "Lyngbyvej 67"})

//V4
class Person implements IPerson {
    //private _name : String;
    #name: string
    constructor (name: string){this.#name = name}
    get name():string {return this.#name}
    set name(name:string) {this.#name= name}
    toString():string {return this.#name}
  }
   
  class Address implements IAddress {
    //private _name : String;
    _street: string
    constructor (street: string){this._street = street}
    get street():string {return this._street}
    set street (street:string) {this._street= street}
    toString():string {return this._street}
  }
   
  let p1 = new Person("Kurt Wonnegut");
  let a1 = new Address("Lyngbyvej 45");
 


  