const Button = ({ text, action, className }) => {
  return (
    <button onClick={action} className={className}>
      {text}
    </button>
  );
};

export default Button;
