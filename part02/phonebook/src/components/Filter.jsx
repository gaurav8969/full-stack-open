const Filter = ({handleSearch,search,setSearch})=>{
    return(
        <form onSubmit={handleSearch}>
            <div>
                filter by name <input value={search} onChange= {(e)=>{setSearch(e.target.value)}}/>
            </div>
        </form>
    )
}

export default Filter