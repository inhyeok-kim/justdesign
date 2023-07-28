import { Card, CardContent, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface ContentPaperProps {
    children? : React.ReactNode[]
    header? : React.ReactNode
    footer? : React.ReactNode
}

export default function ContentPaper(props : ContentPaperProps){
    return (
        <Paper
            elevation={2}
            sx={{
                background : 'rgba(0,0,0,0.25)',
                padding : '5px 10px'
            }}
        >
            <Grid2
                container
            >
                <Grid2
                    xs={12}
                    padding={'0px 5px'}
                >
                    {props.header}
                </Grid2>
                <Grid2
                    xs={12}
                    padding={'5px 0px'}
                >
                    {props.children}
                </Grid2>
                <Grid2
                    xs={12}
                    padding={'0px 5px'}
                >
                    {props.footer}
                </Grid2>
            </Grid2>
        </Paper>
    )
}