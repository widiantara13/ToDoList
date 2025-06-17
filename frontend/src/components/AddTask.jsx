import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const addTask = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/task",{
                title : title,
                desc:description
            })
            setTitle("");
            setDescription("");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    
        <div className='bg-dark' style={{height:'100vh'}}>
         <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
            <div className="col-md-6 offset-md-3">
                <div className="p-4 bg-white rounded">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={addTask}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text"
                                   className="form-control"
                                   id="exampleFormControlInput1"
                                   placeholder="Add title"
                                   value={title}
                                   onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control"
                                      id="exampleFormControlTextarea1"
                                      rows="3"
                                      value={description}
                                      onChange={(e)=>setDescription(e.target.value)}></textarea>
                            </div>
                        <button type="submit" className="btn btn-success d-block mx-auto">Add</button>
                         
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default AddTask