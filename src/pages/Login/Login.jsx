import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        }
    );
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.email);
        console.log(formData.password);

    };
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:w-1/2 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl d:w-1/2 font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" value={formData.password} className="input input-bordered" onChange={handleChange} required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* recaptcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name="captcha" placeholder="tyoe the captcha" className="input input-bordered" />
                            <button onClick={handleValidateCaptcha}
                                className='btn btn-outline btn-xs mt-2'>Validate Captcha</button>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
