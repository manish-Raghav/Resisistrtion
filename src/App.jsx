import { useEffect, useState } from 'react'
// import { LockClosedIcon } from '@heroicons/react/solid'
import { useFormik } from 'formik'
import { Myschema } from './shemma'


const initialValues ={
  name: "",
  Lastname:"",
  email :"",
  password : "",

}



function App() {
  const [nm, setname] = useState(0)
  const [Lstname , setLastname] = useState("");
  const [el , setemail] = useState("");
  const [pass , setpass] = useState("");
 
   
  const {values ,errors,touched ,handleBlur,handleChange,handleSubmit} =  useFormik({
    initialValues:initialValues,
    validationSchema:Myschema,

    onSubmit:(vl) =>{
        console.log("there i sa value" , vl); 
    }
   })
   useEffect(() =>{
     setname(values.name);
     setLastname(values.Lastname);
     setemail(values.email);
     setpass(values.password);

   },[values.name,values.Lastname,values.email,values.password])
   
     console.log(nm ,Lstname , el ,pass);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sign UP
                </h1>
                <form className="mt-6"  onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Firstname
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700
                             bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring
                               focus:ring-opacity-40"
                               name='name'
                             value={values.name}
                             onChange={handleChange}
                             onBlur={handleBlur}  
                        />
                      {errors.name && touched.name ? (<p className='text-red-500'>
                         Invalid Name
                      </p>) : null}  
                    </div>
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Lastname
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name='Lastname'
                             value={values.Lastname}
                             onChange={handleChange}
                             onBlur={handleBlur}

                        />
                         {errors.Lastname && touched.Lastname ? (<p className='text-red-500'>
                         Please write morethan 2 char.
                      </p>) : null} 
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400
                             focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                             name='email'
                          
                             value={values.email}
                             onChange={handleChange}
                             onBlur={handleBlur}

                        />
                         {errors.email && touched.email ? (<p className='text-red-500'>
                         Plase write valid Email
                      </p>) : null} 
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700
                             bg-white border rounded-md focus:border-indigo-400
                              focus:ring-indigo-300 focus:outline-none focus:ring 
                              focus:ring-opacity-40"
                              name='password'
                              value={values.password}
                             onChange={handleChange}
                             onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (<p className='text-red-500'>
                         Plase write valid Password
                      </p>) : null} 
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
  )
}

export default App
