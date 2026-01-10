import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { FieldNamesType } from 'antd/es/cascader';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const onFinish: FormProps<FieldNamesType>['onFinish'] = (values: any) => {
        localStorage.setItem('forgetEmail', JSON.stringify(values.email));
        navigate('/verify-otp');
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#055E6E',
                    colorBgContainer: '#F1F4F9',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        colorBorder: 'transparent',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: 'transparent',
                        controlOutline: 'none',
                        activeBorderColor: 'transparent',
                    },
                },
            }}
        >
            <div className="flex  items-center justify-center h-screen p-5 " style={{}}>
                <div className="bg-white max-w-[630px] w-full rounded-lg drop-shadow-2xl p-10  mb-10">
                    <div className=" flex flex-col justify-center items-center  mb-6  text-center">
                        <img src="/Logo.png" alt="" className="w-44 mb-4" />
                        <h1 className="text-3xl  font-medium text-center my-2 text-[#000]">Forget Password</h1>
                        <p className="text-lg text-gray-400">
                            Enter your email address to ger a verification code for resetting your password.
                        </p>
                    </div>

                    <Form
                        name="normal_ForgetPassword"
                        className="ForgetPassword-form"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label={
                                <label htmlFor="email" className="block text-primaryText mb-1 text-lg">
                                    Email
                                </label>
                            }
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Enter your email address" type="email" className="h-12 mb-12" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                className="!bg-[#055E6E]"
                                htmlType="submit"
                                style={{
                                    height: 45,
                                    width: '100%',
                                    fontWeight: 500,
                                    color: '#fff',
                                    fontSize: 20,
                                }}
                                // onClick={() => navigate('/')}
                            >
                                Send a code
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default ForgetPassword;
