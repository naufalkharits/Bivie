import { Search as SearchIcon } from "@mui/icons-material"

import { SearchIconWrapper, SearchWrapper, StyledInputBase } from "./Search.styled"

function Search() {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search movie..." />
    </SearchWrapper>
  )
}

export default Search
