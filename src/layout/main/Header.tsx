import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import HeaderNav from "../../components/common/HeaderNav";


export default function Header(){
    return (
        <Box
            width={'100%'}
            height={'100%'}
            bgcolor={'rgba(0,0,0,0.5)'}
        >
            <HeaderNav />
        </Box>
    )
}
