// EngagementEvent.js
import React from 'react';
import { EngagementItems } from './data';

const EngagementEvent = () => {
    const engagementItem = EngagementItems[0]; // Accessing the first item of the EngagementItems array
    return (
        <div>
            <h1>{engagementItem.name}</h1>
            <h1>{engagementItem.id}</h1>
            <h1>aditya chatur</h1>
        </div>
    );
}

export default EngagementEvent;
