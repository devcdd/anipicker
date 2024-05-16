import { Post } from "./wrapper"

interface Image {
  option_name: string
  img_url: string
  crop_ratio: string
}

interface Anime {
  id: number
  name: string
  images: Image[]
  is_adult: boolean
  is_uncensored: boolean
  is_dubbed: boolean
  medium: string
  is_laftel_only: boolean
  is_laftel_original: boolean
  content_rating: string
  is_ending: boolean
  genre: string[]
  content: string
  avg_rating: number
  is_avod: boolean
  avod_status: string
  logo_img: string | null
  color_code: string | null
  description: string | null
  is_viewing: boolean
}

interface AnimeCuration {
  id: string
  name: string
  item_list: Anime[]
}

export const getAnimeCuration = async () => {
  try {
    const response = await Post<AnimeCuration[]>(
      "https://laftel.net/api/home/v2/recommend/10/",
      {},
    )
    console.log(
      "%crequest.ts:43 - %cresponse = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      response,
    )
    return response
  } catch (e) {
    console.log(
      "%crequest.ts:2 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      e,
    )
  }
}
