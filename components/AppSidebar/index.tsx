import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, ProjectorIcon, Search, Settings, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { cn } from "@/lib/utils";

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
        <SidebarHeader className="py-4">
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
                                {item.title === 'Inbox' && <SidebarMenuBadge>14</SidebarMenuBadge>}
                            </SidebarMenuItem>)}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupAction>
                    <Plus /> <span className="sr-only">Add Project</span>
                </SidebarGroupAction>
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href='#'><ProjectorIcon />See All Projects</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href='#'><Plus />Add Project</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </SidebarGroup>
            {/* COLLSAPIBLE */}
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                            Collapse group
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>        
                    <CollapsibleContent className={cn("text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2")}>
                        <SidebarContent>            
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='#'><ProjectorIcon />See All Projects</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href='#'><Plus />Add Project</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarContent>
                    </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>
            {/* NESTED/SUB  */}
            <SidebarGroup>
                <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                <SidebarContent>
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href='#'><ProjectorIcon />See All Projects</Link>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                        <Link href={'#'}><Plus />Add Project</Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarContent>
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