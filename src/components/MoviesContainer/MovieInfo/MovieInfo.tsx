import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const MovieInfo: FC<IProps> = () => {

    return (
        <div>
            MovieInfo
        </div>
    );
};

export {MovieInfo};