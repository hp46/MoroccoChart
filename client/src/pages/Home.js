import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPatients from "../pages/AddPatients";
import SearchPatients from "../pages/SearchPatients";
import searchimage from "../images/computer-01.png"
import addimage from "../images/computer-02.png"

export default function Home() {
    return (
        <>
            <nav className=" absolute flex w-screen items-center h-lvh content-center">
                <div className="h-screen  grid grid-cols-1 gap-4 
                 place-items-center size-full bg-slate-600 text-white hover:bg-slate-800 ">
                    <NavLink
                    to='/addPatients'
                    className="h-full w-full"
                    >
                        <div className="grid grid-cols-1 gap-4 place-items-center size-full h-full w-full uppercase font-header">
                            <h1 className="font-header uppercase text-5xl font-bold">
                                Add <br></br> Patients
                            </h1>
                            <img src={addimage} alt="image"/>
                            <h1 className="font-header uppercase text-5xl font-bold">
                                +
                            </h1>
                        </div>
                    </NavLink>
                </div>
                <div className="h-h-screen  grid grid-cols-1 gap-4 place-items-center size-full
                bg-neutral-700 hover:bg-neutral-800  text-white">
                    <NavLink
                    to='/searchPatients'
                    className="h-full w-full"
                    >
                        <div className="grid grid-cols-1 gap-4 place-items-center size-full h-full w-full uppercase font-header">
                            <h1 className="font-header uppercase text-5xl font-bold">
                                Search <br></br> Patients
                            </h1>
                            <img src={searchimage} alt="image"/>
                            <h1 className="font-header uppercase text-5xl font-bold">
                                o
                            </h1>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}