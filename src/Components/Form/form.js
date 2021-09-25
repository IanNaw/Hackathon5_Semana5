import "./form.css"

function MyForm() {
    return(
        <form>
            <div>
                <label for="Username">USERNAME</label>
                <input className="My_Inputs" id="Username" placeholder="something@gmail.com"></input>
            </div>
            <div>
                <label for="Password">PASSWORD</label>
                <div className="div_Wrapper">
                    <input className="My_Inputs" id="Password" placeholder="PASSWORD"></input>
                    <button className="Show_Button">SHOW</button>
                </div>
            </div>
        </form>
    )
}

export default MyForm