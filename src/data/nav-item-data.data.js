import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";


export const NavItems = [
 
            {title: "Add User", path: "/register", icon:<AiIcons.AiOutlineUserAdd />, cName: 'nav-text'},
            {title: "List Users", path: "#", icon:<CgIcons.CgUserList />, cName: 'nav-text'},

            {title: "Add Staff", path: "/register", icon:<AiIcons.AiOutlineUserAdd />, cName: 'nav-text'},
            {title: "List Staffs", path: "#", icon:<CgIcons.CgUserList />, cName: 'nav-text'},

            {title: "Add Demande", path: "/addD", icon: <GiIcons.GiNuclearPlant />, cName: 'nav-text'},
            {title: "List Demandes", path: "demandes", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Add Visite", path: "/add-visite/_addV", icon:<IoIcons.IoMdAddCircle />, cName: 'nav-text'},
            {title: "List Visites", path: "visites", icon:<FaIcons.FaClipboard />, cName: 'nav-text'},
 
            {title: "Add Plante", path: "#", icon:<RiIcons.RiPlantFill />, cName: 'nav-text'},
            {title: "List Plantes", path: "#", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Add Intervention", path: "#", icon: <RiIcons.RiAddCircleFill />, cName: 'nav-text'},
            {title: "List Interventions", path: "#", icon: <BsIcons.BsListCheck />, cName: 'nav-text'},

            {title: "Contact Admin", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contact AdminMet", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contact Chercheur", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
            {title: "Contact User", path: "#", icon: <IoIcons.IoMdMail />, cName: 'nav-text'},
]
