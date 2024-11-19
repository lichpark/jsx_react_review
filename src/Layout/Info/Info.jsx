import InfoStatus from "./InfoStatus";
import InfoText from "./InfoText";

const Info = (props) => {
  return (
    <>
      <InfoText titleText={props.titleText} />
      <InfoStatus status={props.InfoStatus} imgPath={props.imgPath} />
    </>
  );
};

export default Info;
