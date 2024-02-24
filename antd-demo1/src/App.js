import './App.css';
import 'antd/dist/reset.css'
import {Button, Input, Form} from 'antd';

function App() {

  const onFinish = (e) => {
    console.log('Success:', e);
  }


  return (
    <div className="App">
      <header className="App-header">
      <Form onFinish={onFinish}>
        <Form.Item name={"USername"}>
          <Input placeholder='Username'></Input>
        </Form.Item>
        <Form.Item  name={"Password"}>
          <Input.Password placeholder='Password'></Input.Password>
        </Form.Item>

        <Button 
        type='primary' block style={{backgroundColor:"rgb(0,170,91)", color:"white"}} htmlType='submit'
        >Log in</Button>
      </Form>
      </header>
    </div>
  );
}

export default App;
