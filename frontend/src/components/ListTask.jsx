import React from 'react'
import axios from 'axios'
import { Pencil, Eye, CalendarMinus, Circle, Check} from 'lucide-react'
import { useState, useEffect } from 'react'
import DeleteTask from './DeleteTask'
function ListTask() {
    const [getTask, setGetTask] = useState([])
    const [getId, setGetId] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)
    
    const [refresh, setRefresh] = useState()
    useEffect(()=>{
        getTasks()
    }, [refresh]);
    const handleRefresh = () => {
        setRefresh(r => !r)
    }
    const getTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/task");
            setGetTask(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.error("Error updating task status:", error);
        };
    };
    const getDone = async (id) => {
        try {
            
            await axios.patch(`http://localhost:5000/task/${id}`, {
                is_done: true
            });
            
        } catch (error) {
            
        };
    };
    
  return (
    <div className='container h-100 d-flex justify-content-center align-items-center'>
        <div className='row w-100'>
            <div className='col-md-6 offset-md-3'>
                <div className='p-4 bg-white rounded'>
                    <h1>Hello</h1>
                
                    {console.log(getTask)}
                    {/* {getTask.length===0? <p>No Task</p>: */}
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Check</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getTask.map((id) =>(
                        
                                <tr key={id.id}>
                                    <th scope="row" className={id.is_done === true?"table-success": ""}>
                                        <span onClick={()=>{ getDone(id.id); handleRefresh()}}
                                        >{id.is_done===true?<Check/>:<Circle/>}</span></th>
                                    <td className={id.is_done === true?"table-success": ""}>{id.title}</td>
                                    <td className={id.is_done === true?"table-success": ""}>{id.is_done === true? "Done": "Undone"}</td>
                                    <td className={id.is_done === true?"table-success": ""}>
                                        <button className={`bg-info `}  >{<Eye/>}</button>
                                        <button className='bg-warning' disabled={id.is_done === true? "disabled":""}>{<Pencil/>}</button>
                                        <button className='bg-danger' disabled={id.is_done === true? "disabled":""}
                                                onClick={() =>{setDeleteModal(true); setGetId(id.id)}}>{<CalendarMinus/>}</button>
                                    </td>
                                </tr>  
                        
                            ))}
                                                      
                        </tbody>
                    </table>
                    {/* } */}
                    <DeleteTask deleteShow ={deleteModal} deleteId ={getId} setDelete={setDeleteModal} handleRefresh={handleRefresh}/>
                    
                </div>
            </div>

        </div>

    </div>
  )
}

export default ListTask