import React from "react";
import Articleoverview from "./articleoverview/Articleoverview";
import Header from "./header/header";

function Layout () {  
  return (
    <div>
      <Header />
      <Articleoverview />
    </div>
  ); 
}

export default Layout;