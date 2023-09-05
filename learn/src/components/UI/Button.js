import "./Button.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.submitHandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: "btn btn-primary",
  disabled: false,
};

export default Button;
