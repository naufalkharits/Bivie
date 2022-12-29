import { Pagination, PaginationItem } from "@mui/material"

const PageButton = (props) => {
  return (
    <Pagination
      page={props.router.state.currentLocation.search.page || 1}
      count={500}
      shape="rounded"
      color="secondary"
      size="large"
      renderItem={(item) => (
        <PaginationItem
          component={"a"}
          href={item.page === 1 ? "/" : `?page=${item.page}`}
          {...item}
        />
      )}
    />
  )
}

export default PageButton
