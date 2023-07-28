import { Button, Menu, MenuItem, MenuList, Popover } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface HeaderMenuButtonProps {
    text? : string
    subMenu? : Menu[]
}
export default function HeaderMenuButton(
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
                        animationDuration : '0.5s',
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