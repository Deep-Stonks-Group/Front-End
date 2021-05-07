import Report1 from "./Report1";
import Report2 from "./Report2";


const map = {
    'report1': Report1,
    'report2': Report2
}


function get(reportId) {
    return map[reportId];
}
  
export default get;
  