import { PropsWithChildren } from "react";

const ContentGrid = ({children}: PropsWithChildren) => {
    return <div className='grid auto-rows-[8px] gap-y-[8px]
            grid-cols-4 gap-x-4 margin-4 
            sm:grid-cols-8 sm:gap-x-5 sm:margin-5
            md:grid-cols-12 md:gap-x-6 md:margin-6
            lg:grid-cols-12 lg:gap-x-6 lg:margin-6
            xxl:grid-cols-12 xxl:gap-x-8 xxl:margin-8'>
        {children}
    </div>
}

export default ContentGrid;