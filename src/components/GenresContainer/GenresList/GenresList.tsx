import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const GenresList: FC<IProps> = () => {

    return (
        <div>
            GenresList
        </div>
    );
};

export {GenresList};