import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // ... damit alle in einem array sind
}
