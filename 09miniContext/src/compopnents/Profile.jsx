// proile page ahe tr data ghaycha context madhun
import React ,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {

    const {user} = useContext(UserContext) // data context kadhun ghetho jo user variable madhe aahe
    
    if (!user) {
        return <div> please Login</div>
    }else{
        return <div>Welcome {user.username}</div>
    }

}
export default Profile