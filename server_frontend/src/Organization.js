import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import BoxContainer from "./component/BoxContainer";
import NewOrgBtn from "./component/NewOrgBtn";
import OrgContentComponent from "./component/OrgContentComponent";
import OrgMainComponent from "./component/OrgMainComponent";
import callApi from "./hooks/callApi";


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
    const [orgData, setOrgData] = useState(null)
    // const orgData = {
    //     id:1,
    //     name:"Nursing Student Body Organization",
    //     acronym:"NSBO",
    //     logo: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    //     orgDataID: 2
    // }
    document.title =  'Browse CIT Organization';
    
    const fetchData = async () => {
        const endpoint = "/org/getAll"; 
        try {
          const response = await callApi(endpoint, 'GET');
          setOrgData(response.data)
          console.log('Server Data:', orgData);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
  };

    useEffect(() => {
        fetchData()

    }, []);



    return (
        <>
        <BoxContainer>
        <h1 className="pageName">Organization</h1>
        </BoxContainer>
        
        {orgData && (
        
        <OrgBox>
            {orgData.map((item)=>(
                <OrgMainComponent org = {item}/>
            ))}
        </OrgBox>)
        }
        <NewOrgBtn/>

        </>
    );
}
 
export default Organization;