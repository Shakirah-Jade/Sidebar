import { useState } from "react"

export default function sidebarItem({item}){
    const [open, setOpen] = useState
    // return (
    //     <div className= {open ? "sidebar-item open" : "sidebar-item"}>
    //         <div className="sidebar-title">
    //             {/* <span>
    //                 <i className="bi-file"></i>
    //             File share
    //             </span>
    //                 <i className="inbox"></i>
    //            <span>
    //             inbox
    //            </span>
    //            <span>
    //             <i className="send"></i>
    //             Sent
    //            </span> */}
    //            <span>
    //             <i className="bi-gear-fill"></i>
    //             {item.title}
    //            </span>
    //            <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
    //            {/* <span>
    //             Drafts
    //            </span>
    //            <span>
    //             <i className="heart"></i>
    //             Favourites
    //            </span> */}
    //         </div>
    //         <div className="sidebar-content">
    //             hello
    //         </div>
    //     </div>
    // )


     if(item.childrens){
             return (
        <div className= {open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                {/* <span>
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
               </span> */}
               <span>
                {item.icon && <i className= {item.icon}></i> }
                {item.title}
               </span>
               <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
               {/* <span>
                Drafts
               </span>
               <span>
                <i className="heart"></i>
                Favourites
               </span> */}
            </div>
            <div className="sidebar-content">
            {item.childrens.map((child, index) => <sidebarItems key={index} item ={child}  />)}
            </div>
        </div>
    )
            // <div className={open ? "sidebar-item open" : "sidebar-item"}>
            //     <div className="sidebar-title">
            //         <span>
            //             { item.icon && <i className={item.icon}></i> }
            //             {item.title}    
            //         </span> 
            //         <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            //     </div>
            //     <div className="sidebar-content">
            //         { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
            //     </div>
            // </div>
        
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
        // <div className="sidebar-item">
            
        //         <span>
        //         {item.icon && <i className= {item.icon}></i> }
        //             {item.title}
        //         </span>
         
        // </div>
    }
}


   