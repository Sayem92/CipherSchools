import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoaderSpin } from "../loader/Loader";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const { signIn, googleLogin, forgetPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // const location = useLocation();
  // const from = location?.state?.from?.pathname || '/';
  // const navigate = useNavigate();

  // if (token) {
  //     navigate(from, { replace: true })
  // }

  // user login-------------------
  const handleLogin = (data) => {
    setLoginError("");
    setLoading(true);

    // toast.success('Login Successfully!');
    // navigate('/')
    // set for user token-------------

    console.log(data);
    setLoading(false);
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 shadow-xl mx-2">
        <h2 className="text-4xl py-4 text-center text-info font-bold">Sign In</h2>
        <p>
          <small>Email:</small>{" "}
          <strong className="ml-2 md:ml-16"> waliur@gmail.com</strong>
        </p>
        <p>
          <small>Password:</small> <strong className="ml-10"> sayemA1!</strong>
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-x">
            <label className="label">
              {" "}
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="********"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <button
            className="mx-0  mt-5 btn btn-accent text-white w-full max-w-xs"
            type="submit"
          >
            {loading ? <LoaderSpin className={"text-white"} /> : "Sign In"}
          </button>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="my-2 ">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
