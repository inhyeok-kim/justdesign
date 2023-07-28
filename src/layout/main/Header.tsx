import { AppBar, Box, Button, Container, IconButton, Menu, Paper, Toolbar, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import HeaderMenuButton from "../../components/HeaderMenuButton";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header(){
    return (
        <Box
            width={'100%'}
            height={'100%'}
            bgcolor={'rgba(0,0,0,0.5)'}
        >
            <Grid2
                container
                height={'100%'}
            >
                <Grid2
                    xs={8}
                    height={'100%'}
                >
                    <HeaderButtonArea />
                </Grid2>
                <Grid2
                    xs={4}
                    height={'100%'}
                >
                    <HeaderProfileArea />
                </Grid2>
            </Grid2>

        </Box>
    )
}

function HeaderButtonArea(){
    return (
        <Grid2
            container
            alignItems={'center'}
            height={'100%'}
        >
            <IconButton
                sx={{
                    color : 'white',
                    margin : '0px 5px 0px 10px'
                }}
            >
                <AppsIcon/>
            </IconButton>
            {pages.map((page) => (
                <HeaderMenuButton
                    key={page.id}
                    text={page.name}
                    subMenu={page.subMenu}
                />
            ))}
        </Grid2>
    )
}

function HeaderProfileArea(){
    return (
        <Grid2
            container
            justifyContent={"end"}
            alignItems={'center'}
            height={'100%'}
        >
            <IconButton
                size="large"
                sx={{
                    color : 'white',
                    margin : '0px 10px 0px 5px'
                }}
            >
                <AccountCircle />
            </IconButton>
        </Grid2>
    )
}

const pages : Menu[] = [
    {
        id : '1',
        name : '가계부',
        subMenu : [
            {
                id : '11',
                name : '자산관리'
            },
            {
                id : '12',
                name : '예산관리'
            },
            {
                id : '13',
                name : '거래내역'
            },
        ]
    },
    {
        id : '2',
        name : '일정',
        subMenu : []
    },
]