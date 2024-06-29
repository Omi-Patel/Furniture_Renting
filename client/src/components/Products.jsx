// import ProductOne from "./Product-Single"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProductThree() {
    return (
        <>
        <h1 className="text-center text-3xl font-bold">Featured Categories</h1>
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-md border">
                    <img
                        src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Laptop"
                        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                    />
                    <div className="p-4" >
                        <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
                        <p className="mt-3 text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p>
                        <div className="mt-4">
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #Sneakers
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #Nike
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                #Airmax
                            </span>
                        </div>
                        <button
                            type="button"
                            className="mt-4 w-full text-lg font-bold rounded-xl bg-black px-4 py-4 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
