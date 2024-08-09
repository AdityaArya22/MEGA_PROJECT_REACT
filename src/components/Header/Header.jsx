import React from 'react'
import { Container, Logo, LogoutBtn } from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const authStatus = useSelector(() => {
    state.auth.status
  })
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus
    },
  ]

  return (

    <header className='p-3 bg-teal-600 shadow-lg'>
      <Container>
        <nav className='flex'>
          <div className="logo mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
               item.active ? (
                <li key={item.name}>
                  <button className='py-1 px-2 bg-teal-900 rounded-lg' onClick={()=>{navigate(item.slug)}}>{item.name}</button>
                </li>
               ) : null
            )}
            {authStatus && (<li>
              <LogoutBtn/>
            </li>)}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header