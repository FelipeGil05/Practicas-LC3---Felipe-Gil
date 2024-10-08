import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUsername(value);

        if (value.includes('o') || value.includes('O')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        if (username === '' || username.includes('o') || username.includes('O')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ingrese su nombre de usuario"
                value={username}
                onChange={handleInputChange}
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>Nombre de usuario: {username}</p>
        </div>
    );
};

export default Login;