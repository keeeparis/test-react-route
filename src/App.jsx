import { useMemo } from 'react'
import { YMaps, withYMaps } from 'react-yandex-maps'

import { queryConfig } from './config'
import MainComponent from './components/MainComponent'

export default function App() {
    const WithYmapsWrapper = useMemo(() => {
        return withYMaps(MainComponent, true, [
            'SuggestView',
            'geocode'
        ])
    }, [])

    return (
        <YMaps query={queryConfig}>
            <WithYmapsWrapper />
        </YMaps>
    )
}
