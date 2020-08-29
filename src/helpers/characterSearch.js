export default (searchText = '', comics = []) =>
  comics.filter(({ characters: { items = [] } }) =>
    items.some(({ name: characterName }) => characterName.includes(searchText))
  )
