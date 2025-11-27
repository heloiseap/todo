import Text from "./components/text"
import TrashIcon from "./assets/icons/trash.svg?react"
import Icon from "./components/icon"

export default function App() {

  return (
    <div className="grud gap-3">
      
      <Text variant="body-sm-bold" className="text-pink-base">
        Olá mundo!
      </Text>

      <div>
        <Icon svg={TrashIcon} className="fill-green-base" />
        {/* <TrashIcon className="fill-pink-base"/> */}
      </div>

    </div>
  )
}

