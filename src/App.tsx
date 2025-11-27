import Text from "./components/text"
import TrashIcon from "./assets/icons/trash.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import Icon from "./components/icon"
import Badge from "./components/badge"
import Button from "./components/button"

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

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

    </div>
  )
}

