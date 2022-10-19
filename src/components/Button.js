const Button = ({ onClick, ...props }) => {
  const styles = {
    button: {
      background: "#007bff",
      color: "#fff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <button style={styles.button} onClick={onClick} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
