import Search from "./Component/Search.jsx";
import {useState} from "react";


const App = () => {
    const [searchItem, setSearchItem] = useState("");
    return(
        <main>
            <div className="pattern" />
            <div className="wrapper">

                <h1 className="text-3xl text-grey">Find <span className="text-gradient">Movies</span> You'll Love Without Hassle.</h1>

                <Search searchItem = {searchItem} setSearchItem ={setSearchItem} />
                <h2>Search</h2>
            </div>
        </main>
    );
}

export default App