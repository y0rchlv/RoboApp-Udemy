import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    const cardCreator = robots.map((user, i) => {
        return (
            <Card
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
            />
        );
    });
    return (
        <div>
            {cardCreator}
        </div>
    );
}

export default Cardlist