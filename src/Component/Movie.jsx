import {useEffect, useState} from "react";


const Movie = ({ titles }) => {
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${titles} has been Liked: ${hasLiked}`);
    }, [hasLiked]);
    return (
        <div className="body" onClick={() => setCount((prevState) => prevState + 1 )}>
            <p>
                {titles}
            <br />
                {count || null}
            </p>
           <button onClick={() => setHasLiked((!hasLiked))}>
               {hasLiked ? "❤" : "🤍"}
           </button>

        </div>
    );
}

export default Movie