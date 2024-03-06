import React from 'react';
import json from '../JsonFile/Weddingpics.json';

const EngagementEvent = () => {
    const EngagementItem = json.Engagement;
    return (
        <div>
            {EngagementItem.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default EngagementEvent;
