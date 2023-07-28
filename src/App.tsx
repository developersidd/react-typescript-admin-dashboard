import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import Bar from "./scenes/bar/Bar";
import Calendar from "./scenes/calendar/Calendar";
import Contacts from "./scenes/contacts/Contacts";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq/Faq";
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Invoices from "./scenes/invoices/Invoices";
import Line from "./scenes/line/Line";
import Pie from "./scenes/pie/Pie";
import Profile from "./scenes/profile/Profile";
import Team from './scenes/team/Team';
import { ColoroModeContext, useMode } from './theme';
import Geography from "./scenes/geo/Geography";

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColoroModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex" }} className='app'>
          <div style={{ position: "sticky", top: 0, left: 0 , zIndex: "999999" }}>
            <Sidebar />
          </div>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColoroModeContext.Provider>
  )
}

export default App;
