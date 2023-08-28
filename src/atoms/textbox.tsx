interface textboxProps {
    title: string;
}

const Textbox = ({title}: textboxProps) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        {title}
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={title}
        aria-label={title}
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default Textbox;
