import { useState } from "react"
import axios from "axios";
import { Episode } from "../interfaces/Episode";

const useEpisodes = () => {

    const [episodes, setEpisodes] = useState<Episode[]>();
    const [episodesSerach, setEpisodesSearch] = useState<Episode[]>();
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);

    const getEpisodes = async() => {
        
        try {
            const resp = (await axios.get<Episode[]>('https://breakingbadapi.com/api/episodes')).data;
            setEpisodesSearch(resp);
            setEpisodes(resp);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }

    }

    const getEpisodesByName = (name:string) => {
        if(name !== ''){
            setEpisodes( episodesSerach!.filter( e => e.title.toLowerCase().includes(name) ) )
        }else{
            setEpisodes( episodesSerach )
        }
    }

    return {episodes, getEpisodes, loading, error, getEpisodesByName};

}

export default useEpisodes;