import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);
    // [] означает, что зависимостей нет
    // запустится только при первом рендеринге
    // (обновление страницы)

    // [name] - зависит от переменной name и будет вызываться каждый раз, когда меняется эта переменная

    // useEffect - функция, которая вызывается при каждом
    // рендеринге страницы. То есть, если изменить useState - это
    // считается за рендеринг страницы

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('Luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;