import "../../css/button.css";

const Button = ({ title, href, download, variant }) => {
  const cls = `primary-btn${variant === "filled" ? " filled" : ""}`;

  if (href) {
    return (
      <a href={href} download={download} className={cls}>
        <span>{title}</span>
        <span className="arrow">→</span>
      </a>
    );
  }

  return (
    <button className={cls}>
      <span>{title}</span>
      <span className="arrow">→</span>
    </button>
  );
};

export default Button;
