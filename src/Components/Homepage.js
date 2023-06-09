import { HashRouter , Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login';
import Products from './Products';
import Invoice from './Invoice';
import OrderHistory from './OrderHistory';
import Banner from "./Banner";
import store from '../state/store';
import { Provider } from 'react-redux';
import TableRow from "./Tablerow";



export default function Homepage() {
  
  const NotFound = () => {
    return <h1>404 Page Not Found</h1>;
  };
  
  return (
    <div>

        
    <div className="right-section">
    <Provider store={store}>
      <HashRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path="dashboard" element={<Dashboard/>} />
            <Route exact path="products" element={<Products/>}/>
            <Route exact path="banner" element={<Banner/>}/>
            <Route exact path="orderhistory" element={<OrderHistory/>}/>
            <Route exact path="" element={<TableRow/>}  />
            <Route exact path="invoice" element={<Invoice/>} />
            <Route component={NotFound} />

        </Routes>
      </HashRouter>
      </Provider>
  
    </div>
      
    </div>
  )
}
