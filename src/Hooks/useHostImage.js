import axios from "axios";

const useHostImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    try{
        const hostedImage = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_APIKEY}`, formData)
        return hostedImage?.data?.data?.display_url;
    }catch(error){
        console.log(error)
    }
}

export default useHostImage;