const Input = ({ ...props }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 10,
      width: "100%",
    },
    input: {
      padding: 10,
      borderRadius: 4,
      border: "1px solid #ccc",
    },
  };

  return (
    <div style={styles.container}>
      <input style={styles.input} {...props} />
    </div>
  );
};

export default Input;
