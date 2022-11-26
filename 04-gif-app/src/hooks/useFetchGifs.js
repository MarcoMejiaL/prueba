import { useState, useEffect } from "react"

import { getGif } from "../hooks/getgif"

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const getImages = async()=>{
      const newImages = await getGif(category);
      setimages(newImages);
      setIsLoading(false)
    }
  
  useEffect(() => {
    getImages();
  
    
  }, [])
 return {
    images,
    
    isLoading
 }
}
