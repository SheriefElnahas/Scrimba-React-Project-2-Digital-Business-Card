import './Info.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import erenYeagerImg from './assets/Eren Yeager.jpg';   

function Info() {
    return (
        <div className='info'>
            <img src={erenYeagerImg} alt="eren yeager from attack on titan" />
            <h1 className='info-name'>   Eren Yeager</h1>
            <p className='info-job'>Front End Developer</p>
            <p className='info-website'>erenyeager.website</p>

        </div>
    )
}


export default Info;