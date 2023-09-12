import { useState } from "react"

export default function sidebarItem(){
    
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">
                <span>
                    <i className="bi-file"></i>
                File share
                </span>
                    <i className="inbox"></i>
               <span>
                inbox
               </span>
               <span>
                <i className="send"></i>
                Sent
               </span>
               <span>
                <i className="three-dots"></i>
                All files
               </span>
               <span>
                <i className=""></i>
                Drafts
               </span>
               <span>
                <i className="heart"></i>
                Favourites
               </span>
            </div>
        </div>
    )

}


    // if(item.childrens){
    //     return (
    //         <div className={open ? "sidebar-item open" : "sidebar-item"}>
    //             <div className="sidebar-title">
    //                 <span>
    //                     { item.icon && <i className={item.icon}></i> }
    //                     {item.title}    
    //                 </span> 
    //                 <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
    //             </div>
    //             <div className="sidebar-content">
    //                 { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
    //             </div>
    //         </div>
    //     )
    // }else{
    //     return (
    //         <a href={item.path || "#"} className="sidebar-item plain">
    //             { item.icon && <i className={item.icon}></i> }
    //             {item.title}
    //         </a>
    //     )
    // }