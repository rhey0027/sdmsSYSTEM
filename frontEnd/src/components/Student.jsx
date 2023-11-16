import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  return (
    <div className='px-5 py-3'>
      <div className="flex justify-center">
        <h1 className=' text-[24px]'>Student Listing</h1>
      </div>
      <Link to='/create'>
      <button>Add Student</button>
      </Link>
    </div>
  )
}

export default Student
