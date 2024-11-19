const StatusText = (props) => {
  return (
    <div className="text-red-600 font-bold text-base py-1 mt-3">
      {props.message}
    </div>
  );
};

export default StatusText;
