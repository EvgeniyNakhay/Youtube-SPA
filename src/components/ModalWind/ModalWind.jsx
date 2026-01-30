import {
  Modal,
  Button,
  Form,
  Input,
  Select,
  Col,
  Row,
  Slider,
  InputNumber,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../../redux/slices/favouritesSlice";

import { useState } from "react";
import { setIsModalOpen } from "../../redux/slices/isModalOpenSlice";
// import { setIsModalOpen } from "../../redux/actions/isModalOpen";
// import { addToFavourites } from "../../redux/actions/favouritesAction";
// import { setFavRequest } from "../../redux/actions/favRequest";

const ModalWind = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [favouritesInput, setFavouritesInput] = useState("");
  //   const [sortByF, setSortByF] = useState("rating");
  //   const [maxResult, setMaxResult] = useState(12);
  const searchTerm = useSelector((store) => store.searchTerm.value);
  const isModalOpen = useSelector((store) => store.isModalOpen.value);

  //   const handleChangeSortBy = (value) => {
  //     setSortByF(value);
  //   };

  //   const handleChangeMaxResult = (newValue) => {
  //     setMaxResult(newValue);
  //   };

  const handleOk = () => {
    //     dispatch(setFavRequest(favRequestInput));
    //     dispatch(addToFavourites(searchTerm, favRequestInput, sortByF, maxResult));
    dispatch(addToFavourites({ searchTerm, favouritesInput }));
    dispatch(setIsModalOpen(false));
  };

  const handleCancel = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <Modal
      title="Сохранить запрос"
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleOk}>
          Сохранить
        </Button>,
        <Button
          key="submit"
          type="primary"
          // loading={loading}
          onClick={handleCancel}
        >
          Не сохранять
        </Button>,
      ]}
    >
      {
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            layout: "vertical",
          }}
        >
          <Form.Item label="Запрос">
            <Input placeholder={searchTerm} disabled />
          </Form.Item>
          <Form.Item name="name" label="Название" rules={[{ required: true }]}>
            <Input
              placeholder="Укажите название"
              rules={[{ required: true }]}
              onChange={(e) => setFavouritesInput(e.target.value)}
              value={favouritesInput}
            />
          </Form.Item>
          <Form.Item label="Сортировать по">
            <Select
              style={{ textAlign: "left" }}
              // value={sortByF}
              // onChange={handleChangeSortBy}
              defaultValue="unsorted"
              options={[
                {
                  value: "unsorted",
                  label: "Без сортировки",
                },
                {
                  value: "date",
                  label: "Дате",
                },
                {
                  value: "rating",
                  label: "Рейтингу",
                },
                {
                  value: "relevance",
                  label: "Актуальности",
                },
                {
                  value: "title",
                  label: "Названию",
                },
                {
                  value: "videoCount",
                  label: "Количеству видео",
                },
                {
                  value: "viewCount",
                  label: "Количеству просмотров",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <p style={{ textAlign: "left", marginBottom: "0" }}>
              Максимальное количество
            </p>
            <Row>
              <Col span={19}>
                <Slider
                  min={0}
                  max={50}
                  defaultValue={25}
                  style={{
                    marginTop: "12px",
                    marginLeft: "0",
                  }}
                  // onChange={handleChangeMaxResult}
                  // value={typeof maxResult === "number" ? maxResult : 12}
                />
              </Col>
              <Col span={5}>
                <InputNumber
                  min={0}
                  max={50}
                  defaultValue={25}
                  style={{
                    margin: "0 9px",
                  }}
                  // value={maxResult}
                  // onChange={handleChangeMaxResult}
                />
              </Col>
            </Row>
          </Form.Item>
        </Form>
      }
    </Modal>
  );
};

export default ModalWind;
