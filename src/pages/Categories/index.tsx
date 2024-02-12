import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFigthGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: figthGames, isLoading: isLoadingFight } =
    useGetFigthGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={figthGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
