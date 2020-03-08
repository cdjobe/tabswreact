import React from 'react';

const ShowContent = props => {
    
    const onClickHandler = (e, value) => {
        return (value);
    }

    return props.label.map((item, index) => {
        return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>
    })
}