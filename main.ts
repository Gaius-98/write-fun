import EasyObserver from "./share/EasyObserver";
const easyObserver = new EasyObserver()
easyObserver.subscribe('test',()=>{
    console.log('test')
})
easyObserver.subscribe('test',()=>{
    console.log('test2')
})

console.log(easyObserver,EasyObserver,)
easyObserver.run('test')