
const controller = new AbortController()

export const abortController = () => controller.abort()