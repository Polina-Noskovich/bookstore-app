import { useParams } from "react-router-dom";
import React from 'react';


const Favorites = () => {
    let { username } = useParams();

    return (
        <div>
            <h1>{username} Избранное</h1>
        </div>
    )
}

export default Favorites;