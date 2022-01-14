import React from 'react';
import Item from "./Item";

export default function List ({data}) {
    return (
        <ul>
            {
                data.map((data, key) => {
                        return (
                            <Item key={key} data={data}></Item>
                        )
                    }
                )
            }
        </ul>
    );
}