import './Header.css';
import Navigation from './Navigation/Navigation';

export default function Header () { 
    return (
        <header className="header">
            <div className="header-inner container">
                <Navigation />
            </div>
        </header>
    );
};