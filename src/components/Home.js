import { useState } from 'react';

function Home() {
    
    // Что такое useState ?
    // Это возможность ререндеринга компонента
    // например, если менять значение переменной, то в компоненте оно не будет меняться, а просто останется старым. Для этого используют ререндеринг компонента, чтобы можно было видеть новые значения.

    // ps. Angular позволяет делать это автоматически, без постороннего.

    const [name, setName] = useState('mario');

    // const [1, 2] - вместо 1 - название переменной, а вместо 2 - название функции, которая позволяет изменять эту переменную
    
    const [age, setAge] = useState(18);

    const handleClick = () => {
        setName('Luigi');
        setAge('30');
    };

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;