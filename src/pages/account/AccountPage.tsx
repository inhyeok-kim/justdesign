import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ContentPaper from "../../components/ContentPaper";
import { Box } from "@mui/material";

export default function AccountPage(){
    return (
        <Box>
            <Grid2
                container
            >
                <Grid2 
                    xs={3}
                >
                    <ContentPaper></ContentPaper>
                </Grid2>
            </Grid2>
        </Box>
    )
}