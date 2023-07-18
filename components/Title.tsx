const Title = (props) => {
    const { children } = props
    return (
        <div className={`text-center text-white text-4xl`} >
            {children}
        </div>
    )
}

export default Title