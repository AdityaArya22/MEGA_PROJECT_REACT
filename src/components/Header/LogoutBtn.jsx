import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/config"
import {logout} from "../../store/authSlice"
const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })

    }
  return (
    <button className='bg-emerald-600 px-4 py-2 rounded-lg text-white hover:bg-emerald-400'>Logout</button>
  )
}

export default LogoutBtn