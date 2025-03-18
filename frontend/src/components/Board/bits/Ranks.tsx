import './Ranks.css';

const Ranks = ({ ranks, getColor }) => {
    return (
        <div className="ranks">
            {ranks.map((rank, index) => (
                <span key={rank} className={getColor(index + 1, 0)}>
                    {rank}
                </span>
                /* Using 0 for the column (because ranks are always on the left) */
            ))}
        </div>
    );
};

export default Ranks;
