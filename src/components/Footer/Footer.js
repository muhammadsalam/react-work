import './Footer.css';

export default function Footer () {
    return (
        <footer className="footer">
            Footer -&nbsp;<span> {new Date().getFullYear()}</span>
        </footer>
    );
};