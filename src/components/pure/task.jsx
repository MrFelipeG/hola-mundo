import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                apellido: { task.Apellido }
            </h3>
            <h4>
                email: { task.email }
            </h4>
            <h5>
                Este contacto esta: { task.conectado ? 'Conectado':'Desconectado' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
