import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, IconButton, MenuItem, MenuList } from "@mui/material";
import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function HeaderNav(){
    return (
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

interface HeaderMenuButtonProps {
    text? : string
    subMenu? : Menu[]
}
function HeaderMenuButton(
    props : HeaderMenuButtonProps
){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setIsOpen(true);
    };

    const handlePopoverClose = () => {
        setIsOpen(false);
    };

    return (
        <Grid2
            position={'relative'}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            margin={'0px 2.5px 0px 5px'}
        >
            <Button
                sx={{color: 'white',zIndex:1}}
                endIcon={props.subMenu && props.subMenu.length>0 ? <ExpandMoreIcon/> : ''}
                onClick={()=>{}}
            >
                {props.text}
            </Button>
            {
                isOpen?
                <Grid2
                    position={'absolute'}
                    top={'0'}
                    overflow={"hidden"}
                    sx={{
                        animationName : 'opacityIn',
                        animationDuration : '0.25s',
                        animationFillMode: 'forwards',
                        zIndex : 0,
                    }}
                >
                    <Grid2
                        position={'absolute'}
                        top={'36px'}
                        bgcolor={'rgba(0,0,0,0.5)'}
                        height={'calc(100% - 36px)'}
                        width={'100%'}
                    ></Grid2>
                    <MenuList
                        sx={{
                            marginTop:'30%',
                            color : 'white',
                        }}
                    >
                        {
                            props.subMenu?
                            props.subMenu.map((menu)=>{
                                return (
                                    <MenuItem 
                                        dense={true}
                                        selected={true}
                                        sx={{
                                            '& .Mui-selected' : {
                                                background : 'white',
                                            }
                                        }}
                                    >
                                        {menu.name}
                                    </MenuItem>
                                )
                            })
                            :''
                        }
                    </MenuList>
                </Grid2>
                :
                ''
            }
        </Grid2>
    )
}

