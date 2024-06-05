import { useParams } from "next/navigation"
import { useMemo } from "react"

export const useConversation = () => {
    const params = useParams()

    const conversationID = useMemo(() => params?.conversationID || ("" as string), [params?.conversationID])

    const isActive = useMemo(() => !!conversationID, [conversationID])

    return [isActive, conversationID]
}