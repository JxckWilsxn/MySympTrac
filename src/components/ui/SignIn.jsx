import { useState } from "react";

export const SignIn = () => {
    const [signUp, setSignUp] = useState(false);

    return (
        <div id="sign-in-card" className="flex rounded-xl mx-auto w-100 min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="/src/assets/mysymptracLogo.jpg" alt="MySympTrac" className="mx-auto h-28 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-deep-purple">Sign in to your account</h2>
            </div>

            <div className="mt-10 w sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div id="email-field">
                        <label for="email" className="block text-sm/6 font-medium text-deep-purple">Email address</label>
                        <div className="mt-2 border border-gray-200 rounded-xl">
                            <input id="email" type="email" name="email" required autocomplete="email" placeholder="Email@example.com" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6  border-gray-200 p-2" />
                        </div>
                    </div>

                    <div id="password-field">
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm/6 font-medium text-deep-purple">Password</label>
                            <div className="text-sm">
                                <a href="#" className={`${signUp ? "hidden" : ""} font-semibold text-light-pink hover:text-magenta-pink`}>Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2 border border-gray-200 rounded-xl">
                            <input id="password" type="password" name="password" required autocomplete="current-password" placeholder="Password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-royal-purple sm:text-sm/6" />
                        </div>
                    </div>

                    {signUp && (
                        <>
                            <div id="confirm-password-field">
                                <label for="confirm-password" className="block text-sm/6 font-medium text-deep-purple">Confirm Password</label>
                                <div className="mt-2 border border-gray-200 rounded-xl">
                                    <input id="confirm-password" type="password" name="confirm-password" required autocomplete="current-password" placeholder="Confirm Password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-royal-purple sm:text-sm/6" />
                                </div>
                            </div>

                            <div id="terms-and-conditions" className="flex items-center">
                                <input id="terms-and-conditions" type="checkbox" name="terms-and-conditions" required className="h-4 w-4 rounded border-gray-300 text-royal-purple focus:ring-royal-purple" />
                                <label for="terms-and-conditions" className="ml-2 block text-sm/6 text-gray-700">
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
        </div>
    )
}