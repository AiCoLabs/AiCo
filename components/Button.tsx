const Button = (props) => {
    const { children ,className="" ,...rest} = props
    return (
        <div className={`w-60 px-8 py-4 rounded-2xl shadow-md text-center font-medium bg-[#3B29AE] cursor-pointer ${className}`} {...rest}>{children}</div>
    )
}

export default Button