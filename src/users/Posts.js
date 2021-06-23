import Post from "../User/Post";

export default function Posts ({items})
{

    return(
        <div>
            {
                items.map(value => <Post item={value}/>)
                //console.log({items})

            }
        </div>
    );
}