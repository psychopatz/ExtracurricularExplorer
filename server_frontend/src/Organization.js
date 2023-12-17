import styled from "@emotion/styled";
import { Box } from "@mui/system";
import BoxContainer from "./component/BoxContainer";
import NewOrgBtn from "./component/NewOrgBtn";
import OrgContentComponent from "./component/OrgContentComponent";
import OrgMainComponent from "./component/OrgMainComponent";


const OrgBox = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,


}))

    // private int id;
    // private String name;
    // private String acronym;
    // private Collection<String> tags;
    // private String logo;
    // private int orgDataID;
const Organization = () => {
    const orgData = {
        id:1,
        name:"Nursing Student Body Organization",
        acronym:"NSBO",
        logo: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        orgDataID: 2
    }
    document.title =  'Browse CIT Organization';
    return (
        <>
        <BoxContainer>
        <h1 className="pageName">Organization</h1>
        </BoxContainer>
        
        <OrgBox>
            <OrgMainComponent org = {orgData}/>
            <OrgMainComponent org = {orgData}/>
            <OrgMainComponent org = {orgData}/>
            <OrgMainComponent org = {orgData}/>
            <OrgMainComponent org = {orgData}/>
            <OrgMainComponent org = {orgData}/>
            {/* <OrgContentComponent/> */}

        </OrgBox>
        <NewOrgBtn/>

        </>
    );
}
 
export default Organization;