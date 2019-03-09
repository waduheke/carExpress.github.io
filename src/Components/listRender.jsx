import React from 'react';

function ListItem(props){
    return <p>{props.value}</p>
}

function ListRender(props){
    const values = props.values;
    const listItem = values.map((value, index)=>
        <ListItem key={index} value={value} />
    );
    return (
        <div>
            {listItem}
        </div>
    )
}

export default ListRender;