import Text from "../components/text"
import TrashIcon from "../assets/icons/trash.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import Icon from "../components/icon"
import Badge from "../components/badge"
import Button from "../components/button"
import ButtonIcon from "../components/button-icon"
import InputText from "../components/input-text"
import InputCheckbox from "../components/input-checkbox"
import Card from "../components/card"
import Container from "../components/container"
import Skeleton from "../components/skeleton"

export default function PageComponents() {
    return (
        <Container>
            <div className="grud gap-5">

                <Text variant="body-sm-bold" className="text-pink-base">
                    Olá mundo!
                </Text>

                <div>
                    <Icon svg={TrashIcon} className="fill-green-base" />
                    {/* <TrashIcon className="fill-pink-base"/> */}
                </div>

                <div className="flex gap-1">
                    <Badge variant="secondary">5</Badge>
                    <Badge variant="primary">2 de 5</Badge>
                    <Badge loading >5</Badge>
                </div>

                <div>
                    <Button icon={PlusIcon}>Nova Tarefa</Button>
                </div>

                <div className="flex gap-1">
                    <ButtonIcon icon={TrashIcon} />
                    <ButtonIcon icon={TrashIcon} variant={"secondary"} />
                    <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
                    <ButtonIcon icon={TrashIcon} loading />
                </div>

                <div>
                    <InputText />
                </div>

                <div>
                    <InputCheckbox />

                    <InputCheckbox loading />
                </div>

                <div>
                    <Card size="md">Olá mundo</Card>
                </div>
            </div>

            <div className="space-y-2">
                <Skeleton className="h-6" />
                <Skeleton className="h-6" />
                <Skeleton className="h-6 w-96" />
            </div>
        </Container>
    )
}