export const Get = async <T>(
  endpoint: string,
  params: Record<string, string>,
): Promise<T> => {
  try {
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`${endpoint}?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        laftel: "Tejava",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    console.log(
      "%cwrapper.ts:12 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      error,
    )
    throw error // Re-throw the error after logging it
  }
}

export const Post = async <T>(
  endpoint: string,
  params: Record<string, unknown>,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        laftel: "Tejava",
      },
      body: JSON.stringify(params.body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    console.log(
      "%cwrapper.ts:29 - %ce = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      error,
    )
    throw error // Re-throw the error after logging it
  }
}
