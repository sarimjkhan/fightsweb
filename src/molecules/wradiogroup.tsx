type optionType = {
    label: string,
    value: string
}

type radioGroupProps = {
    options: optionType[]
}


const Wradiogroup = ({options}: radioGroupProps) => {
  return (
    <>
        {
            options.map((option: optionType) => {
                return (
                    <div className="form-check">
                        <input className="form-check-input" type="radio" />
                        <label className="form-check-label">
                            {option.label}
                        </label>
                    </div>
                )
            })
        }
    </>
  )
}

export default Wradiogroup