"use client"
import Logo from "@/components/layout/Logo";
import NavIcon from "@/components/layout/NavItem";
import {NavItems} from "@/model/NavigationBar";
import {faFolder, faGaugeSimpleHigh, faGear, faGrip, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function NavBar() {
    const [selectedTab, setSelectedTab] = useState<NavItems>(NavItems.EXPLORER);

    const onTabClick = (label: NavItems) => {
        setSelectedTab(label);
    }

    return (
        <nav className="flex flex-col min-h-screen bg-light-purple w-24">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <Logo />
                    <NavIcon
                        label={NavItems.DASHBOARD}
                        icon={faGaugeSimpleHigh}
                        selectedTab={selectedTab}
                        onClick={onTabClick}
                    />
                    <NavIcon
                        label={NavItems.PROJECTS}
                        icon={faFolder}
                        selectedTab={selectedTab}
                        onClick={onTabClick}
                    />
                    <NavIcon
                        label={NavItems.EXPLORER}
                        icon={faGrip}
                        selectedTab={selectedTab}
                        onClick={onTabClick}
                    />
                </div>
                <div>
                    <NavIcon
                        label={NavItems.SETTINGS}
                        icon={faGear}
                        selectedTab={selectedTab}
                        onClick={onTabClick}
                    />
                    <NavIcon
                        label={NavItems.LOGOUT}
                        icon={faPowerOff}
                        selectedTab={selectedTab}
                        onClick={onTabClick}
                    />
                </div>
            </div>
        </nav>
    );
}