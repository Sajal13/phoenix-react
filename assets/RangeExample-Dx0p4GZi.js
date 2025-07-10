import{PA as e,PB as n,PC as l,PD as a,Sz as s}from"./index-B0Yq2HoF.js";const t=`
function DefaultExample() {
  const [values, setValues] = useState([10]);
  return (
    <PhoenixReactRange
      values={values}
      variant='primary'
      onChange={val => setValues(val)}
    />
  )
}
`,i=`
function RangeConnectExample() {
  const [values, setValues] = useState([20,80]);
  return (
    <PhoenixReactRange
      values={values}
      variant='primary'
      onChange={val => setValues(val)}
    />
  )
}
`,r=`
function ColoredSliderExample() {
  const [values, setValues] = useState({
    primary: [45],
    success: [35],
    info: [40],
    warning: [70],
    danger: [65]
  });
  return (
    <>
      <PhoenixReactRange
        values={values['primary']}
        variant="primary"
        onChange={val => setValues({...values, primary: val})}
        classNames={'mb-4'}
      />
      <PhoenixReactRange
        values={values['success']}
        variant="success"
        onChange={val => setValues({...values, success: val})}
        classNames={'mb-4'}
      />
      <PhoenixReactRange
      values={values['info']}
      variant="info"
      onChange={val => setValues({...values, info: val})}
      classNames={'mb-4'}
      />
      <PhoenixReactRange
      values={values['warning']}
      variant="warning"
      onChange={val => setValues({...values, warning: val})}
      classNames={'mb-4'}
      />
      <PhoenixReactRange
        values={values['danger']}
        variant="danger"
        onChange={val => setValues({...values, danger: val})}
      />
    </>
  )
}
`,o=`
function StylingExample() {
  const [values, setValues] = useState({
    slim: [45],
    medium: [45],
    large: [20, 150],
  });
  return (
    <>
      <PhoenixReactRange
        values={values['slim']}
        variant="primary"
        onChange={val => setValues({...values, slim: val})}
        trackHeight={'4px'}
        classNames= {'phoenix-react-range-slim mb-4'}
      />
      <PhoenixReactRange
        values={values['medium']}
        variant="primary-lighter"
        trackHeight={'6px'}
        onChange={val => setValues({...values, medium: val})}
        classNames={'phoenix-react-range-medium mb-4'}
      />
      <PhoenixReactRange
      values={values['large']}
      variant="primary-lighter"
      min={0}
      max={250}
      trackHeight={'1.5rem'}
      onChange={val => setValues({...values, large: val})}
      classNames={'phoenix-react-range-large'}
      />
    </>
  )
}
`,c=()=>e.jsxs("div",{className:"mb-9",children:[e.jsx(n,{title:"Range Slider",description:"Phoenix using React-range for advanced input with a slider which allows bring your own styles and markup.",link:{text:"React-range Documentation",url:"https://github.com/tajo/react-range/"}}),e.jsxs(l,{children:[e.jsxs(a,{className:"overflow-visible mb-4",children:[e.jsx(a.Header,{title:"Default"}),e.jsx(a.Body,{code:t,scope:{PhoenixReactRange:s}})]}),e.jsxs(a,{className:"overflow-visible mb-4",children:[e.jsx(a.Header,{title:"Range Connect"}),e.jsx(a.Body,{code:i,scope:{PhoenixReactRange:s}})]}),e.jsxs(a,{className:"overflow-visible mb-4",children:[e.jsx(a.Header,{title:"Colored Sliders"}),e.jsx(a.Body,{code:r,scope:{PhoenixReactRange:s}})]}),e.jsxs(a,{className:"overflow-visible mb-4",children:[e.jsx(a.Header,{title:"Styling"}),e.jsx(a.Body,{code:o,scope:{PhoenixReactRange:s}})]})]})]});export{c as default};
