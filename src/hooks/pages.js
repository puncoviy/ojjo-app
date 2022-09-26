import { useEffect, useState } from 'react';
import axios from 'axios'

export function usePages() {
    const [pages, setPages] = useState(1)
    const [cards, setCards] = useState([])

    async function fetchCards() {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        setPages(response.data.info.pages)
        setCards(response.data.results)
    }

    useEffect(() => {
        fetchCards()
    }, [])

    return { pages, cards }
}