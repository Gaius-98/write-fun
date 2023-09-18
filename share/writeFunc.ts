/**
 *  手写call
 * @param fn  function
 * @param obj change this
 * @param args params
 * @returns  result
 */
export const call = (fn,obj,...args) =>{
    if(!!!obj){
        obj = globalThis
    }

    obj.temp = fn
    const result  = obj.temp(...args)
    delete obj.temp
    return result
}
export const apply = (fn,obj,args) =>{
    return fn.call(obj,...args)
}
/**
 * 手写bind
 * @param fn function
 * @param obj chang this
 * @param args params
 * @returns fn
 */
export const bind = (fn,obj,...args)=>{
    return function(...args2){
        return call(fn,obj,...args,...args2)
    }
}
/**
 * 手写once
 * @param fn  function
 * @returns  func
 */
export const once = (fn) => {
    let flag = true
    return function(...args2){
        if(!!flag){
            flag  = false
            return fn.call(this,...args2)
        }
    }
}
/**
 * 实现函数柯里化
 * @param fn function
 * @returns result
 */
export const curry = (fn) =>{
    return function(...args){
        if(fn.length == args.length){
            return fn.call(this,...args)
        }else{
            return (...args2) =>{
                return fn.call(this,...args,...args2)
            }
        }
    }
}


