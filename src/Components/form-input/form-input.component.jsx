import "./form-input.styles.scss";

const FormInput = ({ lable, ...otherProps }) => {
  return (
    <>
      <div className="group">
        {lable && (
          <label
            className={`${
              otherProps.value.length ? "shrink" : " "
            } form-input-lable`}
          >
            {lable}
          </label>
        )}
        <input className="form-input" {...otherProps} />
      </div>
    </>
  );
};

export default FormInput;
