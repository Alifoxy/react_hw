import {CarForm, Cars} from "../components";

const CarsPage = () => {
    return (
        <div>
            <div className={'title_block'}>
                <h2>Cars</h2>
            </div>
            <hr/>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};