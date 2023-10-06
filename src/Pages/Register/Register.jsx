import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Result } from "postcss";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);

        createUser(email, password)
        .then(resutl =>{
            console.log(resutl.user)
        })
        .catch(error =>{
            console.error(error);
        })

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  ">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className="text-2xl font-semibold text-center mt-5">Please Register</h2>

                        <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Photo </span>
                                </label>
                                <input type="text" placeholder="Photo" name="photo" className="input input-bordered" />
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

                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center p-4">All Ready Have Accout?<Link
                            to="/login"
                            className="text-blue-600 font-semibold hover:text-indigo-600">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;