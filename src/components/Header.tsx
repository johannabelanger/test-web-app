import Button from "./Button";
import Logo from "./Logo";
import { BellIcon, UserCircleIcon, MenuButtonIcon } from "./icons";

export type HeaderProps = {
    toggleMenuOpen: () => {};
    subscriberName?: string;
};
export const Header = ({toggleMenuOpen, subscriberName}: HeaderProps) => {
    //const subscriberName = "Company Name";
    return <div className='w-full h-[70px] pl-6 pr-8 shadow flex flex-shrink-0 items-center justify-between'>
        <div className='flex text-text-primary gap-6 items-center'>
            <Button color='transparent' className='px-2' onClick={toggleMenuOpen}>
                <MenuButtonIcon/>
            </Button>
            <Logo />
            <span className='hidden sm:inline h-5 text-sm px-4'>{subscriberName}</span>
        </div>
        <div className='flex gap-x-4'>
            <div className='flex gap-3 place-items-center'>
                <Button size='md' color='transparent' className='px-2'>
                    <BellIcon className='stroke-gray-400 size-6' />
                </Button>
                <Button size='md' color='transparent' className='px-2'>
                    <UserCircleIcon className='stroke-gray-400 size-6' />
                </Button>
            </div>
        </div>
    </div>
}

export default Header;