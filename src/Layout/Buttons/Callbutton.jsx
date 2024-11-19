import { FaPhoneAlt } from "react-icons/fa";

const Callbutton = () => {
  return (
    <button className="whitespace-nowrap border-solid border-2 border-gray-300 py-1 px-2 rounded-md">
      <FaPhoneAlt className="inline-block" />
      통화하기
    </button>
  );
};

export default Callbutton;
