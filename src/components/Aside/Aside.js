import { AsideLinks } from '../../data';
import './Aside.css';

export default function Aside () {
    const title = "Sidebar";

    const list = AsideLinks.map((elem, index) => {
        return (
            <li key={index}>
                <a href={elem.path}>{elem.text}</a>
            </li>    
        );
    });

    return (
        <aside className="aside">
            <h2>{title}</h2>
            <ul>{list}</ul>
        </aside>
    );
};