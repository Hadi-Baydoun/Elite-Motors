"use client"; // Add this at the top

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = ({ isAdminPage = false }) => {
  const isAdmin = false;
  
  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href={isAdminPage ? "/admin" : "/"}>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Elite Motors Logo"
              width={300}
              height={80}
              className="h-27 w-auto object-contain"
            />
            {isAdminPage && (
              <span className="text-xs font-extralight">admin</span>
            )}
          </div>
        </Link>
        <div className='flex items-center space-x-4'>
          {isAdminPage ? (
            <Link href='/'>
              <Button><ArrowLeft size={18}/><span>Back to App</span></Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href='/saved-cars'>
                <Button><Heart size={18}/><span className='hidden md:inline'>Saved Cars</span></Button>
              </Link>

              {!isAdmin ? (
                <Link href='/reservations'>
                  <Button variant="outline"><CarFront size={18}/><span className='hidden md:inline'>My Reservations</span></Button>
                </Link>
              ) : (
                <Link href='/admin'>
                  <Button variant="outline"><Layout size={18}/><span className='hidden md:inline'>Admin Portal</span></Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            {!isAdminPage && (
              <SignInButton forceRedirectUrl="/">
                <Button variant="outline">Login</Button>
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;