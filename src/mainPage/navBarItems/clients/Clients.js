import React from 'react';
import { useSelector } from 'react-redux';
import ClientCard from './ClientCard';

const Clients = () => {
const items = useSelector(state => state.client.items)

    return (
        <div>
            Clients
            {items.map((item) => (
                <ClientCard 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};

export default Clients;