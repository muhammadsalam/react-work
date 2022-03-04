export default function BlogList ({blogs, title}) {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written byt { blog.author }</p>
                </div>  
            ))}
        </div>
    );
};

// props - возвращает объект со всеми атрибутами где вызывается элемент

// например <BlogList value='sad' imgSrc='wadawd' />
// props = {
//     value: 'sad',
//     imgSrc: 'wadawd'
// }

// props не фиксированное название, так просто по стандарту используют

// объект также можно деструктуризировать:
// function BlogList ({href, src}) {}