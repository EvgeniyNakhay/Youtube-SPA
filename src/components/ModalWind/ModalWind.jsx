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
// import { setFavRequest } from "../../redux/actions/favRequest";

const ModalWind = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [favouritesInput, setFavouritesInput] = useState("");
  const [sortByF, setSortByF] = useState("rating");
  const [maxResult, setMaxResult] = useState(12);

  const searchTerm = useSelector((store) => store.searchTerm.value);
  const isModalOpen = useSelector((store) => store.isModalOpen.value);

  const handleChangeSortBy = (value) => {
    setSortByF(value);
  };

  const handleChangeMaxResult = (newValue) => {
    setMaxResult(newValue);
  };

  const onFinish = (values) => {
    //     dispatch(setFavRequest(favRequestInput));
    //     dispatch(addToFavourites(searchTerm, favRequestInput, sortByF, maxResult));
    dispatch(
      addToFavourites({
        searchTerm,
        favouritesInput: values.name,
        sortByF,
        maxResult,
      }),
    );
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
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Не сохранять
        </Button>,
        <Button htmlType="submit" type="primary" onClick={() => form.submit()}>
          Сохранить
        </Button>,
      ]}
    >
      {
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={{
            name: favouritesInput,
            sortBy: "unsorted",
          }}
        >
          <Form.Item label="Запрос">
            <Input placeholder={searchTerm} disabled />
          </Form.Item>
          <Form.Item
            name="name"
            label="Название"
            rules={[{ required: true, message: "Укажите название!" }]}
          >
            <Input
              placeholder="Укажите название"
              onChange={(e) => setFavouritesInput(e.target.value)}
              value={favouritesInput}
            />
          </Form.Item>

          <Form.Item label="Сортировать по">
            <Select
              style={{ textAlign: "left" }}
              value={sortByF}
              onChange={handleChangeSortBy}
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
                  onChange={handleChangeMaxResult}
                  value={typeof maxResult === "number" ? maxResult : 12}
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
                  value={maxResult}
                  onChange={handleChangeMaxResult}
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
