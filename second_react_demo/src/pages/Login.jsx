import { useState } from "react";
import { Form, Input, Button } from "antd";


function Login(){
    
    const [uname, setUname] = useState("");

    // function handleSubmit() {
    //     console.log(uname);
    // }
    function handleSubmit1(e) {
        e.preventDefault();
        console.log(uname);
    }
    
    return(
        <div>
           <Form onSubmitCapture={handleSubmit1} >
            <Form.Item>
                <Input placeholder="Username" onChange= { (event) => { setUname (event.target.value) } } />
            </Form.Item>
            
            <Form.Item>
                <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
                {/* <Button type="primary" htmlType="submit" onClick={handleSubmit} > */}
                <Button type="primary" htmlType="submit"  >
                    Login
                </Button>
            </Form.Item>
           </Form>
        </div>
    )
}

export default Login;