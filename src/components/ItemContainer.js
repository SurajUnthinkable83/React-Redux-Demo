import React from 'react'
import { connect } from 'react-redux'
import {buyCake,buyIceCream} from '../redux'
const ItemContainer = (props) => {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyitem}>Buy Items</button>
    </div>
  )
}
const mapStateToProps = (state,ownProps)=>{
     const itemState=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
     return {
        item:itemState
     }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
     const dispatchFun=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
     return {
        buyitem:dispatchFun
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
// if we don't want to change the state then pass the null as the first argument in connect()