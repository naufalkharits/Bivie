import { InputBase, styled } from "@mui/material"

export const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: theme.spacing(2),
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
}))

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.secondary.contrastText,
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
}))
