import React,{useEffect} from 'react'
import {connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({userData,fetchUsers}) {
     console.log(userData);
    useEffect(()=>{
        fetchUsers()
    },[])

  return (
    userData.loading?(<h2>Loading...</h2>):
    userData.error?(<h2>{userData.error}</h2>):(
    <div>
        <h2>Users Data</h2>
        <ul>
            {userData&&userData.map(user=>
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    </div>)
  )
}
const mapStateToProps = (state)=>{
    return {
        userData:state.user.users
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)