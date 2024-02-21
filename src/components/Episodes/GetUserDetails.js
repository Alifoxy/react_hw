import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services/users_service";
import {UserDetails} from "./UserDetails";

const GetUserDetails = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {userId} = useParams()

    useEffect(() => {
        usersService.getUsersById(userId).then(({data}) => setUserDetails(data))
    }, [userId]);


    return (
        <div className={'main_block'}>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>

    );
};

export {GetUserDetails};