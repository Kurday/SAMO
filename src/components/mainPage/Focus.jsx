import { useMainWrapperContext } from './MainWrapper';

const Focus = () => {
    const { focus_day } = useMainWrapperContext();

    return (
        <>
            <div className="focus-block">
                <div className="head-focus">
                    <h2>Фокус</h2>
                </div>
                <div>
                    {
                        // focus.books.map(({title}) => {
                        //     return (
                        //         <p className="text-focus">{title}</p>
                        //     )
                        // })
                    }
                </div>
            </div>
        </>
    );
};

export default Focus;
