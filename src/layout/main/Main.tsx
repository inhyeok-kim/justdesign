import { Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ContentPaper from "../../components/ContentPaper";
import AccountPage from "../../pages/account/AccountPage";

export default function Main(){
    return (
        <Box
            width={'100%'}
            height={'100%'}
            padding={'10px'}
        >
            <AccountPage />
        </Box>
    )
}