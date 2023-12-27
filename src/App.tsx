import Home from './components/Home.tsx'
import Header from "./components/Header.tsx";
import Functions from "./components/Functions.tsx";
import Libraries from "./components/libraries.tsx";
import './App.css'

function App() {
    return <div className = 'body'>
        <div className = 'Background'/>
        <Header/>
        <Home/>
        <Functions/>
        <Libraries/>
    </div>
}

export default App;