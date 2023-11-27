import Header from "../components/Header";
import Sidebar from "./Sliderbar";

function DeafaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                      {children}
                </div>
            </div>
        </div>
     );
}

export default DeafaultLayout;