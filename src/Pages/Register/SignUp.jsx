import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contacts/AuthProvider/AuthProvider";

const SignUp = () => {
  const {createUser}=useContext(AuthContext)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser( email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(err=>console.log(err))
  };
  return (
    <div className="hero w-full my-20">
      <form
        onSubmit={handleLogin}
        className="hero-content flex-col gp-10 grid md:grid-cols-2 lg:flex-row"
      >
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Register</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name='password'
                placeholder="******"
                className="input input-bordered"
                required

              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className="text-center ">
              New to Genius Car?
              <Link to="/login" className="text-orange-600 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
