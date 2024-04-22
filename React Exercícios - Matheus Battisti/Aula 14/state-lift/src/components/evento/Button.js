function Button(props) {
    return <button onClick={props.event}>{props.text}</button> 
    // quando o return for apenas uma linha, não é necessários os parenteses
}

export default Button