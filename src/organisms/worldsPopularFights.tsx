import Fight, { fightProps } from "../molecules/fight";

interface fights {
  fights: fightProps[];
}

const WorldPopularFights = ({fights}: fights) => {
  return (
    <ul className="list-group">
        {
            fights.map((fight: fightProps) => {
                return (
                    <Fight key={fight.id} id={fight.id} title={fight.title} mySelectedOptionId="1" options={fight.options} />
                )
            })
        }
    </ul>
  );
};

export default WorldPopularFights;
