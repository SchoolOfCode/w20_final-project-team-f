 const ProgressButton = ({ makeProgress, progress }) => (
  <button className="progressBtn"onClick={makeProgress}>
    { 
      progress == 100 ? ' Start Again ' : 'Add' 
    }
  </button>
);

export default ProgressButton;

