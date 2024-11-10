const Article = ({title,date="January 1, 1970",preview,minutes}) => {

    let readTimeDisplay;
    if (minutes < 30) {
        const cups = Math.ceil(minutes / 5);
        readTimeDisplay = "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
        const bentos = Math.ceil(minutes / 10);
        readTimeDisplay = "🍱".repeat(bentos) + ` ${minutes} min read`;
    }

    return ( 
        <article>
            {/* pass a props of title */}
            <h3>{title}</h3>
            {/* pass a props of date */}
            <small>{date}.{readTimeDisplay}</small>
            {/* pass a props of preview */}
            <p>{preview}</p>
        </article>
     );
}
 
export default Article;