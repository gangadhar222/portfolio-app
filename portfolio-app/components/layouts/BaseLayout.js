import Header from '../shared/Header';

export default function BaseLayout(props) {
    return (
        <>
            <Header />
            <div>
            {
                props.children
            }
            </div>
        </>
    )
}
