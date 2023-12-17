import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system"; 
import { Box } from "@mui/system";
import BarComponent from "./component/BarComponent";
import BoxContainer from "./component/BoxContainer";

const FaqCanvas = styled(Box)(() =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: "8%",
    marginBottom: "8%"
}))
const FaqContent = styled(Box)(() =>({
    marginLeft:"12%",
    marginBottom:"5%"
}))

const FaqTitle = styled(Typography)(() =>({
  fontSize: 40,
  fontWeight: 800

}))

const FaqTextContent = styled(Typography)(() =>({
  fontSize: 30

}))

const Faq = () => {
    document.title =  'CIT Faqs';
    const itemData = [
      {title: "How can I apply for orgs",
      content: "You can apply for organizations via website by visiting the page of the organization you are interested in"
      },
      {title: "Can i apply more than one org?",
      content: "Yes, you can definitely apply for more than one org during. If you feel like you can handle multiple involvements and roles, then go for it! Org life involves knowing how much responsibility can you take and your priorities as a student and if you are ready to commit to organizations."
      },
      {title: "Where can i see the list of orgs?",
      content: "You may see the complete list of organizations as well as other information on the navigation bar Click that and it will display all the orgs."
      },
      {title: "How much is the org fee? Where do i pay?",
      content: "Each organization has different fees and some do not require it at all. You can see the fees for each org on their respective page. You can pay through the application forms which will contain the payment methods and will ask you to upload a screenshot of the proof of payment."
      },
      {title: "How do i bring up a concern? How do i report for inapproriate behaviour?",
      content: "We are committed to maintaining a safe and vibrant space for everyone to enjoy and participate in. An onsite and online helpdesk will be deployed throughout the campus to receive concerns, questions, and reports from the organizations and participants"
      },

    ]
    
    return (
      <>
      <BoxContainer>
        <h1 className="pageName">Frequently Asked Questions</h1>
      </BoxContainer>

      <FaqCanvas>
          {itemData.map((item) => (
                  <FaqContent>
                    <FaqTitle>{item.title}</FaqTitle>
                    <FaqTextContent>{item.content}</FaqTextContent>
                  </FaqContent>
            ))
            }
        
      </FaqCanvas>

      <BarComponent/>

      

      
      </>
      );
}
 
export default Faq;