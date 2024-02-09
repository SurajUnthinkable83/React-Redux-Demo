import React from 'react'
import { useSelector } from 'react-redux'

const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.numOfCakes);
    const buyCake=useSelector(state=>state.buyCake);
  return (
    <div>
    <h2>Number of cakes-{numOfCakes}</h2>
    <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer