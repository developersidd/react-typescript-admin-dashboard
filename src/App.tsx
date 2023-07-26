import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import Contacts from "./scenes/contacts/Contacts";
import Dashboard from "./scenes/dashboard";
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Invoices from "./scenes/invoices/Invoices";
import Profile from "./scenes/profile/Profile";
import Team from './scenes/team/Team';
import { ColoroModeContext, useMode } from './theme';
import Calendar from "./scenes/calendar/Calendar";
import FAQ from "./scenes/faq/Faq";
/*import Team from "./scenes/team";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
*/

function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColoroModeContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex", position: "relative" }} className='app'>
          <Sidebar />
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
              {/*
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColoroModeContext.Provider>
  )
}

export default App;
