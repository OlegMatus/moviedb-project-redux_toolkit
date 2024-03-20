import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const SearchMovie: FC<IProps> = () => {

    return (
        <div>
            SearchMovie
        </div>
    );
};

export {SearchMovie};