import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function starCreator(num) {
  return Array.from({ length: 5 }, (_, index) => {
    if (num > index + 1) {
      return <BsStarFill key={index} className="star" fill="#fca903" />;
    } else if (num >= index + 0.5) {
      return <BsStarHalf key={index} className="star" fill="#fca903" />;
    } else {
      <BsStar key={index} className="star" fill="#fca903" />;
    }
  });
}
