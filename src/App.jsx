import { useState } from "react";
import Feedback from "./Feedback";
import Customersupport from "./Customersupport";
import Survey from "./Survey";
import Profile from "./Profile";



function App() {
  return (
    <div className="space-y-8">
      <Feedback />
      <Customersupport />
      <Survey />
      <Profile />
    </div>
  );
}

export default App;
