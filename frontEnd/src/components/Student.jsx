import React from 'react'
import { Link } from 'react-router-dom'
import{ useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Student.css'

function Student() {
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:4000/getStudent')
    .then(res => {
      if(res.data.Status === 'Success')
      setData(res.data.Result)
      //console.log('created successfully!')
    })
    .catch(err => console.log(err))
  })

  const handleDelete =(id) => {
    axios.delete('http://localhost:4000/delete/' + id)
    .then(res => {
      if(res.data.Status === 'Success') {
        window.location.reload(true);
      }
    })
    .catch(err => console.log(err))
  };
  return (
    <div className='px-5 py-3'>
      <div className="flex justify-center">
        <h1 className=' text-[24px]'>Student Listing</h1>
      </div>
      <Link to='/create'>
      <button className='bg-yellow-400 py-1 px-3 rounded-md shadow-md font-semibold text-black hover:bg-yellow-300 duration-200'>Add Student</button>
      </Link>
      <div className='mt-4'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Course</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) =>{
              return <tr key={index}>
                <td>{student.name}</td>
                <td>{
                  <img src={`http://localhost:4000/images/`+ student.image} alt='photo' className='stud_photo'/>}
                </td>
                <td>{student.course}</td>
                <td>{student.email}</td>
                <td className='items-end'>
                  <Link to={`/studentUpdate/` + student.id}  className='bg-green-600 no-underline text-black rounded-md py-1 px-4'>edit
                  </Link>
                  <button onClick={e => handleDelete(student.id)} className='bg-red-600 text-white rounded-md py-1 px-3 ml-4'>delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Student
