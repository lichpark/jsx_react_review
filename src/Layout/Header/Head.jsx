import StatusText from "./StatusText";
import TypeText from "./TypeText";
import DateText from "./DateText";
import Arrow from "./Arrow";

const Head = (props) => {
  return (
    <div className="bg-red-50 w-full p-3 flex flex-col">
      <Arrow />
      <StatusText message={props.text1} />
      <TypeText message={props.text2} />
      <DateText message1={props.text3} message2={props.text4} />
    </div>
  );
};

export default Head;
