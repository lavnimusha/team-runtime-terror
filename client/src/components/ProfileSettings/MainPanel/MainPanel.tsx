import Availability from "../Availability/Availability";
import EditProfile from "../EditProfile/EditProfile";
import Payment from "../Payment/Payment";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Security from "../Security/Security";
import Settings from "../Settings/Settings";

const MainPanel = (panelIndex: any): JSX.Element => {

    const menuItems = [
        <EditProfile key={panelIndex} />,
        <ProfilePhoto key={panelIndex} />,
        <Availability key={panelIndex} />,
        <Payment key={panelIndex} />,
        <Security key={panelIndex} />,
        <Settings key={panelIndex} />,
    ]

    return(
        <>
            {menuItems[panelIndex.panelIndex]}
        </>
    );
}

export default MainPanel;