import {
  ProFormDateTimePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';

export interface FormValueType extends Partial<API.UserInfo> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.UserInfo>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => (
  <StepsForm
    stepsProps={{
      size: 'small',
    }}
    stepsFormRender={(dom, submitter) => {
      return (
        <Modal
          width={640}
          bodyStyle={{ padding: '32px 40px 48px' }}
          destroyOnClose
          title="规则配置"
          open={props.updateModalVisible}
          footer={submitter}
          onCancel={() => props.onCancel()}
        >
          {dom}
        </Modal>
      );
    }}
    onFinish={props.onSubmit}
  >
    <StepsForm.StepForm
      initialValues={{
        name: props.values.name,
        nickName: props.values.nickName,
        userId:props?.values?.id
      }}
      title="名称信息"
    >
      <ProFormText
        width="md"
        name="name"
        label="名称"
        rules={[{ required: true, message: '请输入规则名称！' }]}
      />
      <ProFormText
        name="nickName"
        width="md"
        label="nickname"
        placeholder="请输入至少五个字符"
        rules={[
          { required: true, message: '请输入至少五个字符的nickname！', min: 5 },
        ]}
      />
      <ProFormText
        style={{visibility:'hidden',opacity:0}}
        name="userId"
        width="md"
        label="userId"
        fieldProps={{
          disabled: true
        }}
 
      />
    </StepsForm.StepForm>
    <StepsForm.StepForm
      initialValues={{
        gender:props.values.gender||'MALE'
      }}
      title="传说中的神兽"
    >


      <ProFormRadio.Group
        name="gender"
        width="md"
        label="性别"
        options={[
          {
            value: 'MALE',
            label: '帅哥',
          },
          {
            value: 'FEMALE',
            label: '美女',
          },
        ]}
      />
      {/* <ProFormSelect
        width="md"
        name="gender"
        label="性别"
        valueEnum={{
          "MALE": '帅哥',
          'FEMALE': '美女',
        }}
      /> */}
    </StepsForm.StepForm>

  </StepsForm>
);

export default UpdateForm;
