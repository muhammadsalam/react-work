import './Header.css';

export default function Header () { 
    const links = [
        { text: "Home", path: "/" },
        { text: "About", path: "/About" },
        { text: "Contact", path: "/Contact" }
    ];

    return (
        <header className="header">
            <div className="header-inner container">
            <nav className="header-inner__nav">
                <a href={links[0].path}>{links[0].text}</a>
                <a href={links[1].path}>{links[1].text}</a>
                <a href={links[2].path}>{links[2].text}</a>
            </nav>
            </div>
        </header>
    );
};