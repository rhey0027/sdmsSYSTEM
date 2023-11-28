import axios from 'axios';
import{ useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AddStudent() {

  const [data, setData ]= useState({
    name: "",
    email: "",
    password: "",
    course: "",
    image: ""
  })

  const navigate = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('password', data.password);
    formdata.append('course', data.course);
    formdata.append('image', data.image);
    axios.post('http://localhost:4000/create', formdata)
    .then(res => {
      navigate('/student')
     })
    .catch(err => console.log(err))
  }

  return (
    <div className="formContainer mt-12 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-lg">
        <div> 
        <h1 className="text-3xl text-center font-semibold">Add Student</h1>
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
                    onChange={e => setData({ ...data, name: e.target.value})}
                    placeholder="Type your name here"
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
                    onChange={e => setData({ ...data, email: e.target.value})}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                  />
                </div>
                <span className="absolute flex cursor-pointer text-gray-500 right-5 bottom-3">
                </span>
              </div>
                <label className="block text-sm tracking-wide font-semibold mb-2">
                  Password
                </label>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    onChange={e => setData({ ...data, password: e.target.value})}
                    placeholder="password"
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
                    onChange={e => setData({ ...data, course: e.target.value})}
                    placeholder="course"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                  />
                </div>
                <label className="block text-sm tracking-wide font-semibold mb-2">
                  Select an image
                </label>
                <div className="mb-3">
                  <input
                    type="file"
                    onChange={e => setData({ ...data, image: e.target.files[0]})}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                  />
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
              Add record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent
