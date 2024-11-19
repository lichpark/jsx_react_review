import Callbutton from "../Buttons/Callbutton";

const InfoSub = (props) => {
  return (
    <li className="flex justify-between">
      <div className="text-slate-300">{props.infoKey}</div>
      <div className="font-bold whitespace-pre-wrap text-right">
        <div>{props.infoVal}</div>

        {props.callbutton && <Callbutton />}
      </div>
    </li>
  );
};

export default InfoSub;
