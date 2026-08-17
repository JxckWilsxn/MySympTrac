import { useState } from "react";
import logo from "../../assets/mysymptracLogo.jpg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const SignIn = () => {
    const [signUp, setSignUp] = useState(false);

    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // Regex test
    const validatePassword = (value) =>  {
        const isValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        .test(value);   // Tests password input if it matches correct structure with true/false

        setPasswordValid(isValid);  // Update setPasswordValid with boolean test repsonse
        return isValid;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target; // JSX input tag properties
        
        setFormInput((prev) => ({
            ...prev,    // Copy existing/original formInput states
            [name]: value,  // Update value matching name input property attribute
        }));

        if (name === "password") {
            if (value === "") {
                setPasswordValid(true); 
            } else {
                validatePassword(value); // Check against regex test
            }
            // Run check if user on register page and if confirm password input contains text
            if (signUp && formInput.confirmPassword !== "") {
                setPasswordsMatch(value === formInput.confirmPassword);
            }
        }

        // Confirm password matching logic
        if (name === "confirmPassword") {
            if (value === "") {
                setPasswordsMatch(true);
            } else {
                setPasswordsMatch(value === formInput.password);
            }
        }
    };

    return (
        <section id="sign-in-card" className="flex rounded-xl mx-auto w-full min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src={logo} alt="MySympTrac" className="mx-auto h-28 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-deep-purple">Sign in to your account</h2>
            </div>

            <div className="mt-10 w sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div id="email-field">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-deep-purple">Email address</label>
                        <div className="flex items-center mt-2 border border-gray-200 rounded-xl bg-white/5 relative focus-within:ring-2 focus-within:ring-royal-purple">
                            <input id="email" type="email" name="email" value={formInput.email} onChange={handleInputChange} required autoComplete="email" placeholder="Email@example.com" className="block w-full rounded-xl bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 sm:text-sm/6  border-gray-200 p-2" />
                        </div>
                    </div>

                    <div id="password-field">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-deep-purple">Password</label>
                            <div className="text-sm">
                                <a href="#" className={`${signUp ? "hidden" : ""} font-semibold text-light-pink hover:text-magenta-pink`}>Forgot password?</a>
                            </div>
                        </div>
                        <div className="flex relative items-center mt-2 border border-gray-200 rounded-xl bg-white/5 focus-within:ring-2 focus-within:ring-royal-purple">
                            <input id="password" type={passwordVisible ? "text" : "password"} name="password" value={formInput.password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" onChange={handleInputChange} required autoComplete="current-password" placeholder="Password" className="block w-full rounded-xl bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 sm:text-sm/6  border-gray-200 p-2" />
                            <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 flex items-center text-gray-400">{passwordVisible ? <IoMdEye /> : <IoMdEyeOff />}</button>
                        </div>
                        <p id="error-message" className={`${passwordValid ? "hidden" : "block"} mt-2 text-red-500 text-sm`}>Password must be at least 8 characters long and contain an uppercase, lowercase, number, and special character.</p>
                    </div>

                    {signUp && (
                        <>
                            <div id="confirm-password-field">
                                <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-deep-purple">Confirm Password</label>
                                <div className="flex relative items-center mt-2 border border-gray-200 rounded-xl bg-white/5 focus-within:ring-2 focus-within:ring-royal-purple">
                                    <input id="confirm-password" type={passwordVisible ? "text" : "password"} name="confirmPassword" value={formInput.confirmPassword} onChange={handleInputChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required autoComplete="current-password" placeholder="Confirm Password" className="block w-full rounded-xl bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 sm:text-sm/6  border-gray-200 p-2" />
                                    <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 flex items-center text-gray-400">{passwordVisible ? <IoMdEye /> : <IoMdEyeOff />}</button>
                                </div>
                                  <p id="match-error-message" className={`${passwordsMatch ? "hidden" : "block"} mt-2 text-red-500 text-sm`}>Password and confirm password should match.</p>
                            </div>

                            <div id="terms-and-conditions" className="flex items-center">
                                <input id="terms-and-conditions" type="checkbox" name="terms-and-conditions" required className="h-4 w-4 rounded border-gray-300 text-royal-purple focus:ring-royal-purple" />
                                <label htmlFor="terms-and-conditions" className="ml-2 block text-sm/6 text-gray-700">
                                    I agree to the <a href="#" className="font-semibold text-light-pink hover:text-magenta-pink">Terms and Conditions</a>
                                </label>
                            </div>
                        </>

                    )}

                    <div id="submit-button">
                        <button type="submit" className="flex w-full justify-center rounded-md bg-royal-purple px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-deep-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-purple active:bg-deep-purple">Sign in</button>
                    </div>
            
                    <div id="sign-up-link" className="text-sm/6 text-center text-gray-500">
                       {signUp ? "Already have an account?" : "Don't have an account?"} <button type="button" onClick={() => setSignUp(!signUp)} className="font-semibold text-light-pink hover:text-magenta-pink">{signUp ? "Log in" : "Sign up"}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}