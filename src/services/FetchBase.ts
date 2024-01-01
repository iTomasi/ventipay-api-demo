export const FetchApi = async (pathname: string, init?: RequestInit): Promise<Response> => {
  const fetching = await fetch('/api' + pathname, init)

  if (!fetching.ok) throw new Error(`Error: ${fetching.status}`)

  return fetching
}
