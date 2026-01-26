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
import { useSelector } from "react-redux";
// import { useState } from "react";
// import { setIsModalOpen } from "../../redux/actions/isModalOpen";
// import { addToFavourites } from "../../redux/actions/favouritesAction";
// import { setFavRequest } from "../../redux/actions/favRequest";

const ModalWind = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  //   const dispatch = useDispatch();
  //   const [favRequestInput, setFavRequestInput] = useState("");
  //   const [sortByF, setSortByF] = useState("rating");
  //   const [maxResult, setMaxResult] = useState(12);
  const searchTerm = useSelector((store) => store.searchTerm.value);
  //   const isModalOpen = useSelector((store) => store.isModalOpen);

  //   const handleOk = () => {
  //     dispatch(setFavRequest(favRequestInput));
  //     dispatch(addToFavourites(searchTerm, favRequestInput, sortByF, maxResult));
  //     dispatch(setIsModalOpen(false));
  //   };

  //   const handleCancel = () => {
  //     dispatch(setIsModalOpen(false));
  //   };

  //   const handleChangeSortBy = (value) => {
  //     setSortByF(value);
  //   };

  //   const handleChangeMaxResult = (newValue) => {
  //     setMaxResult(newValue);
  //   };

  const handleOk = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setOpen(false);
    // }, 3000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Сохранить запрос"
      closable={{ "aria-label": "Custom Close Button" }}
      centered
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
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
              // onChange={(e) => setFavRequestInput(e.target.value)}
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
