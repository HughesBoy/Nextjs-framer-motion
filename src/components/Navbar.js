import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="navbar">

      <div className="nav-item">
        <Link href={"/"}>home</Link>
      </div>
      <div className="nav-item">
        <Link href={`/about`}>animation 1</Link>
      </div>
      <div className="nav-item">
        <Link href={'/animations'}>animations</Link>
      </div>
      <div className="nav-item">
        <Link href={'/repos'}>users(Server component fetch)</Link>
      </div>
      <div className="nav-item">
        <Link href={'/people'}>peopleServer component fetch)</Link>
      </div>
      <div className="nav-item">
        <Link href={'/employees'}>employeesClient fetch)</Link>
      </div>
    </div>
  )
}

export default Navbar