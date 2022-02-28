// import { Formik, Field, Form, FormikHelpers } from 'formik';
// import styles from './login-form.module.css'

// interface Values {
//     username: string;
//     password: string;
// }

// export default function LoginForm() {
//     return (
//       <div className={styles.login_box + ' p-3'}>
//         <h1 className="display-6 mb-3">Login</h1>
//         <Formik
//           initialValues={{
//             username: '',
//             password: '',
//           }}

//           onSubmit={(
//             values: Values,
//             { setSubmitting }: FormikHelpers<Values>
//           ) => {
//             setTimeout(() => {
//               alert(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//             }, 500);
//           }}

//         >
//           <Form>
//             <div className="mb-3">
//               <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp" />
//             </div>
  
//             <div className="mb-3">
//               <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
//             </div>

//             <button type="submit" className="btn btn-primary">Login</button>
//           </Form>
//         </Formik>
//       </div>
//     );
//   };


import React, { useState } from "react";
// import { signIn, getSession } from "next-auth/client";
import { signIn,useSession } from "next-auth/react"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // "username-login" matches the id for the credential
   signIn("Credentials", { username, password });
  };

  return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit">
            Login
          </button>
        </form>
  );
}