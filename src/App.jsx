import './App.scss'
import { YMaps } from 'react-yandex-maps'
import { useRef, useState } from 'react'
import CustomMap from './components/CustomMap'
import CustomInfo from './components/CustomInfo'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { queryConfig } from './config'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
const Content = styled.div`
    display: flex;
    margin: 70px 20px ;
    justify-content: center;
    flex: 1 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`
const Footer = styled.div`
    background-color: black;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: white;

    a { color: white }
`

export default function App() {
    const [placemarks, setPlacemarks] = useState([
        {coords: [55.75, 37.62], id: '111', name: 'Москва, Россия'},
        {coords: [59.98, 30.36], id: '222', name: 'Санкт-Петербург, Россия'},
        {coords: [59.22, 39.89], id: '333', name: 'Вологда, Россия'}
    ])

    const mapRef = useRef(null)

    const reorder = (list, startIndex, endIndex) => {
        const arr = Array.from(list) // !important
        const [removed] = arr.splice(startIndex, 1);
        arr.splice(endIndex, 0, removed);
      
        return arr;
    }

    const onDragEnd = (result) => {
        if (!result.destination) return
        if (result.source.index === result.destination.index) return

        const items = reorder(
            placemarks,
            result.source.index,
            result.destination.index
        )

        setPlacemarks(items)
    }

    return (
        <YMaps query={queryConfig}>   
            <Layout>
                <Content>
                    <CustomMap
                        mapRef={mapRef}
                        placemarks={placemarks}
                        setPlacemarks={setPlacemarks}
                    />
                    <DragDropContext onDragEnd={onDragEnd}>
                        <CustomInfo
                            mapRef={mapRef}
                            placemarks={placemarks}
                            setPlacemarks={setPlacemarks}
                        />
                    </DragDropContext>
                </Content>
                <Footer>
                    <a href='https://t.me/keeeparis' className='telLink' rel='noopener noreferrer'>Vladimir Trotsenko</a>, {new Date().getFullYear()}
                </Footer>
            </Layout>
        </YMaps>
    )
}
