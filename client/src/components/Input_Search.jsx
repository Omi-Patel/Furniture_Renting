import { useState } from "react"
import db from '../../../server/src/model/db.json'

export default function Input_Search() {
    const [search, setSearch] = useState("")

    return (
        <>
            {
                db.filter((val) => {
                    return search.toLowerCase() === ""
                        ? val
                        : val.courseName.toLowerCase().includes(search);
                })
            }
            <input
                className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="search"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Serach"
            ></input>
        </>
    )
}
