import './Info.css';
import erenYeagerImg from './assets/Eren Yeager.jpg';

function Info() {
    return (
        <div className='info'>
            <img src={erenYeagerImg} alt="eren yeager from attack on titan" />
            <h1 className='info-name'>Eren Yeager</h1>
            <p className='info-job'>Front End Developer</p>
            <p className='info-website'>erenyeager.website</p>
            <button className='info-btn'>Email</button>
        </div>
    )
}


export default Info;