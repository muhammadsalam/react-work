function Nav({list}) {
    const links = list.map((elem, index) => { return (
        <a key={index} href={elem.link}>{elem.title}</a>
    )});

    return (
        <nav>
            {links}
        </nav>
    );
}

export default Nav;