import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/GlobalStyles';
import content from './content';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
