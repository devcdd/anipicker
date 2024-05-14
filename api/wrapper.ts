export const Get = async <T>(
  endpoint: string,
  params: Record<string, string>,
) => {
  try {
    const queryString = new URLSearchParams(params).toString()
    return (await fetch(endpoint + queryString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })) as T
  } catch (error) {
    console.log(
      "%cwrapper.ts:12 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      error,
    )
  }
}

export const Post = async <T>(params: Record<string, never>) => {
  try {
    return (await fetch(params.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params.body),
    })) as T
  } catch (error) {
    console.log(
      "%cwrapper.ts:29 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      error,
    )
  }
}
