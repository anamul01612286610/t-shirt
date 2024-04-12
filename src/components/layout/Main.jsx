import Header from "../header/Header";
import {Outlet} from 'react-router-dom'
const Main = () => {
    return (
        <div>
      <Header></Header>
        <Outlet></Outlet>
        
        </div>
    );
};

export default Main;