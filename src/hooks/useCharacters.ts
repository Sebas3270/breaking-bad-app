import { useEffect, useState } from "react"
import { Character } from "../interfaces/Character";
import axios from "axios";
import { Quote } from "../interfaces/Quote";

const useCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>();
    const [charactersSearch, setCharactersSearch] = useState<Character[]>();
    const [character, setCharacter] = useState<Character>();
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);
    const [quotes, setQuotes] = useState<Quote[]>();

    //const { getQuotes, quotes } = useQuotes();

    useEffect(() => {
        if(character){
            getQuotes();
        }
      
    }, [character])

    const getCharacters = async() => {
        
        try {
            setLoading(true);
            setError(false);
            const resp = (await axios.get<Character[]>('https://breakingbadapi.com/api/characters')).data;
            setCharactersSearch(resp);
            setCharacters(resp);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }

    }

    const getCharacter = async( id : number ) => {

        setLoading(true);
        setError(false);
        const resp = (await axios.get<Character[]>(`https://breakingbadapi.com/api/characters/${id}`)).data;
        
        if(resp.length === 1 ){
            setCharacter(resp[0]);
        }else{
            setCharacter(undefined);
            setError(true);
            setLoading(false);
        }
        

    }

    const getCharactersByName = (name:string) => {

        
        if(name !== ''){
            setCharacters( charactersSearch!.filter( c => (c.name.toLowerCase().includes(name) || c.nickname.toLowerCase().includes(name))) );
        }else{
            setCharacters(charactersSearch);
        }

    }

    const getQuotes = async() => {
        
        try {

            if(character){
                const url = `https://breakingbadapi.com/api/quote?author=${encodeURI(character.name)}`;
                const resp = (await axios.get<Quote[]>(url)).data;
                setQuotes( resp );
                setError(false);
                setLoading(false);
            }

            
        } catch (error) {
            setLoading(false);
            setError(true);
        }

    }


    return {characters, getCharacters, loading, error, character, getCharacter, quotes, getCharactersByName};

}

export default useCharacters;