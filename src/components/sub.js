function Sub(props) {
    return (<>
    <h1>
        This is Sub function
    </h1>
    {props.x}
    {props.y}
    <h3>Sub of {props.x} and {props.y} is {props.x - props.y}</h3>
    </>
    )
}
 
export default Sub;