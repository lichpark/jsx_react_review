const Button = (props) => {
  return (
    <button
      className={
        props.buttonText
          ? "border-solid border border-black rounded-md px-3 py-2 text-black bg-white text-2xl w-6/12 "
          : "rounded-md px-3 py-2 text-white bg-black text-2xl w-6/12"
      }
    >
      {props.buttonText ? "확정" : "반려"}
    </button>
  );
};

export default Button;
