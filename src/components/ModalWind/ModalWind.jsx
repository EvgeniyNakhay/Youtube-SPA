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
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsModalOpen } from "../../redux/actions/isModalOpen";
// import { addToFavourites } from "../../redux/actions/favouritesAction";
// import { setFavRequest } from "../../redux/actions/favRequest";

const ModalWind = () => {
  // const [form] = Form.useForm();
  //   const dispatch = useDispatch();
  //   const [favRequestInput, setFavRequestInput] = useState("");
  //   const [sortByF, setSortByF] = useState("rating");
  //   const [maxResult, setMaxResult] = useState(12);
  //   const searchTerm = useSelector((store) => store.searchTerm);
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
    // setOpen(false);
  };

  return (
    <Modal
      open={open}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
        <Button
          key="link"
          href="https://google.com"
          target="_blank"
          type="primary"
          onClick={handleOk}
        >
          Search on Google
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
    // <Modal
    //   style={{ textAlign: "center" }}
    //   title="Сохранить запрос"
    //   centered
    //   //   open={isModalOpen}
    //   //   onOk={handleOk}
    //   //   onCancel={handleCancel}
    //   footer={[
    //     <Button
    //       key="back"
    //       // onClick={handleCancel}
    //     >
    //       Не сохранять
    //     </Button>,
    //     <Button
    //       key="submit"
    //       type="primary"
    //       // onClick={handleOk}
    //     >
    //       Сохранить
    //     </Button>,
    //   ]}
    // >
    // {
    /* <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: "vertical",
        }}
      >
        //{" "}
        <Form.Item label="Запрос">
          <Input
            //   placeholder={searchTerm}
            disabled
          />
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
                style={{
                  margin: "0 9px",
                }}
                // value={maxResult}
                // onChange={handleChangeMaxResult}
              />
            </Col>
          </Row>
        </Form.Item>
      </Form> */
    // }
    // </Modal>
  );
};

export default ModalWind;
