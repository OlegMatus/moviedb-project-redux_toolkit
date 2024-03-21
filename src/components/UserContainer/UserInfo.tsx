import {useState} from "react";

import {Avatar, Stack} from "@mui/material";

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<boolean>(true);

    const handleMouseLeave = () => {
        setUserInfo(true)
    };

    const handleMouseEnter = () => {
        setUserInfo(false)
    };

    return (
        <div style={{position: "static"}}>
            <Stack
                direction={"column"}
                alignItems={"center"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    color: 'yellow',
                    height: 80,
                    marginLeft: 10,
                }}
            >
                <b style={{color: "blue"}}>SlavaUkraine!</b>
                <Avatar src="/broken-image.jpg"/>
                {userInfo && <span>user</span>}
            </Stack>
        </div>
    );
};

export {UserInfo}
