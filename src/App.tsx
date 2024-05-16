import "./App.css"
import { useQuery } from "@tanstack/react-query"
import { getAnimeCuration } from "../api/request.ts"
import { useEffect } from "react"

function App() {
  const { data } = useQuery({
    queryKey: ["animeCuration"],
    queryFn: getAnimeCuration,
  })

  useEffect(() => {
    console.log(
      "%cApp.tsx:10 - %cdata = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      data,
    )
  }, [data])

  return (
    <div className={"w-screen h-screen"}>
      {data?.map((section) => {
        return <div>{section.name}</div>
      })}
    </div>
  )
}

export default App
