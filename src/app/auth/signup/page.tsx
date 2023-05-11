// 'use client';
//
// import signUp from "@/firebase/auth/signUp";
// import {useState} from "react";
//
// export default function Page() {
//
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//
//     const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value)
//     }
//
//     const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value)
//     }
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const result = await signUp(email, password);
//         if (result.error) {
//             setMessage("Something went wrong");
//         } else {
//             setMessage("Account made");
//         }
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="email">EMail</label>
//                 <input type="text" id="email" onChange={handleEmail} />
//                 <label htmlFor="password">Password</label>
//                 <input type="text" id="password" onChange={handlePassword}/>
//             </form>
//         </div>
//     )
// }
