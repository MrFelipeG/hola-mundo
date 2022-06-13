import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {


    //breve intro a como se usa un useState
    // Nombre variable, Nombre funcion, y valor inicial
    const [age, setage] = useState(29);

    const birthday = () => {
        //esto se hace para actualizar el state
        setage(age + 1);

    }

    return (
        <div>
            <h1>
                    HOLA { props.name} desde componente funcional!
                </h1>
                <h2>
                    Tu edad es de: { age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {

    name: PropTypes.string

};


export default GreetingF;
