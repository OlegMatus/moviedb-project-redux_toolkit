import React, {FC, PropsWithChildren, useEffect, useState} from 'react';


import StarIcon from '@mui/icons-material/Star';
import {Box, Rating} from "@mui/material";

interface IProps extends PropsWithChildren {
    vote_average: number
}

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
    5.5: 'Amazing',
    6: 'Amazing+',
    6.5: 'Outstanding',
    7: 'Outstanding+',
    7.5: 'Incredible',
    8: 'Incredible+',
    8.5: 'Masterpiece',
    9: 'Masterpiece+',
    9.5: 'Unbelievable',
    10: 'Unbelievable+',
};

const StarsRating: FC<IProps> = ({vote_average}) => {
    const [ratingState, setRatingState] = useState<number | null>(vote_average);
    // const [hover] = useState(-1);

    useEffect(() => {
        try {
            setRatingState(vote_average)
        } catch (e) {
            console.error("Error fetching vote_average:", e);
        }
    }, [vote_average]);

    function getLabelText(voteAverage: number) {
        return `${vote_average} Star${vote_average !== 1 ? 's' : ''}, ${labels[voteAverage]}`;
    }

    return (
        <div>
            <Box
                sx={{
                    width: 50,
                    height: 25,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="vote_average"
                    value={ratingState}
                    max={10}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setRatingState(newValue);
                    }}
                    emptyIcon={<StarIcon style={{opacity: 2.55}}/>}
                    sx={{
                        fontSize: 18,
                        boxSizing: 'border-box',
                        position: 'absolute'
                    }}
                />
                {/*{vote_average !== null && (*/}
                {/*    <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : vote_average]}</Box>*/}
                {/*)}*/}
            </Box>
        </div>
    );
};

export {StarsRating};