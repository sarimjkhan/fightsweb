import Textbox from "../atoms/textbox";
import Wbutton from "../atoms/wbutton";

const Createfight = () => {
  return (
    <div className="container">
        <h5>Create a Fight</h5>
        <Textbox title="Enter fight" />
        <Textbox title="Option1" />
        <Textbox title="Option2" />
        <div className="mt-3">
            <Wbutton
                label="Save fight"
                type="primary"
                handleClick={() => console.log("Button atom is clicked")}
            />
        </div>
    </div>
  );
};

export default Createfight;
