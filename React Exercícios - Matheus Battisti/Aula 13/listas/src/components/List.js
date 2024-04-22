import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='BMW' ano_lancamento={2024} />
                <Item marca='Volkswagen' ano_lancamento={2014} />
                <Item marca='Porsche' ano_lancamento={2020} />
                <Item marca='Chevrolet' ano_lancamento={2015}/>
                <Item />
            </ul>
        </>
    )
}

export default List