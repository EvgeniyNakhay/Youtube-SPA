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
// import { saveEditedFavRequest } from "../../redux/actions/favouritesAction";
import { setIsEditModalOpen } from "../../redux/slices/isEditModalOpenSlice";
import { useState } from "react";

const EditModalWind = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const isModalOpen = useSelector((store) => store.isEditModalOpen);
  const { searchTerm, favouriteRequestName, sortByF, maxResult } = useSelector(
    (store) => store.activeFavourite,
  );

  const [editedSearchTermInput, setEditedSearchTermInput] =
    useState(searchTerm);
  const [editedFavRequestInput, setEditedFavRequestInput] =
    useState(favouriteRequestName);
  const [editedSortByF, setEditedSortByF] = useState(sortByF);
  const [editedMaxResult, setEditedMaxResult] = useState(maxResult);

  const handleOk = () => {
    // dispatch(
    //   saveEditedFavRequest(
    //     id,
    //     editedSearchTermInput,
    //     editedFavRequestInput,
    //     editedSortByF,
    //     editedMaxResult,
    //   ),
    // );
    dispatch(setIsEditModalOpen(false));
  };

  const handleCancel = () => {
    dispatch(setIsEditModalOpen(false));
  };

  const handleChangeSortBy = (value) => {
    setEditedSortByF(value);
  };

  const handleChangeMaxResult = (newValue) => {
    setEditedMaxResult(newValue);
  };

  return (
    <Modal
      title="Изменить запрос"
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Не изменять
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Изменить
        </Button>,
      ]}
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: "vertical",
        }}
      >
        <Form.Item label="Запрос">
          <Input
            value={editedSearchTermInput}
            onChange={(e) => setEditedSearchTermInput(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Название" rules={[{ required: true }]}>
          <Input
            value={editedFavRequestInput}
            onChange={(e) => setEditedFavRequestInput(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Сортировать по" rules={[{ required: true }]}>
          <Select
            style={{ textAlign: "left" }}
            value={editedSortByF}
            onChange={handleChangeSortBy}
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
          <p
            style={{
              textAlign: "left",
              marginBottom: "0",
            }}
          >
            Максимальное количество
          </p>
          <Row>
            <Col span={19}>
              <Slider
                min={0}
                max={50}
                style={{
                  marginTop: "12px",
                  marginLeft: "0",
                }}
                onChange={handleChangeMaxResult}
                value={editedMaxResult}
              />
            </Col>
            <Col span={5}>
              <InputNumber
                min={0}
                max={50}
                style={{
                  margin: "0 9px",
                }}
                value={editedMaxResult}
                onChange={handleChangeMaxResult}
              />
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModalWind;
