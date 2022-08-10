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
      <StyledInputBase />
    </SearchWrapper>
  )
}

export default Search
