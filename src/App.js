import noUiSlider from 'nouislider';
import React, { useEffect, useRef } from 'react';
import './App.css';
import './noUiSlider.css';

function App() {
    const sliderRef = useRef(null);

    const firstInputRel = useRef(null);
    const lastInputRel = useRef(null);

    const multiRef = useRef(null);

    let multi = 1;
    const setMulti = v => (multi = v);

    let range = 30;

    const updateInputs = value => {
        const [value1, value2] = value;

        const newFirst = formatWithMulti(value1, multi);
        const newLast = formatWithMulti(value2, multi);

        firstInputRel.current.value = newFirst;
        lastInputRel.current.value = newLast;
    };

    useEffect(() => {
        const position = {
            first: -1,
            last: 9,
        };
        const slider = sliderRef.current;

        const multiValue = parseInt(multiRef.current.value);
        setMulti(multiValue);

        noUiSlider.create(slider, {
            start: [position.first, position.last],
            connect: true,
            tooltips: [
                {
                    to: v => formatWithMulti(v, multiValue),
                    from: v => v,
                },
                {
                    to: v => formatWithMulti(v, multiValue),
                    from: v => v,
                },
            ],
            range: {
                min: -range,
                max: range,
            },
            pips: {
                mode: 'range',
                density: 3,
            },
        });

        slider.noUiSlider.on('update', value => updateInputs(value, slider));
    }, []);

    const handleChangeType = async e => {
        setMulti(parseInt(e.target.value));
        sliderRef.current.noUiSlider.updateOptions({
            tooltips: [
                {
                    to: v => formatWithMulti(v, multi),
                    from: v => v,
                },
                {
                    to: v => formatWithMulti(v, multi),
                    from: v => v,
                },
            ],
        });
        updateInputs(sliderRef.current.noUiSlider.get());
    };

    const updateFirst = e => {
        e.preventDefault();

        const [oldValue] = sliderRef.current.noUiSlider.get();
        const value =
            oldValue < 0
                ? parseInt(firstInputRel.current.value) * multi
                : -parseInt(firstInputRel.current.value) * multi;

        if (typeof value === 'number' && value > range) {
            sliderRef.current.noUiSlider.updateOptions({
                range: {
                    min: -value,
                    max: value,
                },
            });
        }

        sliderRef.current.noUiSlider.set([-value, null]);
    };

    const updateLast = e => {
        e.preventDefault();

        const [, oldValue] = sliderRef.current.noUiSlider.get();
        const value =
            oldValue < 0 ? -parseInt(lastInputRel.current.value) * multi : parseInt(lastInputRel.current.value) * multi;

        if (typeof value === 'number' && value > range) {
            sliderRef.current.noUiSlider.updateOptions({
                range: {
                    min: -value,
                    max: value,
                },
            });
        }
        sliderRef.current.noUiSlider.set([null, value]);
    };

    return (
        <div className="app">
            <div className="modify">
                <form onSubmit={updateFirst}>
                    First:
                    <input ref={firstInputRel} />
                    <input type="submit" />
                </form>
                <form onSubmit={updateLast}>
                    Last:
                    <input ref={lastInputRel} />
                    <input type="submit" />
                </form>
                <div>
                    <select ref={multiRef} onChange={handleChangeType}>
                        <option value="1">day</option>
                        <option value="7">week</option>
                        <option value="30">month</option>
                    </select>
                </div>
            </div>
            <div className="container">
                <div ref={sliderRef} className="slider"></div>
            </div>
        </div>
    );
}

const format = v => Math.abs(Math.round(v));

const formatWithMulti = (v, multi) => {
    if (typeof multi !== 'number') {
        multi = 1;
    }
    return format(v / multi);
};
export default App;
