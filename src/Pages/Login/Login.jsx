import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location form login page',location);

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email =  form.get('email');
        const password =  form.get('password');


        signIn(email, password)
        .then(result =>{
            console.log(result.user);

            navigate(location?.state? location.state: '/')
        })
        .catch(error => {
            console.log(error);
        })
        // console.log(form.get('password'));
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  ">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className="text-xl font-semibold text-center py-5">Please Login</h2>

                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-green-700 hover:text-blue-600">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center p-4">Have No Accout?<Link
                         to="/register"
                         className="text-blue-600 font-semibold hover:text-indigo-600">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;