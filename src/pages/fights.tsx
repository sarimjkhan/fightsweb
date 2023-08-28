import { fightProps } from "../molecules/fight";
import Createfight from "../organisms/createfight";
import MyLikedFights from "../organisms/myLikedFights";
import RegionalPopularFights from "../organisms/regionalPopularFights";
import WorldPopularFights from "../organisms/worldsPopularFights";

const Fights = () => {
    const fights: fightProps[] = [
        {
            title: "Shahrukh vs Salmna",
            options: [
                { optionTitle: "Shahrukh khan", optionId: "1", optionHits: 23},
                { optionTitle: "Salman khan", optionId: "2", optionHits: 10}
            ],
            mySelectedOptionId: "1",
            id: "1"
        },
        {
            title: "Karachi vs Lahore",
            options: [
                { optionTitle: "Karachi", optionId: "3", optionHits: 23},
                { optionTitle: "Lahore", optionId: "4", optionHits: 10}
            ],
            mySelectedOptionId: "4",
            id: "2"
        },
        {
            title: "Imran vs All",
            options: [
                { optionTitle: "Imran", optionId: "5", optionHits: 100000},
                { optionTitle: "All", optionId: "6", optionHits: 100}
            ],
            mySelectedOptionId: "5",
            id: "3"
        }
    ]
  return (
    <div className="container" style={{marginTop: "10px"}}>
      <div className="row">
        <div className="col" style={{ border: "solid 1px" }}>
          <Createfight />
        </div>
        <div className="col" style={{ border: "solid 1px" }}>
          <MyLikedFights fights={fights}/>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ border: "solid 1px" }}>
          <WorldPopularFights fights={fights} />
        </div>
        <div className="col" style={{ border: "solid 1px" }}>
          <RegionalPopularFights fights={fights}/>
        </div>
      </div>
    </div>
  );
};

export default Fights;
