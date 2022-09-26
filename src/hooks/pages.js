import { useEffect, useState } from 'react';
import axios from 'axios'

export function usePages() {
    let [pages, setPages] = useState(1)
    let [cards, setCards] = useState([])

    async function fetchCards() {
        const response = await axios.get('https://rickandmortyapi.com/api/character?page=' + pages)
        setPages(response.data.info.pages)
        setCards(response.data.results)
    }

    useEffect(() => {
        fetchCards()
    }, [])

    return { pages, cards }
}