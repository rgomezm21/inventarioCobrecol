import ShowProducts from "../../components/ShowProducts";
import { Sidebar } from "../../components/SidebarRecords";

export const Products = () => {
  return (
    <div className="container-fluid" style={{paddingLeft:'2px'}}>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10" style={{paddingLeft:'0px'}}>
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};
