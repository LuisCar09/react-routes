const ParagraphComponent = ({description,titleDescription}) => {
    
    
    return(
        <p><span>{titleDescription}:</span> {`${description}`}</p>
    )
}

export default ParagraphComponent