export const promiseWithTimeout = <T>(promise: Promise<T>, ms: number) => {
    let id: any = null
    let timeout = new Promise<T>((_, reject) => {
        id = setTimeout(() => {
            reject(`Timed out in ${ms} ms`)
        }, ms)
    })
    return Promise.race([promise, timeout]).then((result) => {
        clearTimeout(id)
        return result
    })
}
