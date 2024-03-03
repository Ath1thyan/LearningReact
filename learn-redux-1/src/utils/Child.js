import { useSelector } from 'react-redux'

function Child(){

    const personal_info = useSelector(state => state.personal);

    return <div>
        <h1>Name : {personal_info.name}</h1>
        <h2>Position : {personal_info.position}</h2>
    </div>

}

export default Child;