import React from 'react'
import {buyIceCream} from '../redux'
import {connect} from 'react-redux'


const IceCreamContainer = (props) => {
  return (
    <div>
        <h2>Number of iceCream-{props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
const ConnectedIceCreamContainer= connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);

export default ConnectedIceCreamContainer;
