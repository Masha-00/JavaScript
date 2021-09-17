import Input from '../UI/input/input';

function Search ({ searchQuery, setSearchQuery }) {
    return(
        <Input value={searchQuery}
                    placeholder="Search song..."
                    onChange={(event) => setSearchQuery(event.target.value)} />
    );
}

export default Search;