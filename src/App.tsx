import { LogOut, Mail, Lock, EyeOff } from "lucide-react";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="card w-md bg-neutral-content/50 rounded-4xl shadow-lg">
          <button className="flex items-center justify-center btn-ghost shadow-lg w-16 h-16 rounded-2xl mx-auto mt-8 cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <LogOut size={28} color={"#322f2f"} strokeWidth={2.5} />
          </button>
          <div className="flex flex-col items-center justify-between mt-8 mx-auto w-72 gap-2">
            <p className="text-base-100 text-2xl font-bold tracking-tight">
              Sign in with email
            </p>
            <p className="text-base-100 text-sm text-center">
              Enter your account to use all of our coolest features.
            </p>
          </div>
          <section className="mt-6 flex flex-col items-center gap-4 mx-auto w-80">
            <label className="input input-ghost rounded-xl border-none shadow-xl outline-none bg-transparent">
              <Mail size={18} color={"#322f2f"} />
              <input
                type="text"
                placeholder="Email"
                className="input input-ghost placeholder:text-gray-600 outline-none px-1 text-base-100 bg-transparent"
              />
            </label>
            <label className="input input-ghost rounded-xl border-none shadow-xl outline-none bg-transparent">
              <Lock size={18} color={"#322f2f"} />
              <input
                type="password"
                placeholder="Password"
                className="input input-ghost placeholder:text-gray-600 outline-none px-1 text-base-100 bg-transparent"
              />
              <EyeOff size={18} color={"#322f2f"} />
            </label>
            <button className="btn btn-link text-base-100 mr-0 mx-auto p-0 h-fit">
              Forgot password?
            </button>
          </section>
          <button className="btn rounded-xl mt-4 mx-auto w-80 hover:bg-base-100 hover:-translate-y-0.5 hover:scale-101 transition-transform duration-200">Sign in</button>
          <div className="flex items-center gap-3 my-6 w-80 mx-auto">
            <div className="h-px flex-1 bg-base-300"></div>
            <span className="text-xs text-base-100">Or sign in with</span>
            <div className="h-px flex-1 bg-base-300"></div>
          </div>
          <section className="mx-auto w-80 flex flex-col items-ceter gap-4 mb-8">
            <button className="btn bg-white text-black border-[#e5e5e5] rounded-xl hover:bg-neutral-content hover:-translate-y-0.5 hover:scale-101 transition-transform duration-200">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <button className="btn bg-black text-white border-black rounded-xl hover:-translate-y-0.5 hover:scale-101 transition-transform duration-200">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
