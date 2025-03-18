import './Board.css';
import Pieces from './Pieces/pieces';
import Files from './bits/Files';
import Ranks from './bits/Ranks';

export const getColor = (i: number, j: number) => {
    return (i + j) % 2 === 0 ? 'color-light' : 'color-dark';
};

const Board = () => {
    const getClassName = (i: number, j: number) => {
        let c = 'tile';
        c += (i + j) % 2 === 0 ? ' tile-dark' : ' tile-light';
        return c;
    };

    const ranks = Array(8)
        .fill('')
        .map((x, i) => 8 - i);
    const files = Array(8)
        .fill('')
        .map((x, i) => i + 1);

    return (
        <div className="board">
            {/* Pass getColor function to Ranks */}
            <Ranks ranks={ranks} getColor={getColor} />

            <div className="tiles">
                {ranks.map((rank, i) =>
                    files.map((file, j) => (
                        <div
                            key={file + '-' + rank}
                            className={getClassName(9 - i, j)}
                        ></div>
                    ))
                )}
            </div>

            <Pieces />

            {/* Pass getColor function to Files */}
            <Files files={files} getColor={getColor} />
        </div>
    );
};

export default Board;
