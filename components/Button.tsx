const Button = (props) => {
    const { children ,className="" ,...rest} = props
    return (
        <div className={`rounded-2xl shadow-md text-center px-8 py-4 text-white bg-[#3B29AE] cursor-pointer ${className}`} {...rest}>{children}</div>
    )
}

export default Button