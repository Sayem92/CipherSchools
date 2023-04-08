import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoaderSpin } from "../loader/Loader";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const [signUpError, setSignUpError] = useState("");
  const imageHostKey = process.env.REACT_APP_IMGBB_key;
  const [loading, setLoading] = useState(false);


  

  // user sign up---------
  const handleSignUp = (data) => {
    setLoading(true);



    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {


          // save data -------------
          setLoading(false);
          console.log(data);
          setSignUpError('')
        }
      });

  };

 
  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 shadow-xl mx-2">
        <h2 className="text-4xl py-4 font-bold text-center text-info">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-x">
            <label className="label">
              {" "}
              <span className="label-text ">First Name</span>
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: "Please enter your first name",
              })}
              className="input input-bordered  w-full max-w-xs"
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-x">
            <label className="label">
              {" "}
              <span className="label-text ">Last Name</span>
            </label>
            <input
              type="text"
              {...register("lastName", {
                required: "Please enter your last name",
              })}
              className="input input-bordered  w-full max-w-xs"
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-600">{errors.lastName.message}</p>
            )}
          </div>

          {/* image */}
          <div className="form-control w-full max-w-x">
            <label className="label">
              {" "}
              <span className="label-text ">Your Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Please select your photo",
              })}
              className="file-input file-input-info file-input-bordered  w-full max-w-xs"
              placeholder="Your photo"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-x">
            <label className="label">
              {" "}
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered  w-full max-w-xs"
              placeholder="Your email"
            />

            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
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
                  message: "Password is must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered  w-full max-w-xs"
              placeholder="********"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            className="mx-0 mt-5 btn btn-accent text-white w-full max-w-xs"
            type="submit"
          >
            {loading ? <LoaderSpin className={"text-white"} /> : "Sign Up"}
          </button>

          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
        </form>

        <p className="my-3 text-center ">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Please login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
