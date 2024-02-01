import './SimpsonStyle.css'
const Simpson = ({simpson}) => {
    const {name, surname, image, description} = simpson;
    return(
        <div className='simpson_div'>
            <div className='text_div'>
                <div>name: {name}</div>
                <div>surname: {surname}</div>
            </div>
            <div className='img_div'>
                <img src={image} alt={name} className='image'/>
            </div>
            <div className='text_div'>description: {description}</div>
        </div>
    );
};
export {Simpson};