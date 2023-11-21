import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'


const Login = () => {
  const [type, setType ] = useState('password')
  const [icon, setIcon ] = useState(faEyeSlash)
  const [ error, setError ] = useState('')

  const navigate = useNavigate()

  const showPassword = () => {
    if(type === 'password') {
      setType('text')
      setIcon(faEye)
    }
  };
  const hidePassword = () => {
    if(type === 'text') {
      setType('password')
      setIcon(faEyeSlash)
    }
  };
  const [ values, setValues ] = useState({
    email: '',
    password: ''
});

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/login', values)
   .then( res => {
      if(res.data.Status === 'Success') {
            navigate('/dashboard')
      }else {
        setError(res.data.Error)
      }  
    })
    .catch( err => console.log(err))

  };
  return (

    <div className="flex flex-col header">
      <div className="mt-6 text-center sdms">
      <p className="psdms fw-lighter fs-2 text-light">STUDENT DATABASE MANAGEMENT SYSTEM</p>
      </div>
      {/* container for form submission starts here */}
      <div className="formContainer mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow-lg">
        <h1 className="text-3xl text-center font-semibold">LOGIN</h1>
        
          <form onSubmit={handleSubmit}>
            <div className='relative'>
              <label className="block text-sm tracking-wide font-semibold mb-2">
                Email address
              </label>
              <div className="mb-3">
                <input
                  type='email'
                  //value='email'
                  //value={email}
                  onChange={e => setValues({ ...values, email: e.target.value})}
                  //onChange={(e) => setEmail(e.target.value)} 
                  name="email"
                  placeholder="Type your email here"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                />
              </div>
              <label className="block text-sm tracking-wide font-semibold mb-3">
                Password
              </label>
              <div className="mb-3">
                <input
                  type={type}
                  //value='password'
                  //value={password}
                  onChange={e => setValues({ ...values, password: e.target.value})}
                  //onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Type your password here"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-200 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-blue-50"
                />
              </div>
              <span className='absolute flex cursor-pointer text-gray-500 right-5 bottom-3'>
              <FontAwesomeIcon
                onClick={showPassword}
                onMouseOut={hidePassword}
                icon={icon}
                className='text-md'
              />
              </span>
            </div>
            {/* remembering your account */}
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="h-4 w-4 text-indigo-300 focus:ring-indigo-400"
                />
                <label className="ml-2 block text-sm ">Remember me</label>
              </div>
              <div className="">
                <Link to="/register" className="text-sm text-indigo-600">
                  Forgot your password?
                </Link>
              </div>
            </div>
            {/* { isLoading && <Loader />} */}
            {/* button submission */}
            <div className="submitBtn mt-5">
              <button
                type="submit"
                name="button"
                className="relative w-full flex justify-center bg-indigo-400 text-white py-3 px-4 border border-transparent text-md focus:outline-none rounded-md hover:bg-indigo-600 duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            <div className='flex flex-row justify-between pt-3'>
              <h1 className='text-lg'>Don&#8242;t have an account?</h1>
              <Link
                to="/register"
                className="text-lg text-indigo-600 font-bold"
              >
                Sign up
              </Link>
            </div>
            <span className='text-red-500 text-center flex flex-col rounded-md w-full font-bold text-xl p-2'>{error}</span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
