
function Search  ({searchItem, setSearchItem}) {
    return(
        <div className="Search">

                   <input className="search-input" type="text" placeholder="Search your Favouraite Movie"
                        value={searchItem}
                          onChange={(e) => setSearchItem(e.target.value)} />
        </div>
    );
}

export default Search