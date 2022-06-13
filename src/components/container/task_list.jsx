import React from 'react';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Andres', 'GARCIA', true,'andres_gacia@elpoli.edu.co' )
    

    return (
        <div>
            <div>
                Yout Task:
            </div>
            {/* to do: aplicar un for/Mal para renderizar la lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
