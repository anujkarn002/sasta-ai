const MessageItem = ({ message, isSender }) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: isSender ? 'flex-end' : 'flex-start',
            padding: 10,
        },
        message: {
            background: isSender ? '#dcf8c6' : 
            // grey
            '#f1f0f0',
            color: isSender ? '#000' : '#000',
            padding: 10,
            borderRadius: 10,
            maxWidth: '60%',
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.message}>{message}</div>
        </div>
    );
}

export default MessageItem;