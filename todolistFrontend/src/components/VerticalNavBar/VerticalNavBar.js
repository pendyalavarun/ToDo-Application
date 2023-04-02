import React from 'react';
import './VerticalNavBar.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineStar, AiOutlineArrowDown, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FcMediumPriority } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
function VerticalNavBar() {
  return (
    <div className='TotalNavBar  p-3'>
      <div className='navlogodiv-1 p-2 '>
        <div className='d-flex'>
          <img src="https://cdn0.iconfinder.com/data/icons/travel-icon/512/check_list-512.png" alt="" width={"60px"} />
          <h3 className='m-3'>My Todo's</h3>
        </div>
      </div>
      <div className='searchbox input-group '>
        <input className='form-control' type="text" placeholder='Search ' />
        <span><AiOutlineSearch className='fs-2  ' /></span>
      </div>
      <div className='todaysblock mt-3 border-bottom p-2'>
        <Nav.Link >
          <NavLink className="nav-link     ps-3 pe-3 fs-5" to="/AllTasks"> <AiOutlineHome className='text-success mb-2' /> AllTasks </NavLink>
        </Nav.Link>
        <Nav.Link >
          <NavLink className="nav-link     ps-3 pe-3 fs-5" to="/"><AiOutlineUser className='text-primary mb-2' /> Assigned To Me </NavLink>
        </Nav.Link>
        <Nav.Link >
          <NavLink className="nav-link     ps-3 pe-3 fs-5" to="/"><IoAnalyticsSharp className='text-warning mb-2' /> Analytics </NavLink>
        </Nav.Link>
      </div>
      <div className="prioritiesblock mt-3 border-bottom p-2">
        <Nav.Link >
          <NavLink className="nav-link     ps-3 pe-3 fs-5" to="/HighPriority"> <AiOutlineStar className='text-danger mb-1' /> High Priority </NavLink>
        </Nav.Link>
        <Nav.Link >
          <NavLink className="nav-link     ps-3 pe-3 fs-5" to="/MediumPriority"> < FcMediumPriority className='text-danger mb-1' /> Medium Priority </NavLink>
        </Nav.Link>
        <Nav.Link >
          <NavLink className="nav-link     ps-3 pe-3 fs-5" to="/LowPriority"> < AiOutlineArrowDown className=' mb-1' /> Less Priority </NavLink>
        </Nav.Link>
      </div>
      <div className="listsblock">

      </div>
      <div className="addtasksblock ">
        <button className='btn btn-warning d-block mt-1 m-auto'> <AiOutlinePlus className='mb-1' /> New List</button>
      </div>
    </div>
  )
}

export default VerticalNavBar