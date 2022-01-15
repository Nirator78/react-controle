import React from 'react';

export default function Type({type}) {
    return (
        <span className={"inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-"+type}>
            {type}
        </span>
    );
}