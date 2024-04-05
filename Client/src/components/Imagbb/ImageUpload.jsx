import axios from "axios"

export const imgbbupload = async (image) => {
    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=43da7e2e60eba3ebc8eb4165786e39ef`, formData)
    return data
}