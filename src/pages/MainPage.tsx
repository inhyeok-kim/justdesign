import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Header from "../layout/main/Header";
import Main from "../layout/main/Main";
import { HEADER_HEIGHT } from "../constants/Constant";
import { blue } from "@mui/material/colors";

export default function MainPage(){
    return (
        <Box
            width={'100vw'}
            height={'100vh'}
            bgcolor={blue[400]}
        >
            <Grid
                xs={12}
                height={HEADER_HEIGHT}
            >
                <Header />
            </Grid>
            <Grid
                xs={12}
                height={`calc(100% - ${HEADER_HEIGHT})`}
            >
                <Main />
            </Grid>
        </Box>
    )
}
