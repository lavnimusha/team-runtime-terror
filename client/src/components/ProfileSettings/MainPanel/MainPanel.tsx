import Availability from "../Availability/Availability";
import EditProfile from "../EditProfile/EditProfile";
import Payment from "../Payment/Payment";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Security from "../Security/Security";
import Settings from "../Settings/Settings";
import { useParams } from 'react-router-dom';

const MainPanel = (): JSX.Element => {

    const { componentId } = useParams<{ componentId: string }>();

    function renderComponent(param: string) {
        switch(param) {
            case 'edit-profile':
                return <EditProfile />
            case 'profile-photo':
                return <ProfilePhoto />
            case 'availability':
                return <Availability />
            case 'payment':
                return <Payment />
            case 'security':
                return <Security />
            case 'settings':
                return <Settings />
            default:
                return <EditProfile />
        }
    }

    return(
        <>
            {
                renderComponent(componentId)
            }
        </>
    );
}

export default MainPanel;