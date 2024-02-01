import React from 'react';
import {Simpson} from './Simpson'
const App = () => {
    const simpsons = [
        {
            id:1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
            description: "Homer Jay Simpson (born May 12, 1956 or 1969 or 1977 or 1983) is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. Homer Simpson is 39 years old."
        },
        {
            id:2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
            description: "Marjorie Jacqueline (Marge) Simpson  is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household."
        },
        {
            id:3,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
            description: "Bartholomew JoJo (Bart) Simpson (born Feburary 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and 'potentially dangerous' oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed 'Cosmo', after discovering a comet in 'Bart's Comet'."
        },
        {
            id:4,
            name: 'Lisa',
            surname: 'Simpson',
            image: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png',
            description: "Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series. In 'Homer and Lisa Exchange Cross Words' she is also known as Lisa Bouvier. She was named after a train called Lil' Lisa on her parents' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone's surprise, she is also the moral center of her family."
        },
        {
            id:5,
            name: 'Maggie',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',
            description: "Margaret Evelyn Lenny (Maggie) Simpson is a fictional character in the animated television series The Simpsons and a part of the Simpson family. Maggie is the youngest child of Homer and Marge, and the younger sister to Bart and Lisa. She is often seen sucking on her orange pacifier and, when she walks, she trips over her clothing and falls on her face. Being an infant, she has not yet learned how to talk. However, she did appear to talk in the first Tracey Ullman Show short. Though she rarely talks, she frequently makes a characteristic sucking noise with her pacifier, which has become synonymous with the character."
        },
    ]

    return(
        <div >
            {
                simpsons.map(simpson =><Simpson key = {simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};
export{App};