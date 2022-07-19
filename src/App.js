// Langkah
// 1. install dependency : npm install react-router-dom@6
// 2. mengkoneksikan aplikasi kita ke browser URL (index.js)
import Navigation from "./navigation/Navigation";

/*
rem = “root em”, unit of measurement font size dari sebuah root element.
Artinya 1rem sama dengan font size dari html element, dimana browser" yang ada memiliki default 16px.
html {
font-size: 100%;
}

ul {
font-size: 0.75rem; //0.75 dari 16px = 12px
}
 */
function App() {
    return (
        <div>
            <h1>WMB Point Of Sales</h1>
            <Navigation/>
        </div>
    );
}

export default App;
