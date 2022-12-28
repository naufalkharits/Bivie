import SearchIcon from "@mui/icons-material/Search"
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledInputBase,
} from "./Search.styled"

const Search = () => {
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
