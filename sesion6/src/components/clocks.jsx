// Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo:

import React, { useEffect, useState } from 'react'

const Clock = () => {
    const userDates = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

const [user, setUser] = useState(userDates);

useEffect(() => {
    const timerID = setInterval(() => {
        updateUser();
    }, 1000);
    return () => {
        clearInterval (timerID);
    };
});

const updateUser = () => {
    return setUser({
        fecha: user.fecha,
        edad: user.edad + 1,
        nombre: user.nombre,
        apellidos: user.apellidos
    });
};
return (
    <div>
        <h2>
            Hora Actual:
            {user.fecha.toLocaleTimeString()}
        </h2>
        <h3>
            {user.nombre} {user.apellidos}
        </h3>
        <h1>
            Edad: {user.edad}
        </h1>
    </div>
    );
};

export default Clock;