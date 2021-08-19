export const getUserInfo = (data) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: "/api/user/info/",
            data: data
        }).then(res => {
            if (res.data?.success == null || res.data?.success == 0) {
                resolve(res.data.result)
            } else {
                reject(res.data.error)
            }
        }).catch(err => {
            reject(err)
        })

    })
}