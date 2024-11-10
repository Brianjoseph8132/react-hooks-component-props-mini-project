const Header = ({name}) => {
    return ( 
        <header>
            {/* pass a props called name */}
            <h1>{name}</h1>
        </header>
     );
}
 
export default Header;