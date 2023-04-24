import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'usehooks-ts';

export default function Header() {
    const matches = useMediaQuery('(max-width: 800px)');

    return(
        <header>
        <h1>Gest'Loc</h1>
            <nav class="desktop_nav">
                <ul>
                    <li>Accueil</li>
                    <li>Nos locataires</li>
                    <li>Nos biens</li>
                </ul>
            </nav>
            <nav class="mobile_nav">
                <div><div>Menu</div>
                <ul>
                    <li>Accueil</li>
                    <li>Nos locataires</li>
                    <li>Nos biens</li>
                </ul></div>
            </nav>
        </header>
    )
};