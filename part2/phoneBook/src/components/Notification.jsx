const Notification = ({ message, type }) => {
    const errorStyle = {    
        color: 'red',    
        fontStyle: 'italic',  
        background: 'lightgrey' ,
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const successStyle = {    
        color: 'green',    
        fontStyle: 'italic',  
        background: 'lightgrey' ,
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    let msgStyle = successStyle;
    if (message === null) {
        return null
    }
    else if(type === 'Error'){
        msgStyle = errorStyle;
    }
    
    return (
        <div style={msgStyle}>
        {message}
        </div>
    )
}

export default Notification