
function Search  ({searchItem, setSearchItem}) {
    return(
        <div className="Search">
            <header>
                   <input className="search-input" type="text" placeholder="Search your Favouraite Movie"
                        value={searchItem}
                          onClick={(e) => setSearchItem(e.target.value)} />
            </header>
        </div>
    );
}

export default Search