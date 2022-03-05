import Nav from "../Nav/Nav";

function Header({ logo, title }) {

    const list = [
        {title: 'Новости', link: '/news'},
        {title: 'Команда', link: '/team'},
        {title: 'О нас', link: '/about'},
        {title: 'Магазин', link: '/shop'},
        {title: 'Главная', link: '/home'},
    ];

    return (
        <header>
            <img style={{width: "80px", height: "80px"}} src={logo} alt="лого" />

            <h1>{title}</h1>

            <Nav list={list} />
            
            <hr />
        </header>
    );
}

export default Header;