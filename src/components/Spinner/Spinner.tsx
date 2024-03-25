import {Box, CircularProgress, circularProgressClasses, CircularProgressProps, Stack} from "@mui/material";

const Spinner = () => {
    function FacebookCircularProgress(props: CircularProgressProps) {
        return (
            <Box sx={{position: 'relative'}}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#3127C9E8' : '#308fe8'),
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                />
            </Box>
        );
    }

    return (
        <div>
            <Stack spacing={2} sx={{flexGrow: 1}}>
                <FacebookCircularProgress/>
            </Stack>
        </div>
    );
};

export {Spinner};