export const isArray=(array)=>{
    return !(array[Symbol.iterator]=== undefined) ;
}