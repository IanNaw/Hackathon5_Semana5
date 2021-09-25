import "./button.css"

function MyButton({buttonText}) {
    return(
        <div className="My_Button">
            <button id="button">{buttonText}</button>
        </div>
    )
}

export default MyButton