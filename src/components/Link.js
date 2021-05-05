import { useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import { CurrentPageTitleContext } from "./contexts/CurrentPageTitleContext";

function Link({path, title, children}) {
  const {currentTitle, setCurrentTitle} = useContext(CurrentPageTitleContext)

  useEffect(() => {
    setCurrentTitle(title);
  })

  return (
    <Route path={path}>
        {children}
    </Route>
  );
  }
  
  export default Link;
  