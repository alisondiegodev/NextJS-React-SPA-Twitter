"use client";
import Image from "next/image";
import Link from "next/link";
import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Image
        quality={10}
        alt="logo"
        width={32}
        height={32}
        src="/logo.png"
      ></Image>
      <nav className="main-navigation">
        <Link className="active" href="./Tweet">
          <House weight="fill" /> Home
        </Link>
        <Link href="./Explore">
          <Hash /> Explore
        </Link>
        <Link href="./Notifications">
          <Bell /> Notifications
        </Link>
        <Link href="./Messages">
          <Envelope /> Messages
        </Link>
        <Link href="./Bookmarks">
          <BookmarkSimple /> Bookmarks
        </Link>
        <Link href="./Lists">
          <FileText /> Lists
        </Link>
        <Link href="./Profile">
          <User /> Profile
        </Link>
        <Link href="./More">
          <DotsThreeCircle /> More
        </Link>
      </nav>
      <button className="new-tweet">Tweet</button>
    </aside>
  );
}

export default Sidebar;
