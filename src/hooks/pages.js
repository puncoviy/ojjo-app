import { useEffect, useState } from 'react';
import axios from 'axios'

export function usePages(page) {
    let [pages, setPages] = useState(1)
    let [cards, setCards] = useState([])

    async function fetchCards() {
        const response = await axios.get('https://rickandmortyapi.com/api/character?page=' + page)
        setPages(response.data.info.pages)
        setCards(response.data.results)
    }

    useEffect(() => {
        fetchCards()
    }, [])

    return { pages, cards }
}