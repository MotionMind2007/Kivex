import * as react from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
}

declare const Alert: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Bookmark: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Chat: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Cheak: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Close: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Download: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const DraftBook: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const File: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Folder: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Home: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const MenuVertical: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Menu: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Notification: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const PenLine: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Plus: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Search: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Send: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Settings: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const User: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Users: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { Alert, Bookmark, Chat, Cheak, Close, Download, DraftBook, File, Folder, Home, type IconProps, Menu, MenuVertical, Notification, PenLine, Plus, Search, Send, Settings, User, Users };
