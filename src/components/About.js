const About = ({image,about}) => {
    return ( 
        <aside>
            {/* pass the image as a props */}
            <img src= {image} alt="blog logo"/>
            {/* pass a props of about */}
            <p>{about}</p>
        </aside>
    );
}
 
export default About;