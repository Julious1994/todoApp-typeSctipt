import React from 'react';

interface listProps {
    list: Array<any>,
    onClick(index: number): void;
}

const List = (props: listProps) => (
    <div style={{ margin: 25, }}>
        {
            props.list.map((item, index) => (
                <div 
                    className="list-item"
                    key={index}
                    onClick={() => props.onClick(index)}
                    style={{ textDecoration: item.selected ? 'line-through' : 'none' }}
                >
                    {item.text}
                </div>
            ))
        }
    </div>
)

List.defaultProps = {
    list: [],
}

export default List;