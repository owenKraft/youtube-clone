import React from 'react'

const RecTab = (props) => {
    const tabText = props.tabText

    let classList="rec-tab"
    if(props.selected) {
        classList="rec-tab rec-tab-selected"
    }

    return (
        <div className={classList}>
            {tabText}
        </div>
    )
}

export default RecTab