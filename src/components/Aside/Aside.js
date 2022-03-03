import './Aside.css';

export default function Aside () {
    const title = "Sidebar";

    const list = [
        {
            text: "почему все решили, что это необходимо?",
            path: "/blog/pochemu-vse-reshili-chto"
        },
        {
            text:
            "Что делать, если накануне вылета получил положительный ПЦР-тест на коронавирус",
            path:
            "/blog/chto-delat-esli-nakanune-vileta-poluchil-polojitelniy-pcrtest"
        },
        {
            text: "О каком старом гаджете вы вспоминаете с любовью?",
            path: "/blog/o-kakom-starom-gadjete-vi-vspominaete-s-lubovu"
        }
    ];

    return (
        <aside className="aside">
            <h2>{title}</h2>
            <ul>
            <li>
                <a href={list[0].path}>{list[0].text}</a>
            </li>
            <li>
                <a href={list[1].path}>{list[1].text}</a>
            </li>
            <li>
                <a href={list[2].path}>{list[2].text}</a>
            </li>
            </ul>
        </aside>
    );
};