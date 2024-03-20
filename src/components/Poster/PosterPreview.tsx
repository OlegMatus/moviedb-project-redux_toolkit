import React, {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {basePosterURL} from "../../constants";

interface IProps extends PropsWithChildren {
    poster_path: string,
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({poster_path, movie}) => {

    return (
        <div>
            {poster_path ? (
                <img src={`${basePosterURL}/${poster_path}`} alt={movie.title} style={{width: 220, height: 300}}/>
            ) : (
                <span>No Poster Available</span>
            )}
        </div>
    );
};

export {PosterPreview};