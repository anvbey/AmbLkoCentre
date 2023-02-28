
import './App.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import BasicTabs from './Tabs/Tab';
import Types from './Footer/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <BasicTabs/>
    <Content/>
    <BasicTabs/>
    <Types/>
    </>
  );
}

export default App;
