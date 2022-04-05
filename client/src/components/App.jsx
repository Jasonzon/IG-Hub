import '../styles/App.css';
import { AppShell, Navbar, Header, Aside, Footer, Text, MediaQuery, Burger, useMantineTheme, MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import {useState} from "react"
import Brand from "./Brand"

function App() {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');



  return (
  <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
  <MantineProvider theme={{ colorScheme }} withGlobalStyles>
      <AppShell
        styles={{
          main: {
            background: colorScheme === 'dark' ? theme.colors.dark[8] : "#f8f9fa",
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Navbar.Section><Brand /></Navbar.Section>
            <Navbar.Section grow mt="md">{"Links sections"}</Navbar.Section>
            <Navbar.Section>{"Footer with user"}</Navbar.Section>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
  
              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
      </MantineProvider>
      </ColorSchemeProvider>
  );
}

export default App;
