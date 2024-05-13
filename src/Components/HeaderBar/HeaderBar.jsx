import { NavLink } from "react-router-dom";
import './HeaderBar.css';

function HeaderBar() {
  return (
    <header>
        <div className="container mx-auto py-2">
            <div className="sm:flex text-center sm:text-left">
                <div className="sm:w-2/5 content-center">
                    <ul className="align-middle">
                        <li><a href="https://www.unam.mx/" target="_blank" rel="noopener noreferrer"><img src="images/unam.png" alt="UNAM" width={45} /></a></li>
                        <li><a href="https://cuaed.unam.mx/" target="_blank" rel="noopener noreferrer"><img src="images/cuaed.png" alt="CUAED" width={167} /></a></li>
                    </ul>
                </div>
                <nav className="sm:w-3/5 text-center sm:text-right content-center">
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/">COIL</NavLink></li>
                        <li><NavLink to="/">Movilidad</NavLink></li>
                        <li><NavLink to="/">Gente</NavLink></li>
                        <li><NavLink to="/">Vinculación</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
}

export default HeaderBar;
