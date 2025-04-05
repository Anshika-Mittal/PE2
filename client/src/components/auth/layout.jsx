import { Outlet } from "react-router-dom";
import logo from "@/components/shopping-view/logo.jpeg";


function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 animate-soft-pulse  ">
  {/* Left Panel with Logo & Welcome Text */}
  <div className="hidden lg:flex items-center justify-center w-1/2 px-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-opacity-50 z-0" />
    <div className="text-center z-10">
      <img
        src={logo}
        alt="Equip-E-Mart Logo"
        className="w-32 h-32 mx-auto mb-6 animate__animated animate__fadeInDown"
      />
      <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight animate__animated animate__fadeIn animate__delay-1s">
        <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
          WELCOME TO
        </span>
        <br />
        <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-600 text-transparent bg-clip-text">
          EQUIP-E-MART
        </span>
      </h1>
      <p className="text-2xl text-cyan-500 mt-4 animate__animated animate__fadeInUp animate__delay-2s">
        Your trusted partner in{" "}
        <span className="font-semibold text-teal-500">revolutionizing</span> hospital procurement.
      </p>
    </div>
  </div>

  {/* Right Panel with Outlet/Form */}
  <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-teal-100 hover:to-indigo-100">
      <Outlet />
    </div>
  </div>
</div>

  );
}

export default AuthLayout;
