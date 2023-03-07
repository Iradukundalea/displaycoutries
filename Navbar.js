import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
    render(){
        return (

     
<nav class="bg-wheat shadow dark:bg-slate-800">
    <div class="bg-slate-400 p-3 m-0">
      <img class="logo" src="" alt=""  with="50px" height="50px"/>
        <Link to ="Home" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</Link>

        <Link to ="About" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About us</Link>

        <Link to ="Services" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Services</Link>

        <Link to ="Login" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Login</Link>

       

              
    </div>
</nav>




        
    )
        
    }
}
export default Navbar;