import { Post } from "./wrapper"

export const getAnimeCuration = async () => {
  try {
    const response = await Post(
      "https://laftel.net/api/home/v2/recommend/10/",
      {},
    )
    if (response?.ok) {
      return JSON.parse(await response.text())
    }
  } catch (e) {
    console.log(
      "%crequest.ts:2 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      e,
    )
  }
}
