import React from 'react'
import RecTab from './RecTab'

const RecFilter = (props) => {

    return (
        <div className="rec-filter">
            <div className="rec-filter-arrow">
                <div className="rec-filter-gradient"></div>
                <i class="fas fa-chevron-right"></i>
            </div>
            <RecTab
                tabText="All"
                selected={true}
            />
            <RecTab
                tabText="South Carolina"
            />
            <RecTab
                tabText="Football hits"
            />
            <RecTab
                tabText="Sportscenter Top 10"
            />
        </div>
    )
}

export default RecFilter