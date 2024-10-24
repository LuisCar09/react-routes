const ImageComponent = ({urlImage,altName}) => {
    
    
    return(
        <img src={`${urlImage}`} alt={`${altName}`} />
    )
}

export default ImageComponent