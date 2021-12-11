import React, { useEffect, useRef } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { geocode } from '../utils'
import Item from './Item'

const Container = styled.div`
    width: 40%;

    @media (max-width: 1024px) {
        width: 80%;
        margin-top: 50px;
    }
`
const Form = styled.form`
    display: flex;
    height: auto;
    gap: 10px;
    
`
const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    box-shadow: 1px 1px 0 0px #3a3838;
    font-family: 'Open Sans', sans-serif;

    &:focus-visible { outline: 2px solid #f04323 }
`
const Button = styled.button`
    padding: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    cursor: pointer;
`
const List = styled.div`
    padding: 8px;
    margin: 20px 0;
    background-color: ${props => props.isDragging ? 'lightblue' : '#f04323'}
`

export default function CustomInfo({ mapRef, placemarks, setPlacemarks, ymaps }) {
    const inputRef = useRef(null)

    const handleDelete = (index) => {
        const newPlacemarks = [...placemarks]
        newPlacemarks.splice(index, 1)
        setPlacemarks(newPlacemarks)
    }   

    const handleSubmit = async (e) => {
        e.preventDefault()

        const input = inputRef.current.value
        try {
            if (!input.trim().length) return 

            const { newCoords, address } = await geocode(input, ymaps)

            setPlacemarks([...placemarks, { coords: newCoords, id: uuidv4(), name: address }])

            mapRef.current.setCenter(newCoords)
        } catch(e) { console.log(e.message)
        } finally {
            inputRef.current.value = ''
        }

    }

    useEffect(() => {
        new ymaps.SuggestView(inputRef.current)
    }, []) 

    return (
        <Container>
            <Form onSubmit={handleSubmit}> 
                <Input type="text" id='suggest' ref={inputRef} autoFocus={true} placeholder='Введите название...' />
                {/* <Button type='submit'>Отправить</Button> */}
            </Form>
            
            <Droppable droppableId='droppable' >
                {(provided, snapshot) => (
                    <List
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDraggingOver}
                    >
                        {placemarks.map((item, index) => (
                            <Item item={item} index={index} key={item.id} handleDelete={handleDelete}/>
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
        </Container>
    )
}
