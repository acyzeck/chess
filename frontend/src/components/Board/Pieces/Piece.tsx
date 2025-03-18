const Piece = ({ rank, file, piece }) => {
    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
        setTimeout(() => {
            e.target.style.opacity = '0'; // Instead of display: none
        }, 0);
    };

    const onDragEnd = (e) => {
        e.target.style.opacity = '1'; // Restore opacity after drop
    };

    return (
        <div
            className={`piece ${piece} p-${file}${rank}`}
            draggable={true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        ></div>
    );
};
export default Piece;
