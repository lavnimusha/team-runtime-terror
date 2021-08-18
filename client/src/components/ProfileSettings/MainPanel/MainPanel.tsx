import Availability from "../Availability/Availability";
import EditProfile from "../EditProfile/EditProfile";
import Payment from "../Payment/Payment";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Security from "../Security/Security";
import Settings from "../Settings/Settings";
import { useParams } from 'react-router-dom';

const MainPanel = (): JSX.Element => {

    const { componentId } = useParams<{ componentId: string }>();

    const menuItems = [
        { id: "editProfile" , value: <EditProfile /> },
        { id: "profilePhoto" , value: <ProfilePhoto /> },
        { id: "availability", value: <Availability /> },
        { id: "payment", value: <Payment /> },
        { id: "security", value: <Security /> },
        { id: "settings", value: <Settings /> },
    ]

    return(
        <>
            {
               menuItems.filter(e => e.id === componentId).map(element => (
                   element.value
               ))
            }
        </>
    );
}

export default MainPanel;