import React from "react";
import { useParams } from "react-router-dom";
import get from '../reports/ReportMap';

function Reports({reportIdProp}) {
  let { reportId } = useParams();
  if(!reportIdProp){
    reportIdProp = reportId;
  }
    return (
        <div>
          {React.createElement(get(reportIdProp))}
        </div>
    );
  }
  
  export default Reports;
  