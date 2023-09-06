import "./Button.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className="button"
      onClick={props.submitHandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
