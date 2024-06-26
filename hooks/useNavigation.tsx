import { MessageSquare, LayoutList} from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useNavigation = () => {
    const pathname = usePathname()

    const paths = useMemo(() => [
        {
            name: "Conversations",
            href: "/conversations",
            icon: <MessageSquare />,
            active: pathname.startsWith("/conversations"),
        },
        {
            name: "Tasks",
            href: "/tasks",
            icon: <LayoutList />,
            active: pathname === "/tasks",
        }
    ], [pathname])

    return paths
}