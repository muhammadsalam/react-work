import { useState } from 'react';
import './ProgressBar.css';

function ProgressBar() {

    const [progress, setProgress] = useState(20);

    

    return (
        <div className="Progress">
            <div className="progress-bar">
                <div style={{width: progress+'%'}}>
                    <span>{progress}%</span>
                </div>
            </div>
            <button onClick={() => {
                setProgress(progress - 10);
            }}>-10%</button>
            <input type="number" name='progress' />
            <button onClick={() => {
                setProgress(progress + 10);
            }}>+10%</button>
        </div>
    );
}

export default ProgressBar;