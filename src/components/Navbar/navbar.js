import React from "react";
import {BiChevronRight, BiSearch} from "react-icons/bi";
import {FormControl,Form} from "react";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <span className="text-gray-400 text-xs flex items-center">
         Bhubaneswar
         <BiChevronRight />
      </span>
   </div>
   <div className="w-8 h-8">
      <BiSearch className="w-full h-full" />
   </div>
</div>
      

    </>
  );
};
const NavMd = () => {
  return (
    <>
    <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full "
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
    </>
  );
};


const NavLg = () => {
  return(
    <>
    <div className="flex bg-slate-800 w-full">
    <div className="w-40" >
      <img src="https://logodix.com/logo/2011021.png" />
    </div>

      <div className="w-full rounded-lg border-black px-5 py-5 mx-3 my-3">
        <input
            type="search"
            id="header-search"
            className="w-full px-2 py-2"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            
        />
      </div>
      <div className="">
      <button variant="danger">Sign in</button>
      </div>
    </div>
    
       
    </>
  )
};



const Navbar = () => {
  return (
    <>
     <nav>
        <div className="md:hidden">{/*Mobile Screen*/}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">{/*Tablet Screen*/}
        <NavMd />
        </div>
        <div className="hidden lg:flex ">{/*Large Screen*/}
          <NavLg />
        </div>
     </nav>
    </>
  );
};

export default Navbar;
