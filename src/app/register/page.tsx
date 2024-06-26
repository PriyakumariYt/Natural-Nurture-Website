// "use client";
// import Link from "next/link";
// import React, {useEffect} from "react";

// import { useRouter } from 'next/navigation';
// // import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { AxiosError } from "axios";

// const RegisterForm = () => {
//   const router = useRouter();
//   // const navigate = useNavigate()
//   const [user, setUser] = React.useState({
//     username: "",
//       email: "",
//       password: "",
    
//   })
//   const [buttonDisabled, setButtonDisabled] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   const onSignup = async () => {
//       try {
//           setLoading(true);
//           const response = await axios.post("/api/register", user);
//           toast.success("Register Successfull")
//           console.log("resigester success", response.data);
//           // navigate("/login")
//           alert("register succesfull")
//           router.push("/login");
          
//       } catch (error:any) {
//           console.log("Signup failed", error.message);
          
//           toast.error(error.message);
//           alert("register failed")
//       }finally {
//           setLoading(false);
//       }
//   }

//   useEffect(() => {
//       if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//           setButtonDisabled(false);
//       } else {
//           setButtonDisabled(true);
//       }
//   }, [user]);
  
//   React.useEffect(() => {
//     setButtonDisabled(!(user.email && user.password && user.username));
//   }, [user]);


//   return (
//     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <img className="mx-auto h-10 w-auto" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png" alt="Your Company" />
//         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">Register to your account</h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-6" action="#" method="POST">
//         <div>
//             <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-300">User Name</label>
//             <div className="mt-2">
//               <input   
              
//               id="username"
//             type="text"
//             value={user.username}
//             onChange={(e) => setUser({...user, username: e.target.value})}
//             placeholder="username"
//             required className="w-full text-sm bg-gray-100 text-gray-900 px-4 py-4 rounded-md outline-blue-600" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Email address</label>
//             <div className="mt-2">
//               <input    
//               id="email"
//             type="text"
//             value={user.email}
//             onChange={(e) =>
//               setUser({...user, email: e.target.value})}
//             placeholder="email"
//              autoComplete="email" 
//              required className="w-full text-sm bg-gray-100 text-gray-900 px-4 py-4 rounded-md outline-blue-600" />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">Password</label>
//             </div>
//             <div className="mt-2">
//               <input         
//               id="password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({...user, password: e.target.value})}
//             placeholder="password" 
//             required className="w-full text-sm bg-gray-100 text-gray-900 px-4 py-4 rounded-md outline-blue-600" />
//             </div>
//           </div>

        
//           <div>
//             <button
//              onClick={onSignup} 
//              type="submit" className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Register In</button>
//           </div>
//         </form>

     
//       </div>
//     </div>
//   );
// };

// export const LinkButton: React.FC<{ href: string; text: string }> = ({ href, text }) => {
//   return (
//     <a href={href} className="font-semibold leading-6 text-cyan-600 hover:text-indigo-500">{text}</a>
//   );
// };

// export default RegisterForm;


"use client";
import Link from "next/link";
import React, {useEffect} from "react";

import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const RegisterForm= () => {
  const router = useRouter();
  // const navigate = useNavigate()
  const [user, setUser] = React.useState({
    username: "",
      email: "",
      password: "",
    
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/register", user);
          toast.success("Register Successfull")
          console.log("resigester success", response.data);
          // navigate("/login")
          alert("register succesfull")
          router.push("/login");
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          
          toast.error(error.message);
          alert("register failed")
      }finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
          setButtonDisabled(false);
      } else {
          setButtonDisabled(true);
      }
  }, [user]);

  React.useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/logo-regular-free-img.png" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-300">UserName</label>
            <div className="mt-2">
              <input   
              
              id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
             required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Email address</label>
            <div className="mt-2">
              <input    
              id="email"
            type="text"
            value={user.email}
            onChange={(e) =>
              setUser({...user, email: e.target.value})}
            placeholder="email"
             autoComplete="email" 
             required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">Password</label>
            </div>
            <div className="mt-2">
              <input         
              id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

         

          <div>
            <button
             onClick={onSignup} 
             type="submit" className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Sign in</button>
          </div>
        </form>

       
      </div>
    </div>
  );
};


export default RegisterForm;

