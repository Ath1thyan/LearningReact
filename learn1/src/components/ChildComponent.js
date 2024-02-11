
export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>GreetParent</button>
        </div>
    )
}