import {Row} from "antd";
import {useDispatch} from "react-redux";
import {setSoundToPlay} from "../redux/features/game/gameSlice";
import {useEffect} from "react";
import Layout from "./Layout";
import backgroundImage from '../assets/extCastle/ZZ_QUIZ_CHATEAU.webp'
import {useNavigate} from "react-router-dom";
import {SOUNDS} from "../components/SoundEffect";

const ExtCastle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setSoundToPlay({
            sound: SOUNDS.FOREST,
        }))
    }, []);


    const goTavern = () => {
        navigate('/');
    }

    const goCastle = () => {
        navigate('/castle');
    }

    return (
        <Layout
            bgImage={backgroundImage}
            items={[
                {
                    label: 'Revenir devant la taverne',
                    onClick: goTavern,
                },
                {
                    label: 'Entrer dans le château',
                    onClick: goCastle,
                }
            ]}
            locationName={'Devant le château'}
        >
            <Row gutter={[24, 24]} justify={'space-between'} align={'bottom'} style={{
                marginTop: 30,
                width: '100%',
                height: '100%',
            }}>
            </Row>
        </Layout>
    )
}

export default ExtCastle
