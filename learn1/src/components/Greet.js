
export const Greet = (propsAtribute) => {
    return (
    <div><h1>Hello <strong>{propsAtribute.userName}</strong>, {propsAtribute.position}</h1>
    {propsAtribute.children}
    </div>)
}
// export default Greet;
