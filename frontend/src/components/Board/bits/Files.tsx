import { getCharacter } from '../../../helper';
import './Files.css';

const Files = ({ files, getColor }) => {
    return (
        <div className="files">
            {files.map((file, index) => (
                <span key={file} className={getColor(0, index)}>
                    {getCharacter(file)}
                </span>
                /* Using 0 for the row (because files are always at the bottom) */
            ))}
        </div>
    );
};

export default Files;
