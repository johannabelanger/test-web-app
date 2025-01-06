import Header from "./Header";
import SideNav from "./SideNav";
import Content from "./Content";
import {Outlet} from 'react-router';
import { useState } from "react";

type LayoutProps = {
    subscriberName: string;
}
const Layout = ({subscriberName}:LayoutProps) => {
    const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);
    console.log("Menu open: ", menuOpen);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
        return {};
    }

    return <div className="fixed w-full h-full top-0 right-0 bottom-0 left-0 flex flex-col bg-body-bgWhite">
        <Header toggleMenuOpen={toggleMenuOpen} subscriberName={subscriberName}></Header>
        <div className="flex flex-1 items-stretch">
            <SideNav menuOpen={menuOpen}></SideNav>
            <Content menuOpen={menuOpen}>
                <Outlet />
            </Content>
        </div>
    </div> 
}
   
export default Layout; 