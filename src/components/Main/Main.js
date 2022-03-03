import './Main.css';

export default function Main () {
    const title = "Main content";

    const items = [
        { title: "Article 1", desc: "Description 1" },
        { title: "Article 2", desc: "Description 2" },
        { title: "Article 3", desc: "Description 3" },
        { title: "Article 4", desc: "Description 4" }
    ];

    return (
        <main className="main">
            <h2>{title}</h2>
            <hr />
            <div className="main-grid">
            <div className="main-grid__item">
                <h3>{items[0].title}</h3>
                <p>{items[0].desc}</p>
            </div>
            <div className="main-grid__item">
                <h3>{items[1].title}</h3>
                <p>{items[1].desc}</p>
            </div>
            <div className="main-grid__item">
                <h3>{items[2].title}</h3>
                <p>{items[2].desc}</p>
            </div>
            <div className="main-grid__item">
                <h3>{items[3].title}</h3>
                <p>{items[3].desc}</p>
            </div>
            </div>
            <hr />
            <b>Amount: </b> {items.length}
        </main>
    );
};