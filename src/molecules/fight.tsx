export interface fightOption {
  optionId: string;
  optionTitle: string;
  optionHits: number;
}

export interface fightProps {
  title: string;
  options: fightOption[];
  mySelectedOptionId: string;
  id: string
}

const Fight = ({ id, title, options, mySelectedOptionId }: fightProps) => {
  return (
    <li className="list-group-item mb-3" key={id}>
      <h6>{title}</h6>
      {options.map((option: fightOption) => {
        let totalHits = options.reduce((acc, opt) => acc + opt.optionHits, 0);
        let percentage = (option.optionHits / totalHits) * 100;
        return (
          <div key={option.optionId}>
            <span>{option.optionTitle}</span>
            <div className="progress my-2">
              <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
                {Math.round(percentage)}%
              </div>
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default Fight;
