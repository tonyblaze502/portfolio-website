import { useState,useEffect } from "react";
import { Container, Row , Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["web developer", "web designer", "UI/UX Desing"]
    const [text1, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    },[text1])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate(i);
        let updatedText = isDeleting ? fullText.substring(0,text1.length - 1) : fullText.substring(0, text1.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hola soy Antonio'}<span className="wrap">{text1}</span></h1>
                        <p>Senior professional with more than 10+ years in directing and managing projects, technology and service delivery.

                                Strong experience in project management and a proven track record of delivering complex projects on time, on scope, and on budget, I've learned how to lead teams, manage complex projects, and work with cross-functional teams to achieve business goals. Plus, I have a knack for problem solving and thrive in fast-paced environments.

                                Strong strategist and process oriented with focus on Agile methodologies that delivers the use best practices and technology with the capacity to attract, retain and manage the best human resources. Skillful in the use of Application Life-cycle Management and Agile methodologies for project and product development. Extremely passionate about client service, quality assurance, organizational design and strategy.
                        </p>
                        <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25}/></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/> 
                    </Col>
                </Row>
            </Container>

        </section>
    )
}