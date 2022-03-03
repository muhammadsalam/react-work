import './Navigation.css';
import { NavigationLinks } from "../../../data";

export default function Navigation () {
    
    const list = NavigationLinks.map((elem, index) => <a key={index} href={elem.path}>{elem.text}</a> );

    return ( 
        <nav className="header-inner__nav">
            {list}
        </nav>
    );
};