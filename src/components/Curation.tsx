import { AnimeCuration } from "../../api/request.ts"

interface CurationProps {
  curation: AnimeCuration
}

const Curation = (props: CurationProps) => {
  return (
    <article className={"mb-4"}>
      <figure className={"text-white"}>{props.curation.name}</figure>
      <figure className={"flex w-screen overflow-x-auto space-x-2"}>
        {props.curation.item_list?.map((anime) => (
          <p
            className={
              "w-[256px] h-[144px] flex-shrink-0 rounded-md border border-slate-500"
            }
          >
            <div className={"text-ellipsis text-xs text-white"}>
              {anime.name}
            </div>
          </p>
        ))}
      </figure>
    </article>
  )
}

export default Curation
