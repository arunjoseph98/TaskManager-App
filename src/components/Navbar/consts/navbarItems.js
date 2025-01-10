import { RiAddBoxFill } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { MdTimerOff } from "react-icons/md";
export const boardNavbarItems =[
    {
        id:0,
        icon: RiAddBoxFill,
        label:'Create',
        route: 'route',
    },
   
    
]

export const taskboardNavbarItems =[
    {
        id:0,
        icon: IoGrid ,
        label:'Boards',
        route: 'route',
    },
    {
        id:1,
        icon: FaTasks,
        label:'All Tasks',
        route: 'route',
    },
    {
        id:2,
        icon: FaCheckSquare,
        label:'Completed Tasks',
        route: 'route',
    },
    {
        id:3,
        icon: MdTimerOff,
        label:'Overdue Tasks',
        route: 'route',
    },
    
]