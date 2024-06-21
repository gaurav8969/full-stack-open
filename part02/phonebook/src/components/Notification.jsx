const Notification = ({message, success})=>{
    if(message == null)return null

    const green = '#00FF00'
    const red = '#FF0000'

    const style = {
        color:`${(success)?green:red}`,
        weight:'bold'
    }

    return(
        <div className="error" style={style}>
            <h3>{message}</h3>
        </div>
    )
}

export default Notification