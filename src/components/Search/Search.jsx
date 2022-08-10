import SearchIcon from "@mui/icons-material/Search"
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledInputBase,
} from "./Search.styled"

const Search = () => {
  return (
    <SearchWrapper
      sx={{ marginLeft: 2, border: 1, borderColor: "secondary.contrastText" }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search movie..." />
    </SearchWrapper>
  )
}

export default Search
