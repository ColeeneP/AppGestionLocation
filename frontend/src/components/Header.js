import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'usehooks-ts';
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <header>
        <h1>Gest'Loc</h1>
            <nav class="desktop_nav">
                <ul>
                    <Link to={`/home`}><li>Accueil</li></Link>
                    <Link to={`/tenants`}><li>Nos locataires</li></Link>
                    <Link to={`/property`}><li>Nos biens</li></Link>
                </ul>
            </nav>
            <nav class="mobile_nav">
                <div><div>Menu</div>
                <ul>
                    <Link to={`/home`}><li>Accueil</li></Link>
                    <Link to={`/tenants`}><li>Nos locataires</li></Link>
                    <Link to={`/property`}><li>Nos biens</li></Link>
                </ul></div>
            </nav>
        </header>
    )
};