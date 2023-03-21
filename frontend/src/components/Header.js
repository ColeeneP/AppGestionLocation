import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'usehooks-ts';

export default function Header() {
    const matches = useMediaQuery('(max-width: 800px)');

    return(
        <header>
            <h1>GEST'LOC</h1>
            {`${matches ?
                 <nav><FontAwesomeIcon icon={faBars} /></nav> 
                 : <nav></nav> }`}
            
        </header>
    )
};