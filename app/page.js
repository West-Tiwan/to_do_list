"use client"
import React,{useState} from 'react';

const Page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <>
            <h1 className="text-white bg-black flex justify-center items-center py-4 text-5xl font-bold">West Tiwan's To-Do List</h1>
            <form className="flex justify-center items-center max-h-dvh m-20">
                <input type="text" placeholder="Enter task" className="border-3 px-4 py-2 m-8 text-3xl" value={title} onChange={(elem)=>{
                    setTitle(elem.target.value);
                }}/>
                <input type="text" placeholder="Enter description" className="border-3 px-4 py-2 m-8 text-3xl" value={desc} onChange={(elem)=>{
                    setDesc(elem.target.value);
                }}/>
                <button type="submit" className="rounded bg-black text-white px-4 py-4">Add Task</button>
            </form>
        </>
    )
}
export default Page
