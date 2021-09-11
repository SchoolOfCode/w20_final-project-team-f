import { useState } from "react";
import  ProgressButton  from "./ProgressComps/ProgressButton";
import  ProgressCta  from "./ProgressComps/ProgressCta";

import "./ProgressBtn.scss"




const ProgressBtn = () => {



  const [state, setState] = useState(10);



  return (
    <>
      <h2>{state == 100 ? `100% Complete!` : `${state}%`}</h2>
      <ProgressCta width={state} />
      <ProgressButton
        progress={state}
        makeProgress={() => {
          state < 100 
            ? setState(state + 10) 
            : setState(0);
        }}
      />
    </>
  );
};

export default ProgressBtn;






