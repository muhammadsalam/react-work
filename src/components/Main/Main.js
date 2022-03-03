import './Main.css';
import { MainItems } from '../../data';

export default function Main () {
    const title = "Main content";

    const list = MainItems.map((elem, index) => {
        return (
            <div key={index} className="main-grid__item">
                <h3>{elem.title}</h3>
                <p>{elem.desc}</p>
            </div>
        );
    });

    return (
        <main className="main">
            <h2>{title}</h2>
            <hr />
            <div className="main-grid">{list}</div>
            <hr />
            <b>Amount: </b> {MainItems.length}
        </main>
    );
};