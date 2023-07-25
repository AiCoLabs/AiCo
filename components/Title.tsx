const Title = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return (
    <div className={`text-center text-white text-4xl font-bold`}>
      {children}
    </div>
  );
};

export default Title;
