
type buttonProps = {
  label: string,
  handleClick: () => void,
  type: string
} 

const Wbutton = ({ label, handleClick, type } : buttonProps) => {
  return (
    <>
      <button type="button" className={`btn btn-${type}`} onClick={handleClick}>{label}</button>
    </>
  );
};

export default Wbutton