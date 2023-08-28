type optionType = {
    label: string
}

const Wradio = (option: optionType) => {
  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">{option.label}</label>
      </div>
    </>
  );
};

export default Wradio;
