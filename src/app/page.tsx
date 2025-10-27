// app/page.tsx
import { Container, Box, Typography, Avatar } from "@mui/material";

import exampleData from "../data/example-data.json"

async function loadData() {
  try {
    // Optional import if present
    const data = await import('../data/data.json');
    return data;
  } catch (error) {
    console.warn("data.json not found, using default values.");
    return exampleData;
  }
}

const Home = async () => {
  const data = await loadData();
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <Avatar
        alt="Alt P"
        src={data.image}
        sx={{ width: 100, height: 100, margin: '0 auto' }}
      />
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
        {data.name}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {data.bio}
      </Typography>
    </Container>
  );
};

export default Home;
