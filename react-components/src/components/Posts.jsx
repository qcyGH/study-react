import {Post} from './Post'

export function Posts (props) {
    return <div>
        {
            props.posts.map(post => (
                <Post func={props.func} id={post.id} key={post.id} name={post.name}/>
            ))
        }
    </div>
}