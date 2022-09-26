import { useEffect, useState } from 'react';
import axios from 'axios'

export function useCards(page) {
    const [newCards, setNewCards] = useState([])

    async function updateCards() {
        const response = await axios.get('https://rickandmortyapi.com/api/character?page=' + page)
        setNewCards(response.data.results)
    }

    useEffect(() => {
        updateCards()
    }, [])

    return ( newCards )
}


