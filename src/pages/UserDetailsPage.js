import {GetUserDetails} from "../components/Users/GetUserDetails";
import {Outlet} from "react-router-dom";


const UserDetailsPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>User Details</h2>
            </div>
            <GetUserDetails/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};