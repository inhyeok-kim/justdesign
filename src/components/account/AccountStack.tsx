import ContentPaper from "../ContentPaper";
import { Stack, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AccountCard from "../../components/account/AccountCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function AccountStack(){

    return (
        <Grid2
            xs={2}
            minWidth={'200px'}
            maxWidth={'240px'}
            height={'100%'}
        >
            <ContentPaper
                header={"자산 목록"}
                footer={<Button 
                    size="small"
                    startIcon={<AddIcon/>} 
                    fullWidth 
                    sx={{
                        color:"white",
                        justifyContent : 'start'
                    }}
                >자산 추가</Button>}
            >
                <Stack
                    spacing={1}
                >
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                    <AccountCard />
                </Stack>
            </ContentPaper>
        </Grid2>
        
    )
}