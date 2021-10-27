import IntroData from "../data/IntroData.json";
import Block from "../components/Block"

export default function Home() {
  return (
    <>
       <Block
        type="intro"
        title={IntroData.title}
        content={IntroData.text}
        button={IntroData.button}
        icon="logo.png"
        id="intro"
      />
    </>
  )
}
