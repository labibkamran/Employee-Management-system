import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleAccept = (task, userId) => {
        if (!userData || userData.length === 0) return; // Guard clause
    
        // Create a deep copy of userData
        const updatedData = userData.map(user => {
            if (user.id === userId) {
                const updatedTasks = user.tasks.map(t => {
                    if (t.taskTitle === task.taskTitle) {
                        return { ...t, active: true, completed: false, newTask: false, failed: false };
                    }
                    return t;
                });
                return {
                    ...user,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...user.taskCounts,
                        active: user.taskCounts.active + 1,
                        completed: user.taskCounts.completed - 1,
                    },
                };
            }
            return user;
        });
    
        // Update the state and local storage
        setUserData([...updatedData]);
        localStorage.setItem('employees', JSON.stringify(updatedData));
    };
    

    return (
        <div id="tasklist" className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16">
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />;
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />;
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} onAccept={() => handleAccept(elem, data.id)} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
            })}
        </div>
    );
};

export default TaskList;
