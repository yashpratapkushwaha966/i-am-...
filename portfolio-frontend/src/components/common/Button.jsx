import "../../css/button.css";

const Button = ({ title }) => {
  return (
    <button className="primary-btn">
      <span>{title}</span>
      <span className="arrow">→</span>
    </button>
  );
};

export default Button;