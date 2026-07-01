import "../../css/button.css";

const Button = ({ title, href, download }) => {
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className="primary-btn"
      >
        <span>{title}</span>
        <span className="arrow">→</span>
      </a>
    );
  }

  return (
    <button className="primary-btn">
      <span>{title}</span>
      <span className="arrow">→</span>
    </button>
  );
};

export default Button;