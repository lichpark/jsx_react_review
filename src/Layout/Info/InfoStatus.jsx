const InfoStatus = (props) => {
  return (
    <div className="m-2">
      <span className="bg-slate-200 border-solid border-2 border-slate-200 px-3 py-1 rounded-2xl">
        {props.status ? "대면" : "비대면"}
      </span>
      <img className="w-100" src={props.imgPath} alt="car" />
    </div>
  );
};

export default InfoStatus;
