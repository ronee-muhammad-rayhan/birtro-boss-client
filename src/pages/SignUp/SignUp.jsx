import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user to database
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log('user added to the database');
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
          })
          .catch(error => console.log(error));
      })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                /* required */
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                /* required */
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    // pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    // pattern: /^[A-Za-z]+$/i
                    // password strength regex javascript
                    // google
                    // ^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$
                    // ^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$
                    // Basic Explanation

                    // (?=(.*RULE){MIN_OCCURANCES,})  
                    /* Detailed Explanation
  
  ^                               start anchor
  (?=(.*[a-z]){3,})               lowercase letters. {3,} indicates that you want 3 of this group
  (?=(.*[A-Z]){2,})               uppercase letters. {2,} indicates that you want 2 of this group
  (?=(.*[0-9]){2,})               numbers. {2,} indicates that you want 2 of this group
  (?=(.*[!@#$%^&*()\-__+.]){1,})  all the special characters in the [] fields. The ones used by regex are escaped by using the \ or the character itself. {1,} is redundant, but good practice, in case you change that to more than 1 in the future. Also keeps all the groups consistent
  {8,}                            indicates that you want 8 or more
  $                               end anchor
  And lastly, for testing purposes here is a robulink with the above regex */
                    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$
                    // ^(?=.*[a-z]{x,})(?=.*[A-Z]{y,})(?=.*[0-9]{z,})(?=.*[!@#\$%\^&\*]).{w,}$
                    // 
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <span className="text-red-600">Email is required</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-600">Password must be 6 characters</span>
                )}
                {errors.password?.type === 'maxLength' && (
                  <span className="text-red-600">Password must be less than 20 characters</span>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">Password must have one uppercase, one lowercase, one number and one special character</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="px-6"><small>Already have an account? <Link to="/login">Login</Link></small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
