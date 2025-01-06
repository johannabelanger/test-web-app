import logo from '../assets/logo.png'

const Logo = () => {
    return <div className=' w-[206px] flex border-r-[1px] border-border border-solid'>
        <img src={logo} alt="Fluidra Pro logo" className='w-[147px] h-10'></img>
    </div>
}

export default Logo;