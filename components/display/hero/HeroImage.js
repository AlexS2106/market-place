import Image from "next/image";

import { 
  heroImage,
  leftSide,
  rightSide
} from "./HeroImage.module.css";
import PrimaryHeader from "../../headers/PrimaryHeader";

import hero from "./guy-running.png";

const HeroImage = () => { 
  return (
    <div className={ heroImage }>
      <div className={ leftSide }>
        <PrimaryHeader />
      </div>
      <div className={ rightSide }>
        <Image
          src={ hero }
          alt="a man running"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default HeroImage;