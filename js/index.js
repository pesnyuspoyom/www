const inputClick = () => console.log('Click')
const mouseOver = () => console.log('Mouse Over')

const helpText = "Help text!!"

const elements = (<div className="name">
  <h1>{helpText}</h1>
  <input placeholder={helpText}
    onClick={inputClick} onMouseEnter={mouseOver}></input>
    <p>{helpText == "Help text!!" ? "Yes" : "No"}</p>
</div>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)