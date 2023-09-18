import { Fragment } from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Navigation: React.FC = () => {
    return (
        <Fragment>
            <NavigationDesktop />
            <NavigationMobile />
        </Fragment>
    )
}

export default Navigation;