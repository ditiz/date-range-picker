import React from 'react';
import './index.css';

export const DateRangePicker = () => {
    return (
        <div className="dateRangePicker" id="dateRangePicker">
            <div className="selector" id="first">
                <div className="indicator">
                    <input type="text" id="first-value" />
                    <select id="first-type">
                        <option value="1">day</option>
                        <option value="7" selected>
                            week
                        </option>
                        <option value="30">month</option>
                    </select>
                </div>
            </div>
            <div className="selector" id="last">
                <span className="indicator">
                    <input type="text" id="last-value" />
                </span>
            </div>
            <div id="range"></div>
        </div>
    );
};
