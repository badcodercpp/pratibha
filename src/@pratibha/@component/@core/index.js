import React from 'react'

export const L=(props,display)=>{
  return (
      <a {...props}>{display}</a>
  )
}

export const Pp=(props,display)=>{
  return (
      <p {...props}>{display}</p>
  )
}

export const D=(props,children)=>{
  let k=0;
  return (
      <div {...props}>{[...children]}</div>
  )
}

//test
