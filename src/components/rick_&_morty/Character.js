import './CharacterStyle.css'
const Character = ({character}) => {
    const {image, name, status, species, gender} = character;
    return(
        <div className='character_div'>
            <img src={image} alt={name} className='image'/>
            <div className='text_div'>
                <div>name: {name}</div>
                <div>status: {status}</div>
                <div>species: {species}</div>
                <div>gender: {gender}</div>
            </div>
        </div>
    );
};
export {Character};