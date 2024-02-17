"use client"
import React,{useState} from 'react';

const Page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);
    const submitHandler = (e)=>{
        e.preventDefault();
        setMainTask([...mainTask,{title,desc}]);
        setDesc('');
        setTitle('');
    }
    let renderTask = <h2>No task added</h2>
    renderTask = mainTask.map((t,i)=>{
        return <div className="flex justify-around">
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
        </div>
    })
    return (
        <>
            <h1 className="text-white bg-black flex justify-center items-center py-4 text-5xl font-bold">West Tiwan's To-Do List</h1>
            <form className="flex justify-center items-center max-h-dvh m-20" onSubmit={submitHandler}>
                <input type="text" placeholder="Enter task" className="border-3 px-4 py-2 m-8 text-3xl" value={title} onChange={(elem)=>{
                    setTitle(elem.target.value);
                }}/>
                <input type="text" placeholder="Enter description" className="border-3 px-4 py-2 m-8 text-3xl" value={desc} onChange={(elem)=>{
                    setDesc(elem.target.value);
                }}/>
                <button type="submit" className="rounded bg-black text-white px-4 py-4">Add Task</button>
            </form>
            <hr/>
            <div className="p-8 bg-purple-100">
                <div className="flex justify-around">
                    <h3>Title</h3>
                    <h3>Description</h3>
                </div>
                <ul>
                    {renderTask}
                </ul>
            </div>
        </>
    )
}
export default Page
