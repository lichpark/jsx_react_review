const DateText = (props) => {
  return (
    <div className="text-red-800 text-sm mt-4 font-medium font-sans">
      <span>{props.message1}</span>
      <span> | </span>
      <span>{props.message2}</span>
    </div>
  );
};

export default DateText;
