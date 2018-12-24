import { isArray } from './../@util/Array/isArray';
import { arrayBufferToBase64 } from './../@util/ArrayBuffer/arrayBufferToBase64';
import { base64ToArrayBuffer } from './../@util/ArrayBuffer/base64ToArrayBuffer';
import { validateArrayBuffer } from './../@util/ArrayBuffer/validateArrayBuffer';
import { errorCreator } from './../@util/Error/errorCreator';

export class WritableMap {
    constructor(iterable){
        if(!isArray(iterable)){
            throw errorCreator("WritableMap can only be created from an iterable")
        }
        this._iterable=iterable;
    }
    create = ()=>{
        let o=this._iterable
        let j=JSON.stringify(o);
        let b=base64ToArrayBuffer(btoa(j))
        return b
    }
}

export class ReadableMap {
    constructor(writableMap){
        if(!validateArrayBuffer(writableMap)){
            throw errorCreator("ReadableMap can only be created from WritableMap")
        }
        this._writableMap=writableMap;
    }
    read = ()=>{
        let o=arrayBufferToBase64(this._writableMap)
        let j=atob(o)
        let b=JSON.parse(j)
        return b
    }
}