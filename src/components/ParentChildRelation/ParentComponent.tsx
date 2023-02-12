import   React, {useState} from 'react';
import ChildComponent from './ChildComponent';


const ParentComponent = () =>{
const [message, setMessage] = useState("")
console.log("Parent Component");



const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage)};
    return (
        <div>
        <h1 className=' text-xl text-center'>Training Assignment</h1>
        <h2 className="font-sans text-m  text-center">Parent child relationship</h2>
        <h3 className="font-sans text-lg  text-center">App--ParentComponent---ChildComponent</h3>
        <ChildComponent message={message} onMessageChange={handleMessageChange} />
        </div>
    )
}

export default ParentComponent;