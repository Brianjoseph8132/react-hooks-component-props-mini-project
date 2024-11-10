import Article from "./Article";

const ArticleList = ({posts}) => {
    return ( 
       <main>
        {/* pass post as a props */}
        {
            posts && posts.map((post) =>(
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
            ))
        }
       </main>
     );
}
 
export default ArticleList;