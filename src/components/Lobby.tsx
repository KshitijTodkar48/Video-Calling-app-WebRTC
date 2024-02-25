import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Lobby = () => {

    const navigate = useNavigate() ;
    const [roomId, setRoomId] = useState<string>("");

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/room/${roomId}`);
    }
    return(
        <form id="join-form" onSubmit={ handleFormSubmit }>
            <input 
             type="text" 
             required 
             placeholder="Enter room ID"
             onChange={(e) => { setRoomId(e.target.value); }}
            />
            <button type="submit"> Join Room</button>
        </form>
    )
}