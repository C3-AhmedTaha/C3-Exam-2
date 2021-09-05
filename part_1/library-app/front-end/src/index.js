import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{BrowseRouter,Route} from "react-router-dom"
<BrowseRouter>
<Route  path="/" component={App}/>

</BrowseRouter>



ReactDOM.render(<App />, document.getElementById('root'));
