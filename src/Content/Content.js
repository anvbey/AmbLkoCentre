import { Box, display } from "@mui/system";
import { Button } from "@mui/material";

const Content= ()=>{
    return (
        // Outr box
        <Box sx={{
            marginTop: '100px',
            marginBottom: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>

            {/* Button */}
            <Box>
                <Button variant="contained">Vist Us!</Button>
            </Box>

            {/* images */}
            <Box>
            <img
            src= '/logo192.png'
            alt= 'blh'
            loading="lazy"
          />
            </Box>

        </Box>
    )
}

export default Content;