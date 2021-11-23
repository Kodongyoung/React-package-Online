import React from 'react'

export default function Event() {
    const handleButtonClick = (e) => {
        console.log(e)
        console.log('handleButtonClick')
    }
    const handleMouseLeave = (e) => {
        console.log(e)
        console.log('handleMouseLeave')
    }
    const handleClickCapture = () => {
        console.log('handleClickCapture')
    }
    const handleClickCapture2 = () => {
        console.log('handleClickCapture2')
    }
    const handleClickBublle = () => {
        console.log('handleClickBublle')
    }

    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBublle}>
                <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
            </div>
        </div>
    )
}
