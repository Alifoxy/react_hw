import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <h3>Rick&Morty</h3>
        </div>
    );
};

export {Header};