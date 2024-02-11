export const ClickHandler = () => {
    const ClickHandler = (eve, count = 1) => {
        console.log('clicked', count, eve);
    }
    return (
        <div>
            <button onClick={ ClickHandler } >Click</button>
            <button onClick={(event) => ClickHandler(event, 5) } >Click5</button>
        </div>
    )
}