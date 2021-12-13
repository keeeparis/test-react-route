import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

import CustomMap from './CustomMap'
import CustomInfo from './CustomInfo'

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

export default function MainComponent({ ymaps }) {
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
        if (!result.destination) return // если потянули за пределы области
        if (result.source.index === result.destination.index) return // если вернули на место, откуда взяли

        const items = reorder(
            placemarks,
            result.source.index,
            result.destination.index
        )

        setPlacemarks(items)
    }

    return (
        <Layout>
            <Content>
                <CustomMap
                    mapRef={mapRef}
                    placemarks={placemarks}
                    setPlacemarks={setPlacemarks}
                    ymaps={ymaps}
                />
                <DragDropContext onDragEnd={onDragEnd}>
                    <CustomInfo
                        mapRef={mapRef}
                        placemarks={placemarks}
                        setPlacemarks={setPlacemarks}
                        ymaps={ymaps}
                    />
                </DragDropContext>
            </Content>
            <Footer>
                <a 
                    href='https://t.me/keeeparis' 
                    className='telLink' 
                    rel='noopener noreferrer'
                >
                    Vladimir Trotsenko
                </a>, {new Date().getFullYear()}
            </Footer>
        </Layout>
    )
}
