"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigation } from "@/hooks/useNavigation";
import { User } from 'lucide-react';
import Link from "next/link";

const DesktopNav = () => {
    const paths = useNavigation()

  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-screen lg:w-16 lg:px-2 lg:py-4">
      <nav>
        <ul className="flex flex-col items-center gap-4">{
          paths.map((path, id) => {
            return <li key={id} className="relative">
              <Link href={path.href}>
                <Button size="icon" variant={path.active ? "default" : "outline"}>
                  {path.icon}
                </Button>
              </Link>
            </li>
          })
        }</ul>
      </nav>
      <div className="flex flex-col items-center gap-4">
        <Button size="icon" variant="default">
          <User />
        </Button>
      </div>
    </Card>
  )
}

export default DesktopNav;