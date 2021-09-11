 const ProgressButton = ({ makeProgress, progress }) => (
  <button onClick={makeProgress}>
    { 
      progress == 100 ? ' Yay! ' : 'Progress' 
    }
  </button>
);

export default ProgressButton;

