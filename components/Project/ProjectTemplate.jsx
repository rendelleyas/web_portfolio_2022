
const Footer = ({children}) => {
    return (
        <>
            <div className="grayscale hover:grayscale-0 duration-300 relative text-center group flex justify-center cursor-pointer m-2">
                {/* <img className="w-[750px]" src="/images/conx.jpg" alt="" />
                <div className=" absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] font-bold ">PRTC - SMAH</div> */}
                {children}
            </div>
        </>
    )
}

export default Footer;