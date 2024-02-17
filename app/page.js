import React from 'react'

const Page = () => {
    return (
        <>
            <h1 className="text-white bg-black flex justify-center items-center py-4 text-5xl font-bold">West Tiwan's To-Do List</h1>
            <form className="flex justify-center items-center max-h-dvh m-20">
                <input type="text" placeholder="Write your task here" className="border-3 px-4 py-2 m-8 text-3xl"/>
                <input type="text" placeholder="Enter description" className="border-3 px-4 py-2 m-8 text-3xl"/>
                <button type="submit" className="rounded bg-black text-white px-4 py-4">Add Task</button>
            </form>
        </>
    )
}
export default Page
