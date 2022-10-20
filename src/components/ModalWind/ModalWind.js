import React from 'react';
import { Modal, Button, Form, Input, Select} from 'antd';
import { useState } from 'react';
const { Option } = Select;

const ModalWind = () => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = true;

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const IntegerStep = () => {
        const [inputValue, setInputValue] = useState(1);
      
        const onChange = (newValue) => {
          setInputValue(newValue);
        };
    };
  return (
    <Modal
      style={{textAlign:'center'}}
      title="Сохранить запрос"
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Не сохранять
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Сохранить
        </Button>
      ]}
    >
      <Form
      layout='vertical'
      form={form}
      initialValues={{
        layout: 'vertical',
      }}
    >
      <Form.Item label="Запрос">
        <Input placeholder="input placeholder" disabled />
      </Form.Item>
      <Form.Item name='name' label="Название" rules={[{ required: true }]}>
        <Input placeholder="Укажите название" />
      </Form.Item>
      <Form.Item
        label="Сортировать по"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          style={{textAlign: 'left'}}
          placeholder="Без сортировки"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <IntegerStep/>
    </Form>
    </Modal>
  )
}

export default ModalWind