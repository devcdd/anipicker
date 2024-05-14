export const Get = async (endpoint: string, params: Record<string, string>) => {
  try {
    const queryString = new URLSearchParams(params).toString()
    return await fetch(endpoint + queryString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        laftel: "Tejava",
      },
    })
  } catch (error) {
    console.log(
      "%cwrapper.ts:12 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      error,
    )
  }
}

export const Post = async (endpoint: string, params: Record<string, never>) => {
  try {
    return await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        laftel: "Tejava",
      },
      body: JSON.stringify(params.body),
    })
  } catch (error) {
    console.log(
      "%cwrapper.ts:29 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      error,
    )
  }
}
