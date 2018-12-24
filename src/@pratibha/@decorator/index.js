import { L, Pp, D } from './../@component/@core/index';

export const  Link = (props,display) => {
    return function decorator(target) {
       target.Link = (props,display)=>{
           return L.call(this,props,display);
       }
    }
}

export const  P = (props,display) => {
    return function decorator(target) {
       target.P = (props,display)=>{
           return Pp.call(this,props,display);
       }
    }
}

export const  Div = (props,children) => {
    return function decorator(target) {
       target.Div = (props,children)=>{
           return D.call(this,props,children);
       }
    }
}