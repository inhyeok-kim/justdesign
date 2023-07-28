import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ContentPaper from "../../components/ContentPaper";
import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AccountStack from "../../components/account/AccountStack";

export default function AccountPage(){
    return (
        <Box>
            <Grid2
                container
                columnSpacing={2}
            >
                <AccountStack />
                <AccountStack />
                <AccountStack />
                <AccountStack />
                <Grid2 
                    md={2}
                >
                    <ContentPaper
                        header="거래 내역"
                        footer={<Button 
                            size="small"
                            startIcon={<AddIcon/>} 
                            fullWidth 
                            sx={{
                                color:"white",
                                justifyContent : 'start'
                            }}
                        >거래 추가</Button>}
                    >
                        
                    </ContentPaper>
                </Grid2>

            </Grid2>
        </Box>
    )
}