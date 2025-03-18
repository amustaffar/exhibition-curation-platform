import { Accordion, AccordionSummary, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import React from "react";

export const AccordionExpandIcon = () => {
  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How to use the platform</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Users start by adding a named exhibition to the list of "My Exhibition" below. Upon clicking on the exhibition itself, users will be routed to an artwork display page, showcasing the most popular artworks by default. Users can browse artworks from different collection APIs, search by term and sort by publication date. Each artwork can be added or removed from the exhibition. The exhibitions are stored permenantly in users' browser and can be deleted accordingly
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">How to view or share an exhibition</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The "Review Exhibition" button on each exhibition page allows users to preview the list of artworks in each exhibition and delete each artwork accordingly within the tab. Below the tab, users can either 1. view the exhibition, or 2. share the exhibition via a URL. In the future, we will provide the functionality to share an exhibition to social media platforms
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">About current collection APIs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Currently the platform offers two collection APIs: 1. The Art Institute of Chicago, and 2. The Statens Museum for Kunst, National Gallery of Denmark. Popularity is the default sort provided by both APIs, it is effectively their most popular or promoted artworks, defined by the institutions themselves. We have not added filtering as users can search instead. For future work, we will add more collection APIs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}