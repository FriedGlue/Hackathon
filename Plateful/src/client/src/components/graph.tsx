import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';

const RadialGraph = () => {
  const calories = 854;

  return (
    <ProgressProvider valueStart={0} valueEnd={66}>
      {(value) => (
        <CircularProgressbar
          value={value}
          text={`${calories} remaining`}
          styles={buildStyles({
            textColor:'black',
            textSize: '10px',
            trailColor: '#AFA69A',
            backgroundColor: 'black', // Set the background color to transparent
            pathTransition: 'black', // Disable the default path transition
            pathColor: `#A63B3B`, // Define the linear gradient directly
          })}
        counterClockwise/>
      )}
    </ProgressProvider>
  );
};

export default RadialGraph;
