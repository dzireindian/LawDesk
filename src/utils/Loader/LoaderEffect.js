import Lottie from 'react-lottie';
import animationData from './Loader.json';
import {useSelector} from "react-redux";

function LoaderEffect(props) {
    let loadState = useSelector(state => state.LoadReducer);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


      return  loadState.load ? <Lottie 
      options={defaultOptions}
      height={400}
      width={400}
    />:props.children;
}

export default LoaderEffect;