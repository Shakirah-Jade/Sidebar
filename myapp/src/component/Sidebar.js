import sidebarItems from "./sidebarItems"
import items  from "../data/sidebar.json"


export default function Sidebar(){
    return (
        <div className="sidebar">
         {items.map((item, index) => <sidebarItems key={index} item ={item}  />)}
        </div>
    )
}