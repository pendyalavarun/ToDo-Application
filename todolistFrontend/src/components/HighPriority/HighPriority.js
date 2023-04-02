import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button, Collapse } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AiFillDelete, AiOutlinePlus, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { TbMathGreater } from 'react-icons/tb'
import './HighPriority.css'
function HighPriority() {
  let [AllTask, setAllTasks] = useState([]);
  let { register, handleSubmit, formState: { errors } } = useForm();
  /*Post Request */
  let submitForm = (task) => {
    Axios.post("http://localhost:3500/api/insert-task", {
      Task: task.Task,
      Priority: task.Priority
    })
      .then(() => {
        console.log('Success:');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  /*get Request */
  useEffect(() => {
    Axios.get("http://localhost:3500/api/get-all-tasks")
      .then((response) => {
        setAllTasks(response.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [AllTask]);
  /* Delete Request */
  const DeleteTask = (task) => {
    let id = task.id;
    console.log(id);
    Axios.delete('http://localhost:3500/api/delete-task/' + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  /* Set Task Status 1*/
  const completedtask = (task) => {
    const id = task.id;
    Axios.put('http://localhost:3500/api/update-task-status-1/' + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  /* Set Task Status 0*/
  const incompletetask = (task) => {
    const id = task.id;
    Axios.put('http://localhost:3500/api/update-task-status-0/' + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  /*for collapse */
  const [open, setOpen] = useState(false);
  const [openincomplete, setOpenincomplete] = useState(false);
  return (
    <div className='HighPriority border p-3'>
      {/*Heading */}
      <h1 className='text-white text-center '>High Priority Tasks</h1>
      {/*Add Task from */}
      <div className="addtaskform border rounded-pill bg-light">
        <form onSubmit={handleSubmit(submitForm)} className='row p-2'>
          <div class="col-sm-7">
            <div class="input-group">
              <AiOutlinePlus className='fs-2 ' />
              <input type="text" class="form-control border-0 bg-light" id="Task" name='Task' placeholder="Add Task" {...register("Task", { required: true })} />
            </div>
            {errors.Task?.type === "required" && <p className='text-danger ms-4'>*Enter Task</p>}
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden" for="Priorities">Priority</label>
            <select class="form-select" id="Priorities" {...register("Priority")} disabled >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option selected value="High">High</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Add Task</button>
          </div>
        </form>
      </div>
      {/*Incomplete Block */}
      <Button className='fs-4 btn-secondary mt-2 bg-white border-0 text-dark d-block' onClick={() => setOpenincomplete(!openincomplete)}> {openincomplete ? <AiOutlineDown /> : <AiOutlineRight />} Incomplete  </Button>
      <Collapse in={openincomplete}>
        <div className='incompleteblock'>
          {
            AllTask.map((task) => {
              if (task.Priority === 'High' && task.Completestatus === 0) {
                return (
                  <div class="d-flex border border-white p-2 m-2 rounded taskbox" key={task.id}>
                    <input class="form-check-input ms-3 me-3" type="checkbox" value="" id="flexCheckChecked" onChange={() => completedtask(task)} />
                    <label class="form-check-label text-white" for="flexCheckChecked">
                      {task.Task}({task.Priority})
                    </label>
                    <Button className='btn-danger ms-auto  ' onClick={() => DeleteTask(task)}><AiFillDelete className='fs-3 ' /></Button>
                  </div>
                )
              }
            }
            )
          }
        </div>
      </Collapse>
      {/*complete block */}
      <Button className='fs-4 btn-secondary mt-2 bg-white border-0 text-dark d-block ' onClick={() => setOpen(!open)}> {open ? <AiOutlineDown /> : <AiOutlineRight />} Completed  </Button>
      <Collapse in={open}>
        <div className='completeblock'>
          {
            AllTask.map((task) => {
              if (task.Priority === 'High' && task.Completestatus === 1) {
                return (
                  <div class="d-flex border border-secondary p-2 m-2 rounded taskbox" key={task.id}>
                    <input class="form-check-input ms-3 me-3 " type="checkbox" value="" id="flexCheckChecked" defaultChecked onChange={() => incompletetask(task)} />
                    <label class="form-check-label text-dark" for="flexCheckChecked">
                      {task.Task}({task.Priority})
                    </label>
                    <Button className='btn-danger ms-auto  ' onClick={() => DeleteTask(task)}><AiFillDelete className='fs-3 ' /></Button>
                  </div>
                )
              }
            }
            )
          }
        </div>
      </Collapse>
    </div>
  )
}

export default HighPriority