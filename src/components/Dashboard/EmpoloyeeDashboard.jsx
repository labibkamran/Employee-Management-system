import React from 'react'
import Header from '../others/header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmpoloyeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default EmpoloyeeDashboard