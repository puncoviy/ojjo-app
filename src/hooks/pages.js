import { useEffect, useState } from 'react';
import axios from 'axios'

export function usePages() {
    const [pages, setPages] = useState(1)

    async function fetchCards() {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        setPages(response.data.info.pages)
    }

    useEffect(() => {
        fetchCards()
    }, [])

    return { pages }
}