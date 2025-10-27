// app/about/page.tsx
import { Container, Typography, Box, List, ListItem, ListItemText, Avatar } from "@mui/material";
import exampleAbout from '../../data/example-about.json';


async function loadAbout() {
  try {
    // Optional import if present
    const data = await import('../../data/about.json');
    return data;
  } catch (error) {
    console.warn("about.json not found, using default values.");
    return exampleAbout;
  }
}

const About = async () => {
  const { education, workExperience, hobbies } = await loadAbout();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Education</Typography>
        <List>
          {education.map((edu, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${edu.degree}, ${edu.institution}`}
                secondary={edu.year}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Work Experience</Typography>
        <List>
          {workExperience.map((job, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${job.jobTitle}, ${job.company}`}
                secondary={`${job.duration} - ${job.responsibilities.join(', ')}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Hobbies</Typography>
        <List>
          {hobbies.map((hobby, index) => (
            <ListItem key={index}>
              <ListItemText primary={hobby} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default About;
