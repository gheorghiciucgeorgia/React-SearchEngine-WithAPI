import { InputGroup } from 'reactstrap';
import { ThemeContext, themes } from '../theme-context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar-style.scss'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <nav>
            <div>
                <InputGroup>
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <label class="switch">
                                <input type="checkbox" onClick={() => {
                                    setDarkMode(!darkMode);
                                    changeTheme(darkMode ? themes.light : themes.dark);
                                }} />
                                <span class="slider round"></span>
                            </label>
                        )}
                    </ThemeContext.Consumer>
                </InputGroup>
            </div>
            <div className='bookmark'>
                <Link to="/bookmark"><i><FontAwesomeIcon icon={faBookmark} /></i></Link>
            </div>
        </nav>
    );
}

export default Navbar;