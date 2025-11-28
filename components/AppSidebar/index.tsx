import { Calendar, ChevronUp, Home, Inbox, Search, Settings, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../ui/sidebar";


const items = [
    {
        title: 'Home',
        url: '/',
        icon: Home
    },
    {
        title: 'Inbox',
        url: '#',
        icon: Inbox
    },
    {
        title: 'Calendar',
        url: '#',
        icon: Calendar
    },
    {
        title: 'Search',
        url: '#',
        icon: Search
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings
    }
]

const AppSidebar = () => {
    return <Sidebar collapsible='icon'>
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href='/'>
                            <Image src={'/globe.svg'} alt='logo' width={20} height={20} />
                            <span>GamerTobbe</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        <SidebarSeparator />
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.length > 0 && items.map((item, index) =>
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}><item.icon /><span>{item.title}</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>)}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <User2 /> Tobbe <ChevronUp className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Account</DropdownMenuItem>
                            <DropdownMenuItem>Setting</DropdownMenuItem>
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
}

export default AppSidebar;