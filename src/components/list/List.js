import React from 'react';
import Item from "./Item";

export default function List ({data}) {
    return (
        <ul>
            {
                data.map((data) => {
                        return (
                            <Item key={data.name} data={data}></Item>
                        )
                    }
                )
            }
        </ul>
    );
}