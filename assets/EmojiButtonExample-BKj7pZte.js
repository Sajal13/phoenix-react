import{PA as e,PB as t,PC as s,PD as o,Eg as i,QE as a,PF as n,Q_ as c,Sy as m}from"./index-B0Yq2HoF.js";const r=`
import Button from 'components/base/Button';
import EmojiPicker from 'components/base/EmojiPicker';

function EmojiButtonExample() {
  const [message, setMessage] = useState('')
  return (
    <EmojiPicker
      onSelect={selection => {
        setMessage(message + selection.emoji);
      }}
    >
      <Button
        variant="primary"
        className="fs-7"
      >
        <FontAwesomeIcon icon={faFaceSmile} />
      </Button>
    </EmojiPicker>
  )
}
`,l=()=>e.jsxs("div",{className:"mb-9",children:[e.jsx(t,{title:"Emoji button",description:"Phoenix-React uses Picmo as a emoji picker component. It displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you.",link:{text:"Documentation for Picmo",url:"https://picmojs.com/docs/api/overview/"}}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(o.Header,{title:"Example"}),e.jsx(o.Body,{code:r,scope:{EmojiPicker:m,Button:c,FontAwesomeIcon:n,useState:a.useState,faFaceSmile:i}})]})})]});export{l as default};
