import "./navbar.css";
import CartWidget from "../CartWidget";


function NavBar(){
    return (<nav >
        <ul className="lista d-flex flex-row align-items-end align-content-end justify-content-around pt-4 pb-3">
            <li><h1 className="logo">Boholand</h1></li>
            <li><a href="#" className="links">Tapices</a></li>
            <li><a href="#" className="links">Colgantes</a></li>
            <li><a href="#" className="links">Mesa</a></li>
            <li><CartWidget /></li>            
        
        </ul>
    </nav>)
}

export default NavBar;