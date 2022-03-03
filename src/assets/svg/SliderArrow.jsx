const SliderArrow = (props) => (
  <svg
    width={56}
    height={8}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      d='M.646 3.646a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 1 0 .708-.708L1.707 4l2.829-2.828a.5.5 0 1 0-.708-.708L.646 3.646ZM56 3.5H1v1h55v-1Z'
      fill='#000'
    />
  </svg>
);

export default SliderArrow;
