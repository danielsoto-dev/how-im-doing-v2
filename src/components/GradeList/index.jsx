import {useState} from 'react'

export default GradeList = () => {
    const [list, setList] = useState([])

    const handleClick = (e) =>{
e.preventDefault;
setList([...list, Math.random()])
    }


    return (
        <div>
            {
                list.length > 0 ?
                list.map( (el, id) => {
                    return <p key={el}>Hi im the el #{id} and i have {el}</p>
                }):null
            }
            <button onClick={handleClick}>Add a term</button>
        </div>

    )
}
