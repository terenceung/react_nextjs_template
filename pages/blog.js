
const a = 1;

export default function Blog({posts}) {
    return (
      <ul>
          {posts.map(post=><li key={post.id}>{post.title}</li>)}
      </ul>
    )
  }
  
export async function getStaticProps(context){
    console.log(context);
    let posts = [{id:1,title:'abc'},{id:2,title:'def'}];
    return {
        props: {
            posts
        }
    }
}