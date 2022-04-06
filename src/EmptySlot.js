import { useEffect } from 'react';
import MoleHill from './img/molehill.png'

const EmptySlot = (props) => {
useEffect(() => {
let seconds = Math.ceil(Math.random() * 4000)
let timer = setTimeout(() => {
    props.toggle(true)
}, seconds)
})
return (
    <div>
        <img style={{'width': '30vw'}} src={MoleHill} />
    </div>
)
}

export default EmptySlot