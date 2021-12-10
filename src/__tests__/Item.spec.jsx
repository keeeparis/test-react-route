import React from 'react'
import { mount } from '@cypress/react'
import Item from '../components/Item'

describe('Testing Item component', () => {
    it('Item renders with custom props' , () => {
        // mount(<Item item={{coords: [11.11, 21.41], id: '1', name: 'Custom'}} index={0} handleDelete={() => { console.log('deleted') }}/>)
    })
})