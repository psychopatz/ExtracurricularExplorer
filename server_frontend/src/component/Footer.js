import { Typography,styled } from "@mui/material";
import { format } from 'date-fns'


const FooterTxt = styled(Typography)(() =>({
    fontSize: 20,
    textAlign: "center",
    fontWeight: 200
}))

const Footer = () => {
    return ( 
        <FooterTxt>
            Cebu Institute of Technology University {format(new Date(), 'yyyy')} © all rights  reserved
        </FooterTxt>
     );
}
 
export default Footer;