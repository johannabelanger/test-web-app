import { CalendarIcon, ChatBubbleLeftRight, Cog8ToothIcon, DocumentChartBarIcon, HomeIcon, SparklesIcon, UsersIcon, WrenchIcon } from "./icons";
import { NavLink } from 'react-router';
import { PropsWithChildren } from "react";
import clsx from 'clsx/lite';


type MenuOption = {icon: JSX.Element, label: string, path:string, followWithDivider?: boolean}

type SideNavMenuButtonProps = MenuOption;

const options: MenuOption[] = [
    {
        icon: <HomeIcon />,
        label: 'Dashboard',
        path: '/',
    },
    {
        icon: <SparklesIcon />,
        label: 'Leads',
        path: '/leads',
    },
    {
        icon: <UsersIcon />,
        label: 'Customers',
        path: '/customers',
    },
    {
        icon: <WrenchIcon />,
        label: 'Work Orders',
        path: '/work-orders',
    },
    {
        icon: <CalendarIcon />,
        label: 'Schedule',
        path: '/schedule',
        followWithDivider: true,
    },
    {
        icon: <DocumentChartBarIcon />,
        label: 'Reports',
        path: '/reports',
    },
    {
        icon: <ChatBubbleLeftRight />,
        label: 'Support',
        path: '/support',
    },
    { 
        icon: <Cog8ToothIcon />,
        label: 'Settings',
        path: '/settings',
    },
];



const SideNavMenuButton = ({icon, label, path}: SideNavMenuButtonProps) => {
    return <div className='flex bg-fluidra-aqua-500 text-white'> 
        <NavLink  to={path} className='text-sm leading-5 flex items-center no-wrap justify-start w-full font-semibold bg-transparent h-10 py-2 px-3 gap-x-3 border-l-0  aria-[current=page]:border-l-4  aria-[current=page]:border-fluidra-blue-500  aria-[current=page]:bg-fluidra-blue-500  aria-[current=page]:bg-opacity-20'>
            {icon}
            <span className='inline sm:hidden lg:inline'>{label}</span>   
        </NavLink>
    </div>
}

interface SideNavProps extends PropsWithChildren {
    menuOpen?: boolean; 
}

const SideNav = ({menuOpen}: SideNavProps) => {
    return <div  className={clsx('overflow-auto sm:flex sm:flex-col sm:justify-start sm:items-stretch pt-5 pb-5 bg-fluidra-aqua-500', menuOpen === undefined && 'hidden sm:w-12 lg:w-64', menuOpen === true && 'w-full sm:w-12 lg:w-64', menuOpen === false && 'hidden')}>
        {
            options.map(({icon, label, path, followWithDivider}: MenuOption) => {
                const button = <SideNavMenuButton icon={icon} label={label} path={path} />;
                return <>
                    {button}
                    {followWithDivider ? 
                        <div className='flex justify-start sm:justify-center items-center gap-2 py-2'>
                            <div className='h-[1px] w-[217px] sm:w-6 lg:w-[217px] mx-3 bg-fluidra-aqua-100'/>
                        </div> : null
                    }
                </>
            })
        }
    </div>
}

export default SideNav; 