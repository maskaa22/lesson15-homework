import './Post.css'
export default function Post ({item:{userId, id, title, body}})
{
    return(
        <div className={'posts'}>
            <h2>Titile - {title}</h2>
            <div>userId - {userId}, id - {id}</div>
            <div><span>body</span> - {body}</div>
        </div>
    );
}