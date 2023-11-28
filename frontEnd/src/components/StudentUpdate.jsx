import axios from 'axios';
import{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function StudentUpdate() {

  const [data, setData ]= useState({
    name: "",
    course: "",
    email: "",
  })

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:4000/get/' + id)
    .then(res => {
      setData({...data, name: res.data.Result[0].name,
        course: res.data.Result[0].course,
        email: res.data.Result[0].email,  
      })
    })
    .catch(err => console.log(err))
  },[])
  const handleSubmit =(e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/update/' + id, data)
    .then(res => {
      if(res.data.Status === 'Success') {
        navigate('/student')
      }
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="formContainer mt-12 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-lg">
        <div> 
        <h1 className="text-3xl text-center font-semibold">Update Student Record</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
              <div className="">
                <label className="block text-sm tracking-wide font-semibold mb-2">
                  Name
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    onChange={e => setData({ ...data, name: e.target.value})} value={data.name}
                    placeholder="Type your name here"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                  />
                </div>
                <label className="block text-sm tracking-wide font-semibold mb-2">
                  Course
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    name="course"
                    onChange={e => setData({ ...data, course: e.target.value})} value={data.course}
                    placeholder="Type your course here"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                  />
                </div>
                <label className="block text-sm tracking-wide font-semibold mb-2">
                  Email
                </label>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email here"
                    onChange={e => setData({ ...data, email: e.target.value})} value={data.email}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                  />
                </div>
                <span className="absolute flex cursor-pointer text-gray-500 right-5 bottom-3">
                </span>
              </div>
                <span className="absolute flex cursor-pointer text-gray-500 right-5 bottom-3">
                </span>
          </div>
          <div className="submitBtn mt-2">
            <button
              type="submit"
              name="button"
              className="relative w-full flex justify-center bg-indigo-400 text-white py-3 px-4 border border-transparent text-md focus:outline-none rounded-md hover:bg-indigo-600 duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update record
            </button>
          </div>
        </form>
      </div>
    </div>
  ); 
}

export default StudentUpdate

