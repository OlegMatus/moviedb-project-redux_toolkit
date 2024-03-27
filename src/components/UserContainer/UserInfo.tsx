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
            >
                <div style={{display: "flex", flexFlow: "wrap", alignItems: "center", color: "gold"}}>
                    <div><b style={{color: "blue"}}>SlavaUkraine!</b></div>
                    <Avatar src="/broken-image.jpg" style={{marginLeft: 10, marginRight: 10}}/>
                    <div>{userInfo && <span>user</span>}</div>
                </div>
            </Stack>
        </div>
    );
};

export {UserInfo}
