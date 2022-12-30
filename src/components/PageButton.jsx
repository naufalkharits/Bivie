import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Pagination, PaginationItem, Stack } from "@mui/material"

const PageButton = (props) => {
  return (
    <Stack alignItems="center">
      <Pagination
        page={props.router.state.currentLocation.search.page || 1}
        count={500}
        shape="rounded"
        color="secondary"
        size="large"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            href={item.page === 1 ? "/" : `?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Stack>
  )
}

export default PageButton
