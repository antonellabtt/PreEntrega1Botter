import "./itemlistcontainer.css"

function ItemListContainer({props}){
    return (<main className="cont d-flex flex-column align-items-center">
        <h1 className="my-3 py-5">{props}</h1>
    </main>)
}

export default ItemListContainer;