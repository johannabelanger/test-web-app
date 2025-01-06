import { PropsWithChildren } from "react";
import clsx from 'clsx/lite';

interface ContentProps extends PropsWithChildren {
    menuOpen?: boolean; 
}

const Content = ({menuOpen, children}: ContentProps) => {
    return <main className={clsx('absolute top-[70px] right-0 bottom-0', menuOpen === undefined && 'left-0 sm:left-12 lg:left-64', menuOpen === true && 'hidden sm:left-12 lg:left-64', menuOpen === false && 'left-0')}>
        {children}
    </main>
}

export default Content;