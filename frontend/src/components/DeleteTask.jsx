import React from 'react'
import axios from 'axios';
function DeleteTask({deleteShow, deleteId, setDelete, handleRefresh}) {
    const deleteTask = async (id) => {
            try {
                await axios.delete(`http://localhost:5000/task/${id}`);
                if(handleRefresh) handleRefresh()
            } catch (error) {
                
            }
    }
  if(!deleteShow) return null  
  return (
    <div className="modal show d-block" tabIndex="-1 " style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Task</h1>
                    
                </div>
                <div className="modal-body">
                    <p>Are you sure to delete this task?</p>
                </div>
                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={()=>{
                                setDelete(false);
                            }}
                            >No</button>
                    <button type="button"
                            className="btn btn-danger"
                            onClick={()=>{
                                deleteTask(deleteId);
                                console.log(deleteId)
                                setDelete(false);
                            }}
                            >Yes</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteTask