
import './App.css';
import Title from "../src/Components/Title/index.js"
import MyForm from "../src/Components/Form/form.js"
import Link from "../src/Components/Link/link.js"
import MyButton from './Components/Button/button';
import CenterText from "./Components/CenterText/centerText.js"

function App() {
  return (
    <div>
       <Title FirstText="Hello."SecondText="Welcome Back"/>
       <MyForm/>
       <Link/>
       <MyButton buttonText="LOGIN"/>
       <CenterText text="Create Account"/>
    </div>
  );
}

export default App;
