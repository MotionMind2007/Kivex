import * as react from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
}

declare const Chat: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Close: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Dashboard: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const DraftBook: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const File: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Folder: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Home: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const MenuVertical: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Menu: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Notification: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const PenLine: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const PlayArrow: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Plus: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Search: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Settings: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Share: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const Users: react.ForwardRefExoticComponent<Omit<IconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { Chat, Close, Dashboard, DraftBook, File, Folder, Home, type IconProps, Menu, MenuVertical, Notification, PenLine, PlayArrow, Plus, Search, Settings, Share, Users };
