import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatients from "../pages/AddPatients";
import SearchPatients from "../pages/SearchPatients";



const NavBar = () =>{
    return (
        <>
            <nav className=" flex-col w-48 justify-start items-center float-left h-lvh content-center mr-10">
                <div className="h-[50vh] w-40 grid grid-cols-1 gap-4 
                 place-items-center size-full bg-slate-600 text-white hover:bg-slate-800 hover:w-48 ">
                    <NavLink
                    to='/addPatients'
                    className="h-full w-full"
                    >
                        <div className="grid grid-cols-1 gap-4 place-items-center size-full h-full w-full uppercase font-header">
                            <h1>
                                Add <br></br> Patients
                            </h1>
                            <h1>
                                +
                            </h1>
                        </div>
                    </NavLink>
                </div>
                <div className="h-[50vh] w-40 grid grid-cols-1 gap-4 place-items-center size-full
                bg-neutral-700 hover:bg-neutral-800 hover:w-48 text-white">
                    <NavLink
                    to='/searchPatients'
                    className="h-full w-full"
                    >
                        <div className="grid grid-cols-1 gap-4 place-items-center size-full h-full w-full uppercase font-header">
                            <h1>
                                Search <br></br> Patients
                            </h1>
                            <h1>
                                o
                            </h1>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
