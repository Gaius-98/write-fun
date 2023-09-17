
interface observerStore {
    [key:string]:Function[]
}
/**
 * 简易发布及订阅模式实现
 */
class EasyObserver {
    #obj:observerStore
    constructor(){
        this.#obj  = {}
    }
    subscribe(item:string,callback){
        if(this.#obj[item]){
            this.#obj[item].push(callback)
        }else{
            this.#obj[item] = [callback]
        }
    }
    run(item){
        let cur = this.#obj[item]
        if(cur && cur.length){
            cur.forEach(cb=>cb())
        }
    }
    remove(item,callback){
        let cur = this.#obj[item]
        if(cur && cur.length){
            let idx = cur.findIndex(e=>e == callback)
            cur.splice(idx)
        }
    }  
}

export default EasyObserver