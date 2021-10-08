import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import GlobalStyles from './components/styles/Global';
import content from './content'

const theme = {
  colors: {
    header: '#FFD6D1',
    body: '#fff',
    footer: '#E8B3B8',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
