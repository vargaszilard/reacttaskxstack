const ComplettInputField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.labelName}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      />
    </div>
  );
};

ComplettInputField.defaultProps = {
  type: "text",
};

export default ComplettInputField;
