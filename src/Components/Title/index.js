import "./style.css"
 
function Title({FirstText,SecondText}) {
    return (
    <div className="Title_Container">
        <h1 id="First">{FirstText}</h1>
        <h1 id="Second">{SecondText}</h1>
    </div>
    )
}

export default Title;