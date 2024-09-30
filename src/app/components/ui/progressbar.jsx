import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = ({ text, percent }) => {
    return (
        <div className="w-[4.3rem] h-[4.3rem] sm:hidden">
            <CircularProgressbar text={text} counterClockwise={true} strokeWidth={15} styles={{
                path: {
                    strokeLinecap: 'butt',
                    stroke: '#002E20'
                },
                text: {
                    fill: '#515E59',
                    fontSize: '1.7rem',
                    fontWeight: '800'
                },
                trail: {
                    stroke: '#DDFFDA'
                }
            }} value={percent} />
        </div>
    );
}

export default Progressbar;