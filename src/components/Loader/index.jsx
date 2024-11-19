function Loader (props) {
    return (
        <div className='container_loading'>
            <div className='loader'></div>
            <h5>{props.texto}</h5>
        </div>
    )
}

export default Loader