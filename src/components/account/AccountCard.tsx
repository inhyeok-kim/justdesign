import { Card, Typography, Avatar} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
export default function AccountCard(){
    return (
        <Card
            sx={{
                padding : '10px'
            }}
        >
            <Grid2
                container
                marginBottom={'5px'}
            >
                <Grid2 xs={10}>
                    <Grid2
                        container
                        alignItems={'center'}
                    >
                        <Avatar
                            sx={{
                                width : '24px',
                                height : '24px',
                                marginRight : '5px'
                            }}
                        >
                            <AccountBalanceIcon fontSize="small" />
                        </Avatar>
                        <Typography variant="body2">하나은행 계좌</Typography>
                    </Grid2>
                </Grid2>
                <Grid2 
                    xs={2}
                    textAlign={'right'}
                >
                    <AccountBalanceIcon />
                </Grid2>
            </Grid2>
            <Grid2
                container
            >
                <Typography
                    variant="body2"
                    align="right"
                    width={'100%'}
                >
                    120,344,200
                </Typography>
            </Grid2>
        </Card>
    )
}