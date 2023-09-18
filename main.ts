import EasyObserver from "./share/EasyObserver";
import { call,bind,once,curry } from './share/writeFunc'
const easyObserver = new EasyObserver()
easyObserver.subscribe('test',()=>{
    console.log('test')
})
easyObserver.subscribe('test',()=>{
    console.log('test2')
})
let newObj ={
    name:'bob'
}
let obj = {
    name:'wgs',
    sayName:once(function(){
        console.log(this.name,'---------')
    })
}
let add = curry((x,y) =>{
    return x+y
})
console.log(add(1)(2))
obj.sayName( )
// testFn()
const newFunc = bind(obj.sayName,newObj)
newFunc()
let TestF = function(name){
    this.name= name
    this.sayName = ()=>{
        console.log(this.name)
    }
}
let testObj  = new TestF('test')
console.log(testObj)
// console.log(newFunc())
easyObserver.run('test')