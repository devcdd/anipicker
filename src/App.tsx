import "./App.css"
import { useQuery } from "@tanstack/react-query"
import { getAnimeCuration } from "../api/request.ts"
import { useEffect } from "react"
import Curation from "./components/Curation.tsx"

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
    <section className={"w-screen h-screen"}>
      {data?.map((curation) => <Curation curation={curation} />)}
    </section>
  )
}

export default App
