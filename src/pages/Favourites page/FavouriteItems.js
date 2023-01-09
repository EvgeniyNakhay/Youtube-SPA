import FavoriteItem from './FavouriteItem';

const FavouriteItems = () => {

  return (
    <>
    <Divider orientation="left">Large Size</Divider>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  )
};

export default Favourites;