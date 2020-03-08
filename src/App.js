import React, { useState } from 'react';
import './App.css';
import Tab from './components/Tab';
import ShowContent from './components/ShowContent';
import DisplayContent from './components/DisplayContent';

const App = () => {

  const [activeTab, setActiveTab] = useState({
      activeTab: '',
      activeContent: '' 
      });
  

  const tabs = [{
    tabLabel: "Tab 1",
    tabContent: "Tab 1 content"
  },
  {
    tabLabel: "Tab 2",
    tabContent: "Tab 2 content"
  },
  {
    tabLabel: "Tab 3",
    tabContent: "Tab 3 content"
  }
  ]
  
  
  return (
    <div className="App">
      {tabs.map(item => (<Tab activeTab={activeTab} setActiveTab={setActiveTab} label={item["tabLabel"]} content = {item["tabContent"]}/>))}
      
      <div className="displayBox">
          <h1>{activeTab.activeContent}</h1>
      </div>
    </div>
  );
}

export default App;
