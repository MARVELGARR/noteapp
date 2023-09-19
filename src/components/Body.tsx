import FilterBar from "./Body/FilterBar"
import { styles } from "../utils/styles"

function Body() {
  return (
    <div className={`${styles.padding}`}>
      <FilterBar/>
    </div>
  )
}

export default Body