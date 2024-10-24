import ListItem from './ListItem'

const UnOrderedList = ({list,openApart}) => {
    
    
    return (
        <ul>
                {list.map(item => <ListItem key={item.id} name ={item.name} link={item.link} openApart ={item.openApart} />)}
        </ul>
    )
}

export default UnOrderedList