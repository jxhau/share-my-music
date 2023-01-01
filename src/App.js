import { Container, Box } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW='100%'  bgColor='gray.800'>
        <Box px='10' pt='8'>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/06A0EIPtU2RYpNX8E1r4hO?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>

        <Box px='10' pt='8'>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>
        <Box px='10' pt='8'>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/451TAZLUtPNsnvrK6KaKZB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>

        <Box px='10' pt='8'>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>
        
        <Box px='10' py='8'>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/1qbJx4kFTi7KbYIuJTE4CW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>
    </Container>
  );
}

export default App;
