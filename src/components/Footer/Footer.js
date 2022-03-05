function Footer() {
    const year = () => new Date().getFullYear();
    return (
        <footer>
            &copy;copyright все права защищены. {year()} год.
        </footer>
    );
}

export default Footer;