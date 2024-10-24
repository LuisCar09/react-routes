import UnOrderedList from "../header/UnorderList";
const footerElements = [
    {
        name: 'GitHub',
        link: 'https://github.com/',
        id: crypto.randomUUID()
    },
    {
        name: 'Facebook',
        link: 'https://facebook.com/',
        id: crypto.randomUUID()
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/',
        id: crypto.randomUUID()
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/',
        id: crypto.randomUUID()
    }
];

const Footer = () => {
    return(
        <footer>
            <UnOrderedList list ={footerElements} openApart  />
        </footer>
    )
}
export default Footer