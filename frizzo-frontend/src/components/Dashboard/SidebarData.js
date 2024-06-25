import React from "react";
import { Icon } from '@iconify/react';

export const SidebarData= [
    {
        title:'Dashboard',
        icon:<Icon icon="material-symbols-light:dashboard-outline" />,
        link:'/dashboard'
    },
    {
        title:'Transactions',
        icon:<Icon icon="icon-park-outline:transaction" />,
        link:'/transactions'
    },
    {
        title:'Budget Planning',
        icon:<Icon icon="et:piechart" />,
        link:'/budgeting'
    },
    {
        title:'Coins',
        icon:<Icon icon="ph:coins-thin" />,
        link:'/coins'
    },
]